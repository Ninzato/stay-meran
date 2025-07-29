import { Button, Container } from '@/components/ui';
import { mockNavigation } from '@/lib/constants';

export function Header() {
  return (
    <header className="bg-background/80 border-foreground/10 w-full border-b backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href={mockNavigation.logo.href}
              className="text-foreground text-xl font-bold"
            >
              {mockNavigation.logo.text}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {mockNavigation.mainMenu.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-foreground/70 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side - Language + CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden items-center space-x-2 sm:flex">
              {mockNavigation.languages.map(lang => (
                <button
                  key={lang.code}
                  className="text-foreground hover:text-foreground/70 px-2 py-1 text-sm transition-colors"
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="sm"
            >
              {mockNavigation.cta.label}
            </Button>

            {/* Mobile Menu Button */}
            <button className="text-foreground p-2 md:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
