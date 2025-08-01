'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface AccommodationCardAnimatedProps {
  children: React.ReactNode;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

interface AnimatedElement extends HTMLDivElement {
  __startAnimation?: () => void;
}

export function AccommodationCardAnimated({
  children,
  onAnimationStart,
  onAnimationComplete
}: AccommodationCardAnimatedProps) {
  const cardRef = useRef<AnimatedElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      // Set initial opacity to 0 for the entire card wrapper
      gsap.set(cardRef.current, { opacity: 0 });

      // Get animated elements - target the image wrapper div instead of img
      const imageWrapper = cardRef.current.querySelector(
        'div.relative.w-full.overflow-hidden.rounded-xl'
      );
      const title = cardRef.current.querySelector('h3');
      const description = cardRef.current.querySelector(
        'p[class*="leading-relaxed"]'
      );
      const button = cardRef.current.querySelector('button, [role="button"]');

      // Set initial states (no need to set opacity for child elements since parent is hidden)
      if (imageWrapper)
        gsap.set(imageWrapper, {
          scale: 0.6,
          transformOrigin: 'center center'
        });
      if (title) gsap.set(title, { clipPath: 'inset(0% 0% 100% 0%)' });
      if (description)
        gsap.set(description, { clipPath: 'inset(0% 0% 100% 0%)' });
      if (button) gsap.set(button, { scale: 0.7, opacity: 0 });

      // Animation function to be called externally - handles complete card animation sequence
      const startCardAnimation = () => {
        if (onAnimationStart) onAnimationStart();

        const cardTl = gsap.timeline({
          onComplete: () => {
            if (onAnimationComplete) onAnimationComplete();
          }
        });

        // 1. Card wrapper fade-in and image wrapper scale-up (simultaneous)
        cardTl.fromTo(
          cardRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power1.inOut' }
        );

        if (imageWrapper) {
          cardTl.fromTo(
            imageWrapper,
            { scale: 0.6 },
            { scale: 1, duration: 0.8, ease: 'power1.inOut' },
            0 // Start at same time as card fade-in
          );
        }

        // 2. Title animation (after image completes)
        if (title) {
          cardTl.fromTo(
            title,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 0.6,
              ease: 'power1.inOut'
            },
            '-=0.2' // Start 0.2s before image completes
          );
        }

        // 3. Description animation (slightly after title)
        if (description) {
          cardTl.fromTo(
            description,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 0.6,
              ease: 'power1.inOut'
            },
            '-=0.4' // Start 0.4s before title completes (0.2s after title starts)
          );
        }

        // 4. Button animation (after description)
        if (button) {
          cardTl.fromTo(
            button,
            { scale: 0.7, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'power1.inOut' },
            '-=0.3' // Start 0.3s before description completes
          );
        }
      };

      // Expose animation function to parent
      if (cardRef.current) {
        cardRef.current.__startAnimation = startCardAnimation;
      }
    }
  }, []);

  return (
    <div
      ref={cardRef}
      data-accommodation-card
    >
      {children}
    </div>
  );
}
