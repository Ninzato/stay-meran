import { Section } from '@/components/ui';
import { TestimonialCard } from './TestimonialCard';
import { mockTestimonials } from '@/lib/constants';

export function TestimonialsGrid() {
  return (
    <Section className="mt-16 mb-20">
      <div className="flex flex-col gap-5 2xl:gap-10">
        <div className="flex flex-col gap-5 text-left 2xl:text-center">
          {/* Section Title */}
          <h2 className="tracking-tightest text-[32px] leading-[1.5em] font-medium 2xl:text-[44px]">
            What Our Guests Say At StayMeran
          </h2>

          {/* Section Subtitle */}
          <p className="tracking-tightest text-base leading-[2em] font-light text-blue-800 2xl:text-xl 2xl:leading-[1.5em] 2xl:font-normal">
            We take pride in providing an exceptional stay for our guests. See
            what they have to say about their experiences and why they choose to
            return.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
          {/* Column 1: Large + Small */}
          <div className="hidden flex-col gap-6 2xl:flex">
            <TestimonialCard
              testimonial={mockTestimonials[0]}
              variant="first"
            />
            <TestimonialCard
              testimonial={mockTestimonials[1]}
              variant="normal"
            />
          </div>

          {/* Column 2: Equal + Equal + Equal */}
          <div className="flex flex-col gap-6 2xl:h-full">
            <TestimonialCard
              testimonial={mockTestimonials[2]}
              variant="normal"
              className="2xl:flex-1"
            />
            <TestimonialCard
              testimonial={mockTestimonials[3]}
              variant="normal"
              className="hidden 2xl:block 2xl:flex-1"
            />
            <TestimonialCard
              testimonial={mockTestimonials[4]}
              variant="normal"
              className="hidden 2xl:block 2xl:flex-1"
            />
          </div>

          {/* Column 3: Small + Large (inverted) */}
          <div className="hidden flex-col gap-6 2xl:flex">
            <TestimonialCard
              testimonial={mockTestimonials[5]}
              variant="normal"
            />
            {/* Add extra testimonial if available, otherwise repeat */}
            <TestimonialCard
              testimonial={mockTestimonials[0]}
              variant="last"
            />
          </div>
        </div>

        <div className="flex w-full justify-center gap-2 2xl:hidden">
          <div className="h-1 w-6 rounded-full bg-blue-900"></div>
          <div className="h-1 w-6 rounded-full bg-blue-800/70"></div>
          <div className="h-1 w-6 rounded-full bg-blue-800/70"></div>
          <div className="h-1 w-6 rounded-full bg-blue-800/70"></div>
        </div>
      </div>
    </Section>
  );
}
