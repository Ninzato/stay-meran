'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { splitTextIntoWords } from '@/lib/animations';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface TestimonialAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function TestimonialAnimationWrapper({ children, className, id }: TestimonialAnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasTransitionedToFinalCta, setHasTransitionedToFinalCta] = useState(false);
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
        
        // Find title and subtitle elements in testimonials header
        const title = wrapperRef.current.querySelector('h2');
        const subtitle = wrapperRef.current.querySelector('p');
        
        if (title && subtitle) {
          // Split text into words
          const titleWords = splitTextIntoWords(title);
          const subtitleWords = splitTextIntoWords(subtitle);
          
          // Calculate stagger timing to synchronize completion at 1 second (same as WhyMerano)
          const totalDuration = 1000; // 1 second in milliseconds
          const animationDuration = 0.6; // Duration of each word animation
          
          // Calculate stagger intervals to finish simultaneously
          const titleStagger = titleWords.length > 1 ? (totalDuration - animationDuration * 1000) / (titleWords.length - 1) : 0;
          const subtitleStagger = subtitleWords.length > 1 ? (totalDuration - animationDuration * 1000) / (subtitleWords.length - 1) : 0;
          
          // Animate title words with fly-up effect (same as WhyMerano)
          titleWords.forEach((word, index) => {
            mainTl.fromTo(word,
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
          
          // Animate subtitle words with fly-up effect (starting simultaneously)
          subtitleWords.forEach((word, index) => {
            mainTl.fromTo(word,
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
              index * (subtitleStagger / 1000) // Convert to seconds for GSAP
            );
          });
          
          // 2. Testimonial Cards Animation (starts at 0.8 second mark)
          const cardsStartTime = 0.8; // Start at 0.8s during title/subtitle animation
          
          // Find all testimonial cards
          const testimonialCards = wrapperRef.current.querySelectorAll('[data-testimonial-card]');
          
          if (testimonialCards.length > 0) {
            // Animate all cards simultaneously
            testimonialCards.forEach((card) => {
              mainTl.fromTo(card,
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
                cardsStartTime // All cards start at same time
              );
            });
          }
          
          // Mark animations as complete after all animations finish
          const totalAnimationTime = 1.6; // Title/subtitle (1s) + cards (0.8s with 0.8s start) = 1.6s
          setTimeout(() => {
            setAnimationsComplete(true);
          }, totalAnimationTime * 1000);
        }
      };

      // IntersectionObserver with 90% threshold (consistent with others)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimations();
              observer.disconnect(); // Run only once
            }
          });
        },
        { threshold: 0.9 } // Trigger when 90% visible
      );

      observer.observe(wrapperRef.current);
      
      return () => observer.disconnect();
    }
  }, []);

  // Separate useEffect for scroll event handling with bottom-to-bottom snap
  useEffect(() => {
    let eventListenerActive = true;
    
    const handleScrollTransition = (event: WheelEvent) => {
      // Skip if event listener is disabled during animation
      if (!eventListenerActive || isScrollLocked) {
        return;
      }
      
      // Check current scroll position to determine section
      const scrollY = window.scrollY;
      const testimonialSection = document.querySelector('#testimonial-grid');
      const finalCtaSection = document.querySelector('#final-cta');
      
      if (!testimonialSection || !finalCtaSection) return;
      
      const testimonialElement = testimonialSection as HTMLElement;
      const testimonialSectionTop = testimonialElement.offsetTop;
      const testimonialSectionHeight = testimonialElement.offsetHeight;
      const testimonialSectionBottom = testimonialSectionTop + testimonialSectionHeight;
      
      // More generous detection - check if we're near the testimonial section
      const isNearTestimonialSection = scrollY >= (testimonialSectionTop - 100) && scrollY < (testimonialSectionBottom - 200);
      
      // Reset scroll accumulator if enough time has passed
      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current > 500) {
        scrollAccumulator.current = 0;
      }
      lastScrollTime.current = currentTime;
      
      // Accumulate scroll delta for more responsive detection
      if (event.deltaY > 0 && isNearTestimonialSection) {
        scrollAccumulator.current += Math.abs(event.deltaY);
      }
      
      // Lower threshold for triggering
      const canTransitionToFinalCta = animationsComplete && !hasTransitionedToFinalCta;
      const scrollThreshold = 50;
      
      // Scroll Down from Testimonials: Transition to final-cta section with bottom-to-bottom snap
      if (scrollAccumulator.current > scrollThreshold && isNearTestimonialSection && canTransitionToFinalCta) {
        event.preventDefault();
        eventListenerActive = false; // Disable event listener during animation
        setIsScrollLocked(true);
        setHasTransitionedToFinalCta(true);
        scrollAccumulator.current = 0; // Reset accumulator
        
        // Create smooth transition to final-cta with bottom-to-bottom alignment
        const transitionTl = gsap.timeline({
          onComplete: () => {
            eventListenerActive = true; // Re-enable event listener
            setIsScrollLocked(false);
          }
        });
        
        // Calculate bottom-to-bottom snap position including margin-bottom
        // FinalCtaSection has my-[106px] = margin-bottom: 106px
        // Formula: finalCtaSection.bottom + marginBottom - viewport.height
        const finalCtaElement = finalCtaSection as HTMLElement;
        const finalCtaTop = finalCtaElement.offsetTop;
        const finalCtaHeight = finalCtaElement.offsetHeight;
        const viewportHeight = window.innerHeight;
        const marginBottom = 106; // my-[106px] = 106px margin-bottom
        const bottomToBottomPosition = finalCtaTop + finalCtaHeight + marginBottom - viewportHeight;
        
        // Smooth scroll to calculated position (bottom-to-bottom)
        transitionTl.to(window, {
          scrollTo: { y: bottomToBottomPosition, autoKill: false },
          duration: 1.5,
          ease: 'power2.inOut'
        });
      }
    };
    
    // Add scroll event listener to document
    document.addEventListener('wheel', handleScrollTransition, { passive: false });
    
    // Cleanup function
    return () => {
      document.removeEventListener('wheel', handleScrollTransition);
    };
  }, [animationsComplete, hasTransitionedToFinalCta, isScrollLocked]);

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