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
    name: 'Foyer Foka',
    role: 'Restaurant & Bar, Douala',
    quote: {
      en: "The website has transformed our customer experience: more reservations, a menu that's always available, and a more professional image, exactly what we needed to help Foyer Foka gain recognition beyond Bonanjo.",
      fr: "Le site a changé notre relation client : plus de réservations, un menu toujours accessible, et une image plus professionnelle, exactement ce qu'il fallait pour faire rayonnement le Foyer Foka au-delà de Bonanjo."
    },
    avatar: '/images/foyer_foka.jpg',
    rating: 5
  },
  {
    name: 'Equipe Saga-Africa',
    role: 'Restaurant, Douala',
    quote: {
      en: "Professional support from start to finish, with a real eye for detail and a willingness to listen. The website perfectly reflects our brand image and has strengthened our credibility with our customers. It’s a tool I recommend to every restaurant owner.",
      fr: "Un accompagnement professionnel du début à la fin, avec un vrai sens du détail et de l'écoute. Le site reflète parfaitement notre image et a renforcé notre crédibilité auprès de nos clients. Un outil que je recommande à tout restaurateur."
    },
    avatar: '/images/saga_africa.png',
    rating: 5
  },
  {
    name: 'Elvis Kamgang',
    role: 'CEO - Kelvis Boulangerie',
    quote: {
      en: 'Working with Arsene on our Odoo integration and customization was an excellent experience. He carefully understood our business needs and delivered a reliable, user-friendly solution tailored to our operations. His professionalism, attention to detail, and responsiveness made the entire process smooth and efficient. I highly recommend his Odoo services!',
      fr: "Travailler avec Arsene pour l’intégration et la personnalisation de notre solution Odoo a été une excellente expérience. Il a parfaitement compris les besoins de notre entreprise et a livré une solution fiable, intuitive et adaptée à nos opérations. Son professionnalisme, son souci du détail et sa réactivité ont rendu tout le processus fluide et efficace. Je recommande vivement ses services Odoo !",
    },
    avatar: '/images/kelvis.png',
    rating: 5,
  },
  {
    name: 'Simon Nitba',
    role: 'CEO - Lem-Market',
    quote: {
      en: 'Arsene developed and customized our e-commerce platform using Odoo 17, integrating secure payment methods and adapting the website modules to meet our business needs. He also streamlined our sales and inventory management processes, making our operations more efficient and easier to manage. He is reliable, skilled, and committed to delivering high-quality solutions. We are very satisfied with his services.',
      fr: "Arsene a développé et personnalisé notre plateforme e-commerce avec Odoo 17, en intégrant des moyens de paiement sécurisés et en adaptant les modules du site web aux besoins de notre entreprise. Il a également optimisé la gestion de nos ventes et de nos stocks, rendant nos opérations plus efficaces et plus simples à gérer. Il est fiable, compétent et engagé à fournir des solutions de qualité. Nous sommes très satisfaits de ses services.",
    },
    avatar: '/images/Lem Logo.png',
    rating: 5,
  },
  {
    name: 'Joseph Ngoum',
    role: 'Freelancer',
    quote: {
      en: 'Arsene developed a reliable automated billing application that works seamlessly on both web and desktop. It has simplified my invoicing process, reduced manual errors, and saved me valuable time. The application is fast, user-friendly, and perfectly tailored to my needs. Excellent work and highly professional service.',
      fr: "Arsene a développé une application de facturation automatique fiable, accessible sur le Web et sur ordinateur. Elle a simplifié mon processus de facturation, réduit les erreurs manuelles et m'a permis de gagner un temps précieux. L'application est rapide, facile à utiliser et parfaitement adaptée à mes besoins. Un excellent travail et un service très professionnel.",
    },
    avatar: '/images/Director.png',
    rating: 5,
  },
  {
    name: 'Simone Tsakeng',
    role: 'CEO - Manjo Children Home (NGO)',
    quote: {
      en: 'Arsene did an excellent job developing our organization’s responsive website. He also improved our SEO, optimized the website’s performance, and successfully integrated Google Analytics to help us better understand our audience. He is professional, reliable, and attentive to details. I am very satisfied with the results and highly recommend his services.',
      fr: "Arsene a réalisé un excellent travail dans le développement du site web responsive de notre organisation. Il a également amélioré notre référencement naturel, optimisé les performances du site et intégré Google Analytics afin de nous aider à mieux comprendre notre audience. Il est professionnel, fiable et attentif aux détails. Je suis très satisfaite des résultats et je recommande vivement ses services.",
    },
    avatar: '/images/CEO.png',
    rating: 5,
  },
];
