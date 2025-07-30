export interface Testimonial {
  id: string;
  guestName: string;
  guestPhoto: string;
  quote: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 'guest-1',
    guestName: 'Sab',
    guestPhoto: '/images/image-sab.png',
    quote:
      'Absolutely great accommodation in one of the most beautiful villas! Spacious, spacious, quiet and very clean. Dorothea is such a gracious and friendly host. Thanks for that. The location is unbeatable. We felt more than comfortable and would come back any time.'
  },
  {
    id: 'guest-2',
    guestName: 'Katja',
    guestPhoto: '/images/image-katja.png',
    quote:
      "Beautiful little apartment in an old villa. I didn't miss anything. You can walk quickly to the city and also fix the mountains thanks to the good public transport. Despite the heat, it was pleasantly cool in the apartment."
  },
  {
    id: 'guest-3',
    guestName: 'Wibke',
    guestPhoto: '/images/image-wibke.png',
    quote:
      'Super nice hostess, perfect location, cozy place to stay in a great property - we will be happy to come back😍'
  },
  {
    id: 'guest-4',
    guestName: 'Dieter',
    guestPhoto: '/images/image-dieter.png',
    quote:
      'One of the most beautiful apartments we have experienced on airbnb in 10 years. Dorothea is also a very lovely hostess. Full score!!!'
  },
  {
    id: 'guest-5',
    guestName: 'Michael',
    guestPhoto: '/images/image-michael.png',
    quote:
      'Very charming and beautiful place to stay just a few minutes from the center. We will be happy to come back.'
  },
  {
    id: 'guest-6',
    guestName: 'Michael',
    guestPhoto: '/images/image-michael.png',
    quote:
      "I have been in the apartment for the second time. I feel very comfortable there, great starting point for hikes around Merano and in Ulten. Very quiet and yet very centrally located. I'd love to come back :)"
  },
  {
    id: 'guest-7',
    guestName: 'Laura',
    guestPhoto: '/images/image-laura.png',
    quote:
      "Dorothea's house is beautiful and clean, original and very well-kept in every detail, the villa where it is charming and surrounded by greenery, the neighborhood is quiet and feels like walking in a forest but at the same time it is very close to the center and the magnificent paths and gardens of Merano. The owners are attentive, thoughtful, and kind! A great stay!"
  }
];
