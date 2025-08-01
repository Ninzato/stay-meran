import { Section } from '@/components/ui';
import { TestimonialCard } from './TestimonialCard';
import { getTranslations } from 'next-intl/server';
import type { Testimonial } from '@/lib/types/content';

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export async function TestimonialsGrid({
  testimonials
}: TestimonialsGridProps) {
  const t = await getTranslations('testimonials');

  if (!testimonials.length) {
    return (
      <Section className="mt-28 mb-20">
        <div className="text-center text-gray-500">No testimonials found</div>
      </Section>
    );
  }

  return (
    <Section className="mt-28 mb-20">
      <div className="flex flex-col gap-5 2xl:gap-10">
        <div className="flex flex-col gap-5 text-left 2xl:text-center">
          <h2 className="tracking-tightest text-[32px] leading-[1.5em] font-medium 2xl:text-[44px]">
            {t('title')}
          </h2>

          <p className="tracking-tightest text-base leading-[2em] font-light text-blue-800 2xl:text-xl 2xl:leading-[1.5em] 2xl:font-normal">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
          <div className="hidden flex-col gap-6 2xl:flex">
            {testimonials[0] && (
              <TestimonialCard
                testimonial={testimonials[0]}
                variant="first"
                className="2xl:flex-1"
              />
            )}
            {testimonials[1] && (
              <TestimonialCard
                testimonial={testimonials[1]}
                variant="normal"
                className="2xl:flex-1"
              />
            )}
          </div>

          <div className="flex flex-col gap-6 2xl:h-full">
            {testimonials[2] && (
              <TestimonialCard
                testimonial={testimonials[2]}
                variant="normal"
                className="2xl:flex-1"
              />
            )}
            {testimonials[3] && (
              <TestimonialCard
                testimonial={testimonials[3]}
                variant="normal"
                className="hidden 2xl:block 2xl:flex-1"
              />
            )}
            {testimonials[4] && (
              <TestimonialCard
                testimonial={testimonials[4]}
                variant="normal"
                className="hidden 2xl:block 2xl:flex-1"
              />
            )}
          </div>

          <div className="hidden flex-col gap-6 2xl:flex">
            {testimonials[5] && (
              <TestimonialCard
                testimonial={testimonials[5]}
                variant="normal"
              />
            )}
            {(testimonials[6] || testimonials[0]) && (
              <TestimonialCard
                testimonial={testimonials[6] || testimonials[0]}
                variant="last"
              />
            )}
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
