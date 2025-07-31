import { AccommodationCard } from './AccommodationCard';
import { Section } from '@/components/ui';
import type { Accommodation } from '@/lib/constants';

interface AccommodationsGridProps {
  accommodations: Accommodation[];
}

export function AccommodationsGrid({ accommodations }: AccommodationsGridProps) {
  if (!accommodations.length) {
    return (
      <Section className="mt-20 mb-16 2xl:my-10">
        <div className="text-center text-gray-500">
          No accommodations found
        </div>
      </Section>
    );
  }

  return (
    <Section className="mt-20 mb-16 2xl:my-10">
      <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3 2xl:gap-[19px]">
        {accommodations.map(accommodation => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
          />
        ))}
      </div>
    </Section>
  );
}
