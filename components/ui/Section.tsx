import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionProps {
  className?: string;
}

export function Section({
  className,
  children
}: PropsWithChildren<SectionProps>) {
  return (
    <section className={cn('mx-auto w-[361px] 2xl:w-[1200px]', className)}>
      {children}
    </section>
  );
}
