export interface Accommodation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  discoverMoreLink: string;
}

export const mockAccommodations: Accommodation[] = [
  {
    id: 'helles-apartment',
    title: 'Helles Apartment in historischer Villa',
    subtitle: 'Historic Villa Apartment',
    description:
      'A bright, stylish retreat in a historic villa, blending classic charm with modern comfort.',
    image: '/images/apartment-helles.png',
    price: '€100',
    discoverMoreLink: '/accommodations/helles-apartment'
  },
  {
    id: 'apartment-franz',
    title: 'Apartment Franz',
    subtitle: 'Modern Comfort',
    description:
      'A modern, minimalist retreat offering a peaceful and stylish stay in the heart of Merano.',
    image: '/images/apartment-franz.png',
    price: '€80',
    discoverMoreLink: '/accommodations/apartment-franz'
  },
  {
    id: 'apartment-sissi',
    title: 'Apartment Sissi mit Balkon',
    subtitle: 'Balcony with Mountain Views',
    description:
      'An elegant escape featuring a private balcony with picturesque views of the city and surrounding nature.',
    image: '/images/apartment-sissi.png',
    price: '€120',
    discoverMoreLink: '/accommodations/apartment-sissi'
  }
];
