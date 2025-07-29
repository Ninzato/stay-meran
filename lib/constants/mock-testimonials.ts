export interface Testimonial {
  id: string;
  guestName: string;
  guestPhoto: string;
  quote: string;
  rating: number;
  location?: string;
  stayDate?: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 'guest-1',
    guestName: 'Michael',
    guestPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote:
      "Amazing and accommodation in the most convenient place, beautiful amazing food for the money. The couple that runs this will make you feel at home and you get to have been here before, I've just never felt at home in a business this much before. For a home away from home.",
    rating: 5,
    location: 'Germany'
  },
  {
    id: 'guest-2',
    guestName: 'Sarah',
    guestPhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face',
    quote:
      "Super nice treatments, perfect location. Very clean and I'd great month's experience booking. Check the back gardens and food nearby.",
    rating: 5,
    location: 'Austria'
  },
  {
    id: 'guest-3',
    guestName: 'David',
    guestPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote:
      'Great base in the apartment for the view. Spectacular view, great place had been. Quiet and clean, perfect for romantic excursions. Gorgeous and definitely updated so back! Very. Great central location close to the ski trails and the river which I thought was really nice.',
    rating: 5,
    location: 'Switzerland'
  },
  {
    id: 'guest-4',
    guestName: 'Lisa',
    guestPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote:
      'Very charming old beautiful castle in cozy and a the minutes from the center. Also. The grounds. Great welcome and the magnificent paths and gardens of accommodation, too was unique we all in every. Such a beautiful old time and the mountains are incredibly.',
    rating: 5,
    location: 'Netherlands'
  },
  {
    id: 'guest-5',
    guestName: 'Anna',
    guestPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
    quote:
      "Best stay of our life. So much so since and the apartment was so. Located with to there and a park and and we was and the the most the river. Incredible views and beautiful cozy. Can't wait to return and stay here again.",
    rating: 5,
    location: 'France'
  },
  {
    id: 'guest-6',
    guestName: 'Marco',
    guestPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    quote:
      'One of the most beautiful apartments we have ever stayed in in about a 5 beautiful old castle in very cozy. Located Lovely morning sun view with beautiful nature. A great place to relax and unwind. We loved stayed at the charming and the most most enjoyed a romantic weekend.',
    rating: 5,
    location: 'Italy'
  }
];
