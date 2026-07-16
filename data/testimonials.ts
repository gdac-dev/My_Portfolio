export interface Testimonial {
  name: string;
  role: string;
  quote: {
    en: string;
    fr: string;
  };
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Simon Nitba',
    role: 'CEO - Lem-market',
    quote: {
      en: 'Working with Arsene was an excellent experience. He delivered a high-quality e-commerce platform on time and at a fair price. His attention to detail and communication were outstanding. Highly recommended!',
      fr: "Travailler avec Arsene a été une excellente expérience. Il a livré une plateforme e-commerce de haute qualité dans les délais et à un prix juste. Son attention aux détails et sa communication étaient remarquables. Je le recommande vivement !",
    },
    avatar: '/images/c1.jpg',
    rating: 5,
  },
  {
    name: 'Christian Ngo',
    role: 'CEO - SFA',
    quote: {
      en: 'Arsene built our organization website and helped us establish a strong digital presence. He is reliable, creative, and always goes above and beyond. A true professional who cares about delivering real impact.',
      fr: "Arsene a construit le site web de notre organisation et nous a aidés à établir une forte présence numérique. Il est fiable, créatif et va toujours au-delà des attentes. Un vrai professionnel soucieux de créer un réel impact.",
    },
    avatar: '/images/c2.jpg',
    rating: 5,
  },
  {
    name: 'Zingui John',
    role: 'Mechanical Engineer',
    quote: {
      en: 'I needed a modern portfolio site and Arsene delivered beyond my expectations. Clean design, fast loading, and responsive on all devices. Great service and very professional approach.',
      fr: "J'avais besoin d'un site portfolio moderne et Arsene a livré au-delà de mes attentes. Design épuré, chargement rapide et responsive sur tous les appareils. Excellent service et approche très professionnelle.",
    },
    avatar: '/images/c1.jpg',
    rating: 5,
  },
  {
    name: 'Ndoumbe Jaures',
    role: 'Mobile Developer',
    quote: {
      en: 'Arsene is a talented developer and a great collaborator. His expertise in both frontend and backend technologies makes him a versatile partner for any project. I highly recommend his services.',
      fr: "Arsene est un développeur talentueux et un excellent collaborateur. Son expertise en technologies frontend et backend fait de lui un partenaire polyvalent pour tout projet. Je recommande vivement ses services.",
    },
    avatar: '/images/c2.jpg',
    rating: 5,
  },
];
