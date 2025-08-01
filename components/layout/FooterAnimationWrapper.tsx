'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { splitTextIntoWords } from '@/lib/animations';
import type { AnimationEnabledElement } from '@/lib/animations/types';

interface FooterAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function FooterAnimationWrapper({
  children,
  className,
  id
}: FooterAnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (wrapperRef.current) {
      // Set initial opacity to 0 - footer should be hidden until snap animation
      gsap.set(wrapperRef.current, { opacity: 0 });
      

      // Function to trigger animations when snap scroll completes
      const startAnimations = () => {
        if (!wrapperRef.current) return;
        
        // Show the footer wrapper first
        gsap.set(wrapperRef.current, { opacity: 1 });
        
        const footerElement = wrapperRef.current.querySelector('footer');

        if (footerElement) {
          // Create main timeline
          const mainTl = gsap.timeline();

          // Footer background clip-path reveal animation
          mainTl.fromTo(
            footerElement,
            {
              clipPath: 'inset(0% 100% 100% 100%)'
            },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1,
              ease: 'power2.out'
            },
            0 // Start immediately
          );

          // 1. Contact Us Header Message Animation (0-1s) - Same as intro section
          const contactUsHeader = footerElement.querySelector('h2');
          if (contactUsHeader) {
            const headerWords = splitTextIntoWords(contactUsHeader);

            headerWords.forEach((word, index) => {
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
                  duration: 0.5,
                  ease: 'power2.out'
                },
                index * 0.1 // Stagger by 0.1s per word
              );
            });
          }

          // 2. Contact Buttons Animation (0.5-1.1s) - Both buttons simultaneously
          const contactButtons =
            footerElement.querySelectorAll('.button-contact');
          if (contactButtons.length > 0) {
            contactButtons.forEach(button => {
              mainTl.fromTo(
                button,
                {
                  scaleX: 1.3,
                  filter: 'blur(2px)',
                  opacity: 0
                },
                {
                  scaleX: 1,
                  filter: 'blur(0px)',
                  opacity: 1,
                  duration: 0.6,
                  ease: 'power2.out'
                },
                0.5 // Start at 0.5s mark
              );
            });
          }

          // 3. Stay Merano Logo + Span Animation (0.8-1.1s) - Fly-in from bottom
          const logoWrapper = footerElement.querySelector(
            '.w-\\[375px\\] .flex.items-center.gap-3'
          );
          if (logoWrapper) {
            mainTl.fromTo(
              logoWrapper,
              {
                y: 30,
                filter: 'blur(2px)',
                opacity: 0
              },
              {
                y: 0,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
              },
              0.8 // Start at 0.8s mark
            );
          }

          // 4. Bernhard Johannes Address Animation (0.8-1.8s) - Word by word with fly-in
          const addressParagraph = footerElement.querySelector(
            'p.tracking-tightest.leading-\\[2em\\]'
          );
          if (addressParagraph) {
            const addressWords = splitTextIntoWords(addressParagraph);

            addressWords.forEach((word, index) => {
              mainTl.fromTo(
                word,
                {
                  y: 30,
                  filter: 'blur(4px)',
                  opacity: 0
                },
                {
                  y: 0,
                  filter: 'blur(0px)',
                  opacity: 1,
                  duration: 0.3,
                  ease: 'power1.out'
                },
                0.8 + index * 0.1 // Start at 0.8s, stagger by 0.1s per word
              );
            });
          }

          // 5. Rating card
          const ratingCard = footerElement.querySelector('.rating-card');
          if (ratingCard) {
            mainTl.fromTo(
              ratingCard,
              {
                scale: 1.5,
                opacity: 0,
                filter: 'blur(2px)'
              },
              {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.7,
                ease: 'power1.out'
              },
              0.8
            );
          }

          // 6. Bottom section
          const bottomSections =
            footerElement.querySelectorAll('.bottom-section');
          if (bottomSections) {
            bottomSections.forEach(bottomSection => {
              mainTl.fromTo(
                bottomSection,
                {
                  scale: 0.7,
                  opacity: 0,
                  filter: 'blur(2px)'
                },
                {
                  scale: 1,
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 1,
                  ease: 'power1.out'
                },
                0.9
              );
            });
          }

          // 7. Social Icons
          const socialIcons = footerElement.querySelectorAll('.social-icons');
          if (socialIcons) {
            socialIcons.forEach(socialIcon => {
              mainTl.fromTo(
                socialIcon,
                {
                  opacity: 0,
                  scale: 1.4
                },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power2.out'
                },
                1
              );
            });
          }

          // 8. Footer Menu
          const footerMenus = footerElement.querySelectorAll('.footer-menu');
          if (footerMenus) {
            footerMenus.forEach(footerMenu => {
              mainTl.fromTo(
                footerMenu,
                {
                  opacity: 0
                },
                {
                  opacity: 1,
                  duration: 1,
                  ease: 'power1.out'
                },
                1
              );
            });
          }
        }
      };

      // Expose animation function to be called from FinalCtaAnimationWrapper
      if (wrapperRef.current) {
        (wrapperRef.current as AnimationEnabledElement).__startFooterAnimation = startAnimations;
      }
    }
  }, []);

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
