'use client';

import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface IntroAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function IntroAnimationWrapper({ children, className, id }: IntroAnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasTransitionedToWhyMerano, setHasTransitionedToWhyMerano] = useState(false);
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);

  useGSAP(() => {
    if (wrapperRef.current) {
      // Set initial opacity to 0
      gsap.set(wrapperRef.current, { opacity: 0 });
      
      // Utility function to split text into word spans (reused from hero)
      const splitTextIntoWords = (element: Element): HTMLSpanElement[] => {
        const text = element.textContent || '';
        const words = text.trim().split(/\s+/);
        const wordSpans: HTMLSpanElement[] = [];
        
        // Clear existing content
        element.innerHTML = '';
        
        // Create span for each word
        words.forEach((word, index) => {
          const span = document.createElement('span');
          span.textContent = word;
          span.style.display = 'inline-block';
          span.style.marginRight = index < words.length - 1 ? '0.25em' : '0';
          element.appendChild(span);
          wordSpans.push(span);
        });
        
        return wordSpans;
      };

      // Function to trigger animations when section becomes visible
      const startAnimations = () => {
        if (!wrapperRef.current) return;
        
        // Show the wrapper first
        gsap.set(wrapperRef.current, { opacity: 1 });
        
        // Create main timeline
        const mainTl = gsap.timeline();
        
        // 1. Intro Section Text Animation (Word by word)
        const introText = wrapperRef.current.querySelector('p[class*="tracking-tightest"]');
        if (introText) {
          const introWords = splitTextIntoWords(introText);
          
          introWords.forEach((word, index) => {
            mainTl.fromTo(word,
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
                duration: 0.5,
                ease: 'power2.out'
              },
              index * 0.1 // Stagger by 0.1s per word
            );
          });
          
          // Calculate when intro text completes
          const introCompleteTime = introWords.length * 0.1 + 0.5;
          
          // 2. Trigger Accommodation Card Image Animations (After intro completes - all simultaneously)
          const accommodationCards = wrapperRef.current.querySelectorAll('[data-accommodation-card]');
          
          if (accommodationCards.length > 0) {
            // Start all card animations simultaneously after intro completes
            mainTl.call(() => {
              accommodationCards.forEach((cardElement) => {
                const animatedCard = cardElement as HTMLDivElement & { __startAnimation?: () => void };
                const startCardAnimation = animatedCard.__startAnimation;
                if (startCardAnimation) {
                  startCardAnimation();
                }
              });
            }, [], introCompleteTime);
            
            // Mark animations as complete after all card animations finish
            const cardAnimationDuration = 2.5; // Estimated total card animation time
            const totalAnimationTime = introCompleteTime + cardAnimationDuration;
            
            mainTl.call(() => {
              setAnimationsComplete(true);
            }, [], totalAnimationTime);
          }
        }
      };

      // Auto-start animations for now (will integrate with hero scroll later)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimations();
              observer.disconnect(); // Run only once
            }
          });
        },
        { threshold: 0.1 }
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
      const scrollY = window.scrollY;
      const introSection = document.querySelector('#our-stays');
      const whyMeranoSection = document.querySelector('#why-merano');
      
      if (!introSection || !whyMeranoSection) return;
      
      const introElement = introSection as HTMLElement;
      const introSectionTop = introElement.offsetTop;
      const introSectionHeight = introElement.offsetHeight;
      const introSectionBottom = introSectionTop + introSectionHeight;
      
      // More generous detection - check if we're near the intro section
      const isNearIntroSection = scrollY >= (introSectionTop - 100) && scrollY < (introSectionBottom - 200);
      
      // Reset scroll accumulator if enough time has passed
      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current > 500) {
        scrollAccumulator.current = 0;
      }
      lastScrollTime.current = currentTime;
      
      // Accumulate scroll delta for more responsive detection
      if (event.deltaY > 0 && isNearIntroSection) {
        scrollAccumulator.current += Math.abs(event.deltaY);
      }
      
      // Lower threshold for triggering - just one meaningful scroll
      const canTransitionToWhyMerano = animationsComplete && !hasTransitionedToWhyMerano;
      const scrollThreshold = 50; // Much lower threshold
      
      // Scroll Down from Intro: Transition to why-merano section
      if (scrollAccumulator.current > scrollThreshold && isNearIntroSection && canTransitionToWhyMerano) {
        event.preventDefault();
        eventListenerActive = false; // Disable event listener during animation
        setIsScrollLocked(true);
        setHasTransitionedToWhyMerano(true);
        scrollAccumulator.current = 0; // Reset accumulator
        
        // Create smooth transition to why-merano
        const transitionTl = gsap.timeline({
          onComplete: () => {
            eventListenerActive = true; // Re-enable event listener
            setIsScrollLocked(false);
          }
        });
        
        // Smooth scroll to why-merano section
        transitionTl.to(window, {
          scrollTo: { y: whyMeranoSection, autoKill: false },
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
  }, [animationsComplete, hasTransitionedToWhyMerano, isScrollLocked]);

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