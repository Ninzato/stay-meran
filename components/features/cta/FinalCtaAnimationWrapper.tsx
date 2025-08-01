'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { splitTextIntoWords } from '@/lib/animations';
import type { AnimationEnabledElement } from '@/lib/animations/types';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface FinalCtaAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function FinalCtaAnimationWrapper({
  children,
  className,
  id
}: FinalCtaAnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasTransitionedToFooter, setHasTransitionedToFooter] = useState(false);
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

        // Find CTA elements
        const imageContainer = wrapperRef.current.querySelector(
          '.relative.flex.min-h-\\[504px\\]'
        ); // Container with image and overlay
        const title = wrapperRef.current.querySelector('h2');
        const subtitle = wrapperRef.current.querySelector('p');
        const button = wrapperRef.current.querySelector(
          'button, [role="button"]'
        );

        // 1. Image + Overlay Animation (0-1.1s)
        if (imageContainer) {
          mainTl.fromTo(
            imageContainer,
            {
              clipPath: 'inset(0% 100% 100% 100%)',
              scale: 1.2
            },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              scale: 1,
              duration: 1.1,
              ease: 'power2.out'
            },
            0 // Start immediately
          );
        }

        // 2. Title Animation (starts at 0.2s) - Word by word like intro section
        if (title) {
          const titleWords = splitTextIntoWords(title);

          titleWords.forEach((word, index) => {
            mainTl.fromTo(
              word,
              {
                x: -50,
                filter: 'blur(8px)',
                scale: 0.7,
                opacity: 0
              },
              {
                x: 0,
                filter: 'blur(0px)',
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
              },
              0.2 + index * 0.15 // Start at 0.2s, stagger by 0.15s per word
            );
          });
        }

        // 3. Subtitle Animation (starts at 0.2s) - Word by word like intro section
        if (subtitle) {
          const subtitleWords = splitTextIntoWords(subtitle);

          subtitleWords.forEach((word, index) => {
            mainTl.fromTo(
              word,
              {
                x: -50,
                filter: 'blur(8px)',
                scale: 0.7,
                opacity: 0
              },
              {
                x: 0,
                filter: 'blur(0px)',
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
              },
              0.2 + index * 0.03 // Start at 0.2s, faster stagger for longer text
            );
          });
        }

        // 4. Button Animation (starts at 0.35s)
        if (button) {
          mainTl.fromTo(
            button,
            {
              scale: 0.6,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out'
            },
            0.8 // Start at 0.35s
          );
        }

        // Mark animations as complete after all animations finish
        const totalAnimationTime = 1.6; // Image (1.1s) + overlapping text/button
        setTimeout(() => {
          setAnimationsComplete(true);
        }, totalAnimationTime * 1000);
      };

      // IntersectionObserver with 90% threshold (consistent with others)
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              startAnimations();
              observer.disconnect(); // Run only once
            }
          });
        },
        { threshold: 0.8 } // Trigger when 90% visible
      );

      observer.observe(wrapperRef.current);

      return () => observer.disconnect();
    }
  }, []);

  // Separate useEffect for scroll event handling with improved responsiveness
  useEffect(() => {
    let eventListenerActive = true;

    const handleScrollTransition = (event: WheelEvent) => {
      // Skip if event listener is disabled during animation
      if (!eventListenerActive || isScrollLocked) {
        return;
      }

      // Check current scroll position to determine section
      const finalCtaSection = document.querySelector('#final-cta');
      const footerSection = document.querySelector('#footer');

      if (!finalCtaSection || !footerSection) return;

      // Reset scroll accumulator if enough time has passed
      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current > 500) {
        scrollAccumulator.current = 0;
      }
      lastScrollTime.current = currentTime;

      // Accumulate scroll delta for more responsive detection
      if (event.deltaY > 0) {
        scrollAccumulator.current += Math.abs(event.deltaY);
      }

      // Lower threshold for triggering - just one meaningful scroll
      const canTransitionToFooter =
        animationsComplete && !hasTransitionedToFooter;
      const scrollThreshold = 50; // Much lower threshold

      // Scroll Down from Final CTA: Transition to footer section with bottom-to-bottom snap
      if (
        scrollAccumulator.current > scrollThreshold &&
        canTransitionToFooter
      ) {
        event.preventDefault();
        eventListenerActive = false; // Disable event listener during animation
        setIsScrollLocked(true);
        setHasTransitionedToFooter(true);
        scrollAccumulator.current = 0; // Reset accumulator

        // Pre-cache footer reference and animation function to eliminate delay
        const footerWrapper = document.querySelector('#footer');
        const startFooterAnimation = footerWrapper ? 
          (footerWrapper as AnimationEnabledElement).__startFooterAnimation : null;

        // Create smooth transition to footer with bottom-to-bottom alignment
        const transitionTl = gsap.timeline({
          onComplete: () => {
            // Trigger footer animation immediately when scroll completes (no DOM queries = no delay)
            if (startFooterAnimation) {
              startFooterAnimation();
            }
            
            eventListenerActive = true; // Re-enable event listener
            setIsScrollLocked(false);
          }
        });

        // Calculate bottom-to-bottom snap position
        // Footer bottom should align with viewport bottom
        const footerElement = footerSection as HTMLElement;
        const footerTop = footerElement.offsetTop;
        const footerHeight = footerElement.offsetHeight;
        const viewportHeight = window.innerHeight;
        const bottomToBottomPosition =
          footerTop + footerHeight - viewportHeight;

        // Smooth scroll to calculated position (bottom-to-bottom)
        transitionTl.to(window, {
          scrollTo: { y: bottomToBottomPosition, autoKill: false },
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
  }, [animationsComplete, hasTransitionedToFooter, isScrollLocked]);

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
