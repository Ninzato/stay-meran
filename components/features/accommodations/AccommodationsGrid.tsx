import { AccommodationCard } from './AccommodationCard';
import { mockAccommodations } from '@/lib/constants';
import { Section } from '@/components/ui';

export function AccommodationsGrid() {
  return (
    <Section className="mt-20 mb-16 2xl:my-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:gap-[19px]">
        {mockAccommodations.map(accommodation => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
          />
        ))}
      </div>
    </Section>
  );
}
