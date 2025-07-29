import { Container } from '@/components/ui';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold">
                Contact us for more details about your perfect stay in Merano.
              </h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  info@staymeran.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +39 123 456 789
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="mb-4 font-semibold">About</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/our-story"
                    className="hover:text-background/70 transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/why-merano"
                    className="hover:text-background/70 transition-colors"
                  >
                    Why Merano
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-background/70 transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Story */}
            <div>
              <h4 className="mb-4 font-semibold">Our Story</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/accommodations"
                    className="hover:text-background/70 transition-colors"
                  >
                    Accommodations
                  </a>
                </li>
                <li>
                  <a
                    href="/booking"
                    className="hover:text-background/70 transition-colors"
                  >
                    Booking
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-background/70 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-background/20 border-t pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              {/* Logo and Copyright */}
              <div className="mb-4 flex items-center space-x-4 md:mb-0">
                <div className="text-xl font-bold">Stay Meran</div>
                <span className="text-background/70">© 2024</span>
              </div>

              {/* Social Links & Language */}
              <div className="flex items-center space-x-4">
                <span className="text-background/70">Language:</span>
                <div className="flex space-x-2">
                  <button className="text-background hover:text-background/70">
                    🇺🇸 ENG
                  </button>
                  <button className="text-background hover:text-background/70">
                    🇩🇪 DE
                  </button>
                </div>

                {/* Social Icons Placeholder */}
                <div className="ml-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-background hover:text-background/70"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-background hover:text-background/70"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
