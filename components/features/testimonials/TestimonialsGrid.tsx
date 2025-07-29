import { Container } from '@/components/ui';
import { TestimonialCard } from './TestimonialCard';
import { mockTestimonials } from '@/lib/constants';

export function TestimonialsGrid() {
  return (
    <section className="bg-background py-16">
      <Container>
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            What Our Guests Say At StayMeran
          </h2>
        </div>

        {/* Section Subtitle */}
        <div className="mb-12 text-center">
          <p className="text-foreground mb-4 text-lg font-medium md:text-xl">
            We take pride in providing an exceptional stay for our guests. See
            what they have to say about their experiences and why they choose to
            return.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Column 1: Large + Small */}
          <div className="space-y-6">
            <TestimonialCard
              testimonial={mockTestimonials[0]}
              size="large"
            />
            <TestimonialCard
              testimonial={mockTestimonials[1]}
              size="small"
            />
          </div>

          {/* Column 2: Equal + Equal + Equal */}
          <div className="space-y-6">
            <TestimonialCard
              testimonial={mockTestimonials[2]}
              size="equal"
            />
            <TestimonialCard
              testimonial={mockTestimonials[3]}
              size="equal"
            />
            <TestimonialCard
              testimonial={mockTestimonials[4]}
              size="equal"
            />
          </div>

          {/* Column 3: Small + Large (inverted) */}
          <div className="space-y-6">
            <TestimonialCard
              testimonial={mockTestimonials[5]}
              size="small"
            />
            {/* Add extra testimonial if available, otherwise repeat */}
            <TestimonialCard
              testimonial={mockTestimonials[0]}
              size="large"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
