export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationData {
  logo: {
    text: string;
    href: string;
  };
  mainMenu: NavigationItem[];
  languages: {
    code: string;
    label: string;
    flag?: string;
  }[];
  cta: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
}

export const mockNavigation: NavigationData = {
  logo: {
    text: 'Stay Meran',
    href: '/'
  },
  mainMenu: [
    {
      label: 'Our Story',
      href: '/our-story'
    },
    {
      label: 'Why Merano',
      href: '/why-merano'
    },
    {
      label: 'About Us',
      href: '/about'
    }
  ],
  languages: [
    {
      code: 'en',
      label: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'de',
      label: 'Deutsch',
      flag: '🇩🇪'
    },
    {
      code: 'it',
      label: 'Italiano',
      flag: '🇮🇹'
    }
  ],
  cta: {
    label: 'Book Now',
    href: '/book',
    variant: 'primary'
  }
};
