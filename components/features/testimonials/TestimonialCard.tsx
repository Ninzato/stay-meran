import Image from 'next/image';
import type { Testimonial } from '@/lib/types/content';
import { cn } from '@/lib/utils/cn';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant: 'normal' | 'first' | 'last';
  className?: string;
}

export function TestimonialCard({
  testimonial,
  variant,
  className
}: TestimonialCardProps) {
  return (
    <div
      data-testimonial-card
      className={cn(
        'rounded-xl border border-blue-200 bg-white p-5',
        className,
        {
          'bg-blue-700': variant === 'first',
          'bg-blue-100': variant === 'last'
        }
      )}
    >
      <div className="flex flex-col h-full justify-between gap-5">
        <p
          className={cn(
            'tracking-tightest text-xl leading-[2em] font-normal text-blue-800',
            {
              'text-white': variant === 'first'
            }
          )}
        >
          {testimonial.quote}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <h4
              className={cn(
                'tracking-tightest text-xl leading-[1.5em] font-medium text-blue-900',
                {
                  'text-white': variant === 'first'
                }
              )}
            >
              {testimonial.guestName}
            </h4>
          </div>
          <div className="relative h-16 w-16 overflow-hidden rounded-xl">
            <Image
              src={testimonial.guestPhoto}
              alt={testimonial.guestName}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
