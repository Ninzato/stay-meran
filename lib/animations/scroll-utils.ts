import gsap from 'gsap';

export interface ScrollTransitionOptions {
  isScrollLocked: boolean;
  eventListenerActive: boolean;
  scrollAccumulator: React.MutableRefObject<number>;
  lastScrollTime: React.MutableRefObject<number>;
  scrollThreshold?: number;
  scrollTimeout?: number;
  onTransition: () => void;
}

export function createScrollTransitionHandler({
  isScrollLocked,
  eventListenerActive,
  scrollAccumulator,
  lastScrollTime,
  scrollThreshold = 300,
  scrollTimeout = 150,
  onTransition
}: ScrollTransitionOptions) {
  return (event: WheelEvent) => {
    if (!eventListenerActive || isScrollLocked) {
      return;
    }

    event.preventDefault();

    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime.current;

    if (timeDiff > scrollTimeout) {
      scrollAccumulator.current = 0;
    }

    scrollAccumulator.current += Math.abs(event.deltaY);
    lastScrollTime.current = currentTime;

    if (scrollAccumulator.current >= scrollThreshold) {
      onTransition();
      scrollAccumulator.current = 0;
    }
  };
}

export function smoothScrollToSection(targetId: string, duration: number = 1) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    gsap.to(window, {
      duration,
      scrollTo: { y: targetElement, offsetY: 0 },
      ease: 'power2.inOut'
    });
  }
}