import { AccommodationCard } from './AccommodationCard';
import { mockAccommodations } from '@/lib/constants';
import { Section } from '@/components/ui';

export function AccommodationsGrid() {
  return (
    <Section className="mt-10">
      <div className="grid grid-cols-1 gap-[19px] md:grid-cols-2 lg:grid-cols-3">
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
