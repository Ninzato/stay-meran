'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface HeroAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroAnimationWrapper({
  children,
  className
}: HeroAnimationWrapperProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);

  useGSAP(() => {
    if (heroRef.current) {
      // Utility function to split text into word spans
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
      // Find elements within and outside the hero container
      const backgroundImage = heroRef.current.querySelector('img');
      const header = document.querySelector('header');

      // Create timeline for synchronized animations
      const tl = gsap.timeline();

      // Hero clip-path animation (inside → out)
      tl.fromTo(
        heroRef.current,
        {
          clipPath: 'inset(50% 50% 50% 50%)'
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power2.out'
        }
      );

      // Hero parallax/zoom animation (outside → in) - runs simultaneously
      if (backgroundImage) {
        tl.fromTo(
          backgroundImage,
          {
            scale: 1.3,
            transformOrigin: 'center center'
          },
          {
            scale: 1,
            duration: 1,
            ease: 'power2.out'
          },
          0 // Start at the same time as clip-path animation
        );
      }

      // Header animation - starts at 0.5 seconds
      if (header) {
        // Target only the main header container (not language switcher)
        const mainHeaderContainer = header.querySelector(
          'div[class*="rounded-full"]'
        );

        if (mainHeaderContainer) {
          // Header clip-path: vertical curtain reveal (|| bars moving outward)
          tl.fromTo(
            mainHeaderContainer,
            {
              clipPath: 'inset(0% 40% 0% 40%)', // Hidden: vertical bars on sides
              opacity: 0
            },
            {
              clipPath: 'inset(0% 0% 0% 0%)', // Revealed: curtains open
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out'
            },
            0.5 // Start 0.5 seconds after timeline begins
          );

          // Header content parallax effect
          tl.fromTo(
            mainHeaderContainer,
            {
              scale: 1.2,
              y: 0
            },
            {
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out'
            },
            0.5 // Start at same time as header clip-path
          );
        }
      }

      // Language Switcher animation - staggered drop-in effect
      if (header) {
        // Direct selector - look for the button with globe icon
        const languageButton = header.querySelector('button[class*="gap-3"]');
        if (languageButton) {
          const globeImage = languageButton.querySelector(
            'img[src*="icon-world"]'
          );
          const languageText = languageButton.querySelector(
            'span[class*="font-dm-sans"]'
          );
          const chevronSvg = languageButton.querySelector('svg');

          // Globe image animation (0.5s)
          if (globeImage) {
            tl.fromTo(
              globeImage,
              {
                y: -30,
                scale: 0.8,
                filter: 'blur(4px)',
                opacity: 0
              },
              {
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
              },
              0.5 // Start at 0.5s
            );
          }

          // Language text animation (0.6s)
          if (languageText) {
            tl.fromTo(
              languageText,
              {
                y: -30,
                scale: 0.8,
                filter: 'blur(4px)',
                opacity: 0
              },
              {
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
              },
              0.6 // Start at 0.6s
            );
          }

          // Chevron SVG animation (0.7s)
          if (chevronSvg) {
            tl.fromTo(
              chevronSvg,
              {
                y: -30,
                scale: 0.8,
                filter: 'blur(4px)',
                opacity: 0
              },
              {
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
              },
              0.7 // Start at 0.7s
            );
          }
        }
      }

      // Hero Content Text Animations - Word-by-word reveals
      const heroContent = heroRef.current.querySelector('.relative.z-10');
      if (heroContent) {
        // Target elements
        const subtitle = heroContent.querySelector('p.tracking-widest');
        const title1 = heroContent.querySelector('h1 span:first-child');
        const title2 = heroContent.querySelector('h1 span:nth-child(2)');
        const heroSearch = heroContent.querySelector('div[class*="pt-"]');

        const currentTime = 0.7; // Starting time for Group 1

        // Group 1: Subtitle + Title 1 (0.7s) - Word by word
        if (subtitle) {
          const subtitleWords = splitTextIntoWords(subtitle);
          subtitleWords.forEach((word, index) => {
            tl.fromTo(
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
                duration: 0.5,
                ease: 'power2.out'
              },
              currentTime + index * 0.15 // Stagger by 0.15s per word
            );
          });
        }

        if (title1) {
          const title1Words = splitTextIntoWords(title1);
          title1Words.forEach((word, index) => {
            tl.fromTo(
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
                duration: 0.5,
                ease: 'power2.out'
              },
              currentTime + index * 0.15 // Continue staggering
            );
          });
        }

        // Group 2: Title 2 + Hero Search (1.7s) - Word by word
        const group2Time = 1.1; // Start after Group 1 completes

        if (title2) {
          const title2Words = splitTextIntoWords(title2);
          title2Words.forEach((word, index) => {
            tl.fromTo(
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
                duration: 0.5,
                ease: 'power2.out'
              },
              group2Time + index * 0.15 // Stagger Title 2 words
            );
          });
        }

        if (heroSearch) {
          tl.fromTo(
            heroSearch,
            {
              filter: 'blur(8px)',
              scale: 0.8,
              opacity: 0
            },
            {
              filter: 'blur(0px)',
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out'
            },
            group2Time // Start after Title 2 words complete
          );
        }
      }
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
      
      // Only handle scroll down from hero section
      if (event.deltaY <= 0 || hasTransitioned) {
        return;
      }
      
      const introSection = document.querySelector('#our-stays');
      if (!introSection) return;
      
      // Reset scroll accumulator if enough time has passed
      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current > 500) {
        scrollAccumulator.current = 0;
      }
      lastScrollTime.current = currentTime;
      
      // Accumulate scroll delta for more responsive detection
      scrollAccumulator.current += Math.abs(event.deltaY);
      
      // Lower threshold for triggering - just one meaningful scroll
      const scrollThreshold = 50;
      
      // Scroll Down from Hero: Transition to intro section
      if (scrollAccumulator.current > scrollThreshold) {
        event.preventDefault();
        eventListenerActive = false; // Disable event listener during animation
        setIsScrollLocked(true);
        setHasTransitioned(true);
        scrollAccumulator.current = 0; // Reset accumulator
        
        // Create smooth transition to intro section
        const transitionTl = gsap.timeline({
          onComplete: () => {
            eventListenerActive = true; // Re-enable event listener
            setIsScrollLocked(false);
          }
        });
        
        // Smooth scroll to intro section
        transitionTl.to(window, {
          scrollTo: { y: introSection, autoKill: false },
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
  }, [hasTransitioned, isScrollLocked]);

  return (
    <div
      ref={heroRef}
      className={className}
    >
      {children}
    </div>
  );
}
