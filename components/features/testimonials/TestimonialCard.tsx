import Image from 'next/image';
import { Card } from '@/components/ui';
import type { Testimonial } from '@/lib/constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
  size?: 'small' | 'large' | 'equal';
}

export function TestimonialCard({ testimonial, size = 'equal' }: TestimonialCardProps) {
  return (
    <Card
      variant="bordered"
      className={` ${size === 'large' ? 'row-span-2' : ''} ${size === 'small' ? 'h-fit' : ''} ${size === 'equal' ? '' : ''} `}
    >
      <div className="space-y-4">
        {/* Guest Info */}
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            {/* <Image
              src={testimonial.guestPhoto}
              alt={testimonial.guestName}
              fill
              className="object-cover"
            /> */}
          </div>
          <div>
            <h4 className="text-foreground font-semibold">{testimonial.guestName}</h4>
            {testimonial.location && <p className="text-foreground/60 text-sm">{testimonial.location}</p>}
          </div>
        </div>

        {/* Rating */}
        <div className="flex space-x-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 fill-current text-yellow-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-foreground/80 leading-relaxed">&quot;{testimonial.quote}&quot;</blockquote>
      </div>
    </Card>
  );
}
