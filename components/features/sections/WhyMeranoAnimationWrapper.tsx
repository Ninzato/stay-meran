'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { splitTextIntoWords } from '@/lib/animations';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface WhyMeranoAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function WhyMeranoAnimationWrapper({
  children,
  className,
  id
}: WhyMeranoAnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasTransitionedToTestimonials, setHasTransitionedToTestimonials] =
    useState(false);
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);

  useGSAP(() => {
    if (wrapperRef.current) {
      // Set initial opacity to 0
      gsap.set(wrapperRef.current, { opacity: 0 });


      // Function to trigger animations when section becomes visible
      const startAnimations = () => {
        if (!wrapperRef.current) return;
        
        // Show the wrapper first
        gsap.set(wrapperRef.current, { opacity: 1 });

        // Create main timeline
        const mainTl = gsap.timeline();

        // Find title and content elements in WhyMeranoSection
        const title = wrapperRef.current.querySelector('#why-merano h2');
        const content = wrapperRef.current.querySelector('#why-merano p');

        if (title && content) {
          // Split text into words
          const titleWords = splitTextIntoWords(title);
          const contentWords = splitTextIntoWords(content);

          // Calculate stagger timing to synchronize completion at 1 second
          const totalDuration = 1000; // 1 second in milliseconds
          const animationDuration = 0.6; // Duration of each word animation

          // Calculate stagger intervals to finish simultaneously
          const titleStagger =
            titleWords.length > 1
              ? (totalDuration - animationDuration * 1000) /
                (titleWords.length - 1)
              : 0;
          const contentStagger =
            contentWords.length > 1
              ? (totalDuration - animationDuration * 1000) /
                (contentWords.length - 1)
              : 0;

          // Animate title words with fly-up effect
          titleWords.forEach((word, index) => {
            mainTl.fromTo(
              word,
              {
                opacity: 0,
                y: 30,
                filter: 'blur(2px)'
              },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: animationDuration,
                ease: 'power2.out'
              },
              index * (titleStagger / 1000) // Convert to seconds for GSAP
            );
          });

          // Animate content words with fly-up effect (starting simultaneously)
          contentWords.forEach((word, index) => {
            mainTl.fromTo(
              word,
              {
                opacity: 0,
                y: 30,
                filter: 'blur(2px)'
              },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: animationDuration,
                ease: 'power2.out'
              },
              index * (contentStagger / 1000) // Convert to seconds for GSAP
            );
          });

          // 2. NatureSection Animations (after WhyMerano completes at 1 second)
          const natureStartTime = 1; // Start after WhyMerano animations complete

          // Find NatureSection elements
          const imageContainer = wrapperRef.current.querySelector(
            '.relative.order-1.w-full.flex-grow.overflow-hidden.rounded-xl'
          );
          const leftContentContainer = wrapperRef.current.querySelector(
            '.order-2.flex.flex-col.gap-14'
          );

          if (imageContainer && leftContentContainer) {
            // Right Image Animation (simultaneous with left content)
            mainTl.fromTo(
              imageContainer,
              {
                clipPath: 'inset(0% 100% 100% 0%)',
                scale: 1.2
              },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                scale: 1,
                duration: 1,
                ease: 'power2.out'
              },
              natureStartTime
            );

            // Left Content Sequential Animations (4 divs)
            const contentDivs = Array.from(
              leftContentContainer.children
            ) as HTMLElement[];

            contentDivs.forEach((div, index) => {
              const divStartTime = natureStartTime + index * 0.25; // Stagger by 0.25s each

              mainTl.fromTo(
                div,
                {
                  x: -20,
                  opacity: 0,
                  filter: 'blur(3px)'
                  // clipPath: 'inset(100% 100% 0% 0%)'
                },
                {
                  x: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                  // clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 0.4,
                  ease: 'power1.out'
                },
                divStartTime
              );
            });
          }

          // Mark animations as complete after all animations finish
          const totalAnimationTime = 2; // WhyMerano (1s) + NatureSection (1s) = 2s
          mainTl.call(
            () => {
              setAnimationsComplete(true);
            },
            [],
            totalAnimationTime
          );
        }
      };

      // IntersectionObserver with 80% threshold
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              startAnimations();
              observer.disconnect(); // Run only once
            }
          });
        },
        { threshold: 0.9 } // Trigger when 80% visible
      );

      observer.observe(wrapperRef.current);

      return () => observer.disconnect();
    }
  }, []);

  // Separate useEffect for scroll event handling (similar to IntroAnimationWrapper)
  useEffect(() => {
    let eventListenerActive = true;

    const handleScrollTransition = (event: WheelEvent) => {
      // Skip if event listener is disabled during animation
      if (!eventListenerActive || isScrollLocked) {
        return;
      }

      // Check current scroll position to determine section
      const scrollY = window.scrollY;
      const whyMeranoSection = document.querySelector('#why-merano');
      const testimonialSection = document.querySelector('#testimonial-grid');

      if (!whyMeranoSection || !testimonialSection) return;

      const whyMeranoElement = whyMeranoSection as HTMLElement;
      const whyMeranoSectionTop = whyMeranoElement.offsetTop;
      const whyMeranoSectionHeight = whyMeranoElement.offsetHeight;
      const whyMeranoSectionBottom =
        whyMeranoSectionTop + whyMeranoSectionHeight;

      // More generous detection - check if we're near the why-merano section
      const isNearWhyMeranoSection =
        scrollY >= (whyMeranoSectionTop - 100) && scrollY < (whyMeranoSectionBottom - 200);
      
      // Reset scroll accumulator if enough time has passed
      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current > 500) {
        scrollAccumulator.current = 0;
      }
      lastScrollTime.current = currentTime;
      
      // Accumulate scroll delta for more responsive detection
      if (event.deltaY > 0 && isNearWhyMeranoSection) {
        scrollAccumulator.current += Math.abs(event.deltaY);
      }
      
      // Lower threshold for triggering
      const canTransitionToTestimonials =
        animationsComplete && !hasTransitionedToTestimonials;
      const scrollThreshold = 50;

      // Scroll Down from WhyMerano+Nature: Transition to testimonials section
      if (
        scrollAccumulator.current > scrollThreshold &&
        isNearWhyMeranoSection &&
        canTransitionToTestimonials
      ) {
        event.preventDefault();
        eventListenerActive = false; // Disable event listener during animation
        setIsScrollLocked(true);
        setHasTransitionedToTestimonials(true);
        scrollAccumulator.current = 0; // Reset accumulator

        // Create smooth transition to testimonials
        const transitionTl = gsap.timeline({
          onComplete: () => {
            eventListenerActive = true; // Re-enable event listener
            setIsScrollLocked(false);
          }
        });

        // Smooth scroll to testimonials section with offset for margin-top
        // mt-28 = 7rem = 112px, so we offset by -112px to show the margin
        transitionTl.to(window, {
          scrollTo: { y: testimonialSection, offsetY: 112, autoKill: false },
          duration: 1.5,
          ease: 'power2.inOut'
        });
      }
    };

    // Add scroll event listener to document
    document.addEventListener('wheel', handleScrollTransition, {
      passive: false
    });

    // Cleanup function
    return () => {
      document.removeEventListener('wheel', handleScrollTransition);
    };
  }, [animationsComplete, hasTransitionedToTestimonials, isScrollLocked]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      id={id}
    >
      {children}
    </div>
  );
}
