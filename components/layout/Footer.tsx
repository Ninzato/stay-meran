import Image from 'next/image';
import { Section } from '@/components/ui';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <Section className="flex flex-col gap-8 pt-[68px] pb-[91px]">
        {/* Header Message */}
        <div className="flex flex-col gap-8">
          <h2 className="tracking-tightest text-2xl font-medium 2xl:text-[40px]">
            Contact us for more details about your perfect stay in Merano.
          </h2>

          {/* Contact Buttons */}
          <div className="flex flex-col gap-5 2xl:flex-row">
            <button className="flex items-center gap-3 rounded-full px-6 py-3 text-left outline outline-blue-800 transition-colors hover:cursor-pointer hover:bg-white/10">
              <Image
                src="/icons/icon-email.svg"
                alt="Email"
                width={24}
                height={24}
              />
              <span className="tracking-tightest text-xl leading-[2em]">
                Email:
              </span>
              <span className="tracking-tightest text-xl leading-[2em]">
                info@staymeran.com
              </span>
            </button>
            <button className="flex items-center gap-3 rounded-full px-6 py-3 text-left outline outline-blue-800 transition-colors hover:cursor-pointer hover:bg-white/10">
              <Image
                src="/icons/icon-phone.svg"
                alt="Phone"
                width={24}
                height={24}
              />
              <span className="tracking-tightest text-xl leading-[2em]">
                Phone:
              </span>
              <span className="tracking-tightest text-xl leading-[2em]">
                +39 123 456 7890
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-blue-800"></div>

        {/* Main Content Area */}
        <div>
          {/* Desktop Layout */}
          <div className="hidden gap-8 2xl:flex">
            {/* Left: Logo + Address + Rating Card */}
            <div className="flex w-[375px] flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/icon-logo-dummy.svg"
                  alt="Stay Merano"
                  width={40}
                  height={40}
                />
                <span className="tracking-tightest text-xl leading-[2em] font-medium">
                  Stay Merano
                </span>
              </div>
              <p className="tracking-tightest leading-[2em]">
                Bernhard Johannes Str. 1, 39012 Merano
              </p>

              {/* Rating Card */}
              <Image
                src="/images/rating.png"
                alt="Booking.com Traveller Review Awards 2025 - Rating 9.3"
                width={192}
                height={136}
                className="rounded-lg"
              />
            </div>

            {/* About */}
            <div className="flex w-[195px] flex-col gap-3">
              <h3 className="tracking-tightest text-lg leading-[2em] font-medium">
                About
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#about"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#why-merano"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Merano
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Stays */}
            <div className="flex w-[298px] flex-col gap-3">
              <h3 className="tracking-tightest text-lg leading-[2em] font-medium">
                Our Stays
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Helles Apartment in historischer Villa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Apartment Franz
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Apartment Sissi mit Balkon
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Social Icons */}
            <div className="flex w-[250px] flex-col items-end justify-between gap-3">
              <div className="flex gap-6">
                <a
                  href="#"
                  className="rounded-full bg-blue-800 p-2 transition-colors hover:bg-white/20"
                >
                  <Image
                    src="/icons/icon-whatsapp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-blue-800 p-2 transition-colors hover:bg-white/20"
                >
                  <Image
                    src="/icons/icon-instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>

              {/* Content, Design and Code By */}
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/design-by.svg"
                  alt="Content, design and code by"
                  width={183}
                  height={12}
                />
                <div className="flex gap-4">
                  <div className="flex h-[92px] w-[103px] items-center justify-center rounded-lg bg-blue-800">
                    <Image
                      src="/icons/icon-mountain.svg"
                      alt="Mountain"
                      width={60}
                      height={42}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex h-[92px] w-[103px] items-center justify-center rounded-lg bg-blue-800">
                    <Image
                      src="/icons/icon-marketing.svg"
                      alt="Websites marketing social media"
                      width={78}
                      height={46}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 2xl:hidden">
            {/* About */}
            <div className="flex flex-col gap-4">
              <h3 className="tracking-tightest text-lg leading-[2em] font-medium">
                About
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="/about"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/merano"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Merano
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Stays */}
            <div className="flex flex-col gap-4">
              <h3 className="tracking-tightest text-lg leading-[2em] font-medium">
                Our Stays
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Helles Apartment in historischer Villa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Apartment Franz
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tracking-tightest leading-[2em] text-blue-400 transition-colors hover:text-white"
                  >
                    Apartment Sissi mit Balkon
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Social Media */}
            <div className="flex flex-col gap-4">
              <h3 className="tracking-tightest text-lg leading-[2em] font-medium">
                Our Social Media
              </h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="rounded-full bg-blue-800 p-2"
                >
                  <Image
                    src="/icons/icon-whatsapp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-blue-800 p-2"
                >
                  <Image
                    src="/icons/icon-instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>

            {/* Logo + Address */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/icon-logo-dummy.svg"
                  alt="Stay Merano"
                  width={40}
                  height={40}
                />
                <span className="tracking-tightest text-xl leading-[2em] font-medium">
                  Stay Merano
                </span>
              </div>
              <p className="tracking-tightest leading-[2em]">
                Bernhard Johannes Str. 1, 39012 Merano
              </p>

              {/* Rating Card */}
              <Image
                src="/images/rating.png"
                alt="Booking.com Traveller Review Awards 2025 - Rating 9.3"
                width={192}
                height={136}
                className="rounded-lg"
              />
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-blue-800"></div>

            {/* Content, Design and Code By */}
            <div className="flex flex-col gap-2">
              <Image
                src="/images/design-by.svg"
                alt="Content, design and code by"
                width={183}
                height={12}
              />
              <div className="flex gap-4">
                <div className="flex h-[92px] w-[103px] items-center justify-center rounded-lg bg-blue-800">
                  <Image
                    src="/icons/icon-mountain.svg"
                    alt="Mountain"
                    width={60}
                    height={42}
                    className="object-cover"
                  />
                </div>
                <div className="flex h-[92px] w-[103px] items-center justify-center rounded-lg bg-blue-800">
                  <Image
                    src="/icons/icon-marketing.svg"
                    alt="Websites marketing social media"
                    width={78}
                    height={46}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-blue-800"></div>

        {/* Bottom Section */}
        <div>
          <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
            {/* Right: Dropdowns */}
            <div className="order-1 flex gap-4 2xl:order-2 2xl:flex-row 2xl:gap-6">
              <button className="flex items-center gap-3">
                <span className="tracking-tightest leading-[2em] text-blue-400">
                  English (EN)
                </span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <button className="flex items-center gap-3">
                <span className="tracking-tightest leading-[2em] text-blue-400">
                  Legal
                </span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Left: Copyright */}
            <p className="tracking-tightest order-2 leading-[2em] text-blue-400 2xl:order-1">
              Copyright ©2025
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
