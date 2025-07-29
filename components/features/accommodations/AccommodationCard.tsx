import Image from 'next/image';
import { Button } from '@/components/ui';
import type { Accommodation } from '@/lib/constants';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export function AccommodationCard({ accommodation }: AccommodationCardProps) {
  return (
    <div className="flex w-[361px] flex-col gap-[26px] overflow-hidden md:w-[387px]">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image
          src={accommodation.image}
          alt={accommodation.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          width={388}
          height={409}
          sizes="(max-width: 768px) 361px, 409px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {/* Title */}
          <h3 className="text-xl font-semibold tracking-tight text-blue-900">{accommodation.title}</h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-blue-800">{accommodation.description}</p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
}
