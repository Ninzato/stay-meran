import Image from 'next/image';
import { Button } from '@/components/ui';
import type { Accommodation } from '@/lib/constants';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export function AccommodationCard({ accommodation }: AccommodationCardProps) {
  return (
    <div className="flex w-[361px] flex-col gap-[26px] 2xl:w-[387px]">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <Image
          src={accommodation.image}
          alt={accommodation.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          width={388}
          height={409}
          sizes="(max-width: 768px) 361px, 409px"
        />
        <div className="tracking-tightest absolute bottom-3 left-3 rounded-xl bg-white/80 px-2 py-4 font-medium">
          Start from {accommodation.price} / night
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {/* Title */}
          <h3 className="tracking-tightest text-xl font-semibold text-blue-900">
            {accommodation.title}
          </h3>

          {/* Description */}
          <p className="tracking-tightest leading-relaxed font-light text-blue-800">
            {accommodation.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Button
            variant="rounded"
            size="lg"
          >
            <span className="font-medium">Discover More</span>
            <Image
              src="/icons/icon-arrow-right.svg"
              alt="arrow-right"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
