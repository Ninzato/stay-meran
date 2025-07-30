import Image from 'next/image';

export function HeroSearch() {
  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 text-left outline-5 outline-blue-200/30 2xl:hidden">
        {/* Arrival & Departure */}
        <div className="flex flex-col gap-1">
          <h3 className="tracking-tightest leading-[1.5em] font-medium text-blue-900">
            Arrival & Departure
          </h3>
          <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-3 py-4">
            <Image
              src="/icons/icon-calendar.svg"
              alt="Calendar"
              width={24}
              height={24}
            />
            <span className="tracking-tightest text-sm leading-[1.5em] font-light text-blue-700">
              Select Date
            </span>
          </div>
        </div>

        {/* Person */}
        <div className="flex flex-col gap-1">
          <h3 className="tracking-tightest leading-[1.5em] font-medium text-blue-900">
            Person
          </h3>
          <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-3 py-4">
            <Image
              src="/icons/icon-person.svg"
              alt="Person"
              width={24}
              height={24}
            />
            <span className="tracking-tightest text-sm leading-[1.5em] font-light text-blue-700">
              0 Person
            </span>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-900 p-3 text-white">
          <span className="tracking-tightest text-sm leading-[1.5em] font-light">
            Find It
          </span>
          <Image
            src="/icons/Icon-search.svg"
            alt="Search"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden 2xl:block">
        <div className="flex items-center rounded-xl bg-blue-100 outline-5 outline-blue-200/30">
          {/* Left Section - Arrival & Departure */}
          <div className="h-[56px] flex-1 rounded-l-xl px-4 py-3 outline outline-blue-300">
            <div className="flex h-full items-center gap-3">
              <Image
                src="/icons/icon-calendar.svg"
                alt="Calendar"
                width={24}
                height={24}
              />
              <span className="tracking-tightest text-sm leading-[1.5em] font-light text-blue-700">
                Select Date
              </span>
            </div>
          </div>

          {/* Right Section - Person */}
          <div className="h-[56px] flex-1 px-4 py-3 outline outline-blue-300">
            <div className="flex h-full items-center gap-3">
              <Image
                src="/icons/icon-person.svg"
                alt="Person"
                width={24}
                height={24}
              />
              <span className="tracking-tightest text-sm leading-[1.5em] font-light text-blue-700">
                0 Person
              </span>
            </div>
          </div>

          {/* Search Button */}
          <button className="flex h-[56px] items-center justify-center rounded-r-xl bg-gray-900 p-4 text-white outline outline-blue-900">
            <Image
              src="/icons/Icon-search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
