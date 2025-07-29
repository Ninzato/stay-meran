import Image from 'next/image';
import { Card } from '@/components/ui';
import type { Testimonial } from '@/lib/constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
  size?: 'small' | 'large' | 'equal';
}

export function TestimonialCard({
  testimonial,
  size = 'equal'
}: TestimonialCardProps) {
  return (
    <Card
      variant="bordered"
      className={` ${size === 'large' ? 'row-span-2' : ''} ${size === 'small' ? 'h-fit' : ''} ${size === 'equal' ? '' : ''} `}
    >
      <div className="space-y-4">
        {/* Quote */}
        <p className="text-foreground/80 leading-relaxed">
          {testimonial.quote}
        </p>

        {/* Guest Info */}
        <div className="flex items-center justify-between space-x-3">
          <div>
            <h4 className="text-foreground font-semibold">
              {testimonial.guestName}
            </h4>
          </div>
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            {/* <Image
              src={testimonial.guestPhoto}
              alt={testimonial.guestName}
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </Card>
  );
}
