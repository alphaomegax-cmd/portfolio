import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  php,
  csharp,
  unity,
  photoshop,
  illustrator,
  laravel,
  woocommerce,
  firebase,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const DEFAULT_LANGUAGE = "de";
export const LANGUAGE_OPTIONS = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "PHP", icon: php },
  { name: "Laravel", icon: laravel },
  { name: "C#", icon: csharp },
  { name: "Unity", icon: unity },
  { name: "WooCommerce", icon: woocommerce },
  { name: "Firebase", icon: firebase },
  { name: "Photoshop", icon: photoshop },
  { name: "Illustrator", icon: illustrator },
];

const contentByLanguage = {
  de: {
    navbar: {
      brandPrefix: "Portfolio von",
      brandName: "M. Abdeljabar",
    },
    navLinks: [
      { id: "about", title: "Uber mich" },
      { id: "work", title: "Erfahrung" },
      { id: "contact", title: "Kontakt" },
    ],
    hero: {
      greeting: "Hallo, ich heisse",
      subtitleLine1: "IT-Entwicklungstechniker und Freelancer im E-Commerce.",
      subtitleLine2:
        "Ich entwickle Web-Oberflachen, Web-Anwendungen und vieles mehr.",
    },
    about: {
      intro: "Einfuhrung",
      title: "Uberblick.",
      description:
        "Ich bin ein qualifizierter Entwickler mit Commerce und Programmierung Erfahrung in JavaScript und Expertise in Frameworks wie React, Node.js und Three.js. Ich lerne schnell und arbeite eng mit Kunden zusammen, um effiziente, skalierbare und benutzerfreundliche Losungen fur reale Probleme zu erstellen. Lassen Sie uns gemeinsam Ihre Ideen umsetzen.",
    },
    services: [
      { id: "web-dev", title: "Webentwickler", icon: web },
      { id: "react-native-dev", title: "React-Native-Entwickler", icon: mobile },
      { id: "backend-dev", title: "Backend-Entwickler", icon: backend },
      { id: "content-creator", title: "Content Creator", icon: creator },
      { id: "e-commerce", title: "E-Commerce Specialist", icon: creator },
    ],
    experience: {
      subtitle: "Was ich bisher gemacht habe",
      title: "Berufserfahrung.",
    },
    experiences: [
      {
        title: "Freelancer Developer",
        company_name: "General Freelancing",
        icon: web,
        iconBg: "#383E56",
        date: "Apr 2020 - jetzt",
        points: [
          "WordPress- und Shopify-Shops entwickelt und angepasst",
          "WooCommerce- und Shopify-Shops eingerichtet und optimiert",
          "Technische Audits durchgeführt (Performance, UX, SEO-Grundlagen, Sicherheit)",
          "Fehler behoben und Core Web Vitals verbessert",
        ],
      },
      {
        title: "Verkäufer",
        company_name: "E-Commerce Online und Offline",
        icon: web,
        iconBg: "#383E56",
        date: "Feb 2022 - Sep 2025",
        points: [
          "Onlineshop und direkten Offline-Verkauf betreut",
          "Damenbekleidung und andere Produkte verkauft",
          "Website gepflegt und das Kundenerlebnis optimiert",
        ],
      },
      {
        title: "Shopify Freelancer Developer",
        company_name: "Team on Fiverr platform",
        icon: web,
        iconBg: "#383E56",
        date: "Nov 2019 - Jun 2021",
        points: [
          "In einem Freelance-Team an Shopify-Lösungen mitgearbeitet",
          "Shopify-Shops entwickelt und optimiert",
          "Technische Probleme gelöst",
        ],
      },
      {
        title: "Technischer Support ",
        company_name: "GPS-Firma in Technopark Casablanca",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Sep 2019 - Oct 2019",
        points: [
          "GPS-Tracking-Geräte programmiert und konfiguriert",
          "Hardware-Funktion und Signalverbindung getestet",
          "Plattform-Integration überprüft und technischen Status gemeldet",
          "Weitere Dienstleistungen.",
        ],
      },
      {
        title: "Verkäufer",
        company_name: "Einzelhandel – Bekleidungsgeschäftn meiner Eltern in Khouribga",
        icon: web,
        iconBg: "#383E56",
        date: "Oct 2017 - May 2019",
        points: [
          "Kleidungsorganisierung",
          "Kunden betreuung",
          "Warenmanagement",
        ],
      },
    ],
    tech: {
      subtitle: "Meine Werkzeuge",
      title: "Technologien.",
    },
    works: {
      subtitle: "Meine Arbeit",
      title: "Projekte.",
      description:
        "Die folgenden Projekte zeigen meine Fahigkeiten und Erfahrung anhand konkreter Beispiele meiner Arbeit. Jedes Projekt wird kurz beschrieben und enthalt Links zu Code-Repositories und Live-Demos. Das spiegelt meine Fahigkeit wider, komplexe Probleme zu losen, mit verschiedenen Technologien zu arbeiten und Projekte effizient umzusetzen.",
    },
    projects: [
      {
        name: "Car Rent",
        description:
          "Webplattform, mit der Benutzer Mietwagen verschiedener Anbieter suchen, buchen und verwalten konnen und so eine praktische und effiziente Transportlosung erhalten.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "mongodb", color: "green-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
      },
      {
        name: "Job IT",
        description:
          "Webanwendung, mit der Benutzer Stellenangebote suchen, geschatzte Gehaltsspannen anzeigen und Jobs in ihrer aktuellen Umgebung finden konnen.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "restapi", color: "green-text-gradient" },
          { name: "scss", color: "pink-text-gradient" },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
      },
      {
        name: "Trip Guide",
        description:
          "Umfassende Reisebuchungsplattform, mit der Benutzer Fluge, Hotels und Mietwagen buchen sowie personalisierte Empfehlungen fur beliebte Reiseziele erhalten konnen.",
        tags: [
          { name: "nextjs", color: "blue-text-gradient" },
          { name: "supabase", color: "green-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
      },
    ],
    feedback: {
      subtitle: "Was andere sagen",
      title: "Testimonials.",
    },
    testimonials: [
      {
        testimonial:
          "Nachdem Herr Abduljabbar unsere Website optimiert hatte, ist unser Traffic um 50 % gestiegen. Wir konnen ihm nicht genug danken.",
        name: "Sara N.",
        designation: "Partnerin",
        company: "Freelancing",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial:
          "Ich habe noch nie einen Webentwickler getroffen, dem der Erfolg seiner Kunden so wichtig ist wie Herrn Abdul.",
        name: "Christophe C.",
        designation: "Kunde",
        company: "",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "Ich dachte, es ware unmoglich, eine Website zu erstellen, die so gut ist wie unser Produkt, aber Abdo hat mir das Gegenteil bewiesen.",
        name: "Ren D.",
        designation: "Kundin",
        company: "",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
    contact: {
      subtitle: "Lass uns in Kontakt bleiben",
      title: "Kontakt.",
      nameLabel: "Ihr Name",
      namePlaceholder: "Wie heissen Sie?",
      emailLabel: "Ihre E-Mail",
      emailPlaceholder: "Wie lautet Ihre E-Mail?",
      messageLabel: "Ihre Nachricht",
      messagePlaceholder: "Was mochten Sie sagen?",
      sending: "Wird gesendet...",
      send: "Senden",
      successAlert: "Danke. Ich melde mich so schnell wie moglich bei Ihnen.",
      errorAlert: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
    avi: {
      title: "Ein zufalliger Mensch schwebt im Weltraum",
    },
  },
  en: {
    navbar: {
      brandPrefix: "Portfolio of",
      brandName: "M. Abdeljabar",
    },
    navLinks: [
      { id: "about", title: "About" },
      { id: "work", title: "Experience" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      greeting: "Hi, my name is",
      subtitleLine1: "IT development technician and eCommerce freelancer.",
      subtitleLine2:
        "I build web interfaces, web applications, and much more.",
    },
    about: {
      intro: "Introduction",
      title: "Overview.",
      description:
        "I am a qualified developer with commerce and programming experience in JavaScript, and expertise in frameworks such as React, Node.js, and Three.js. I learn quickly and work closely with clients to build efficient, scalable, and user-friendly solutions for real-world problems. Let us bring your ideas to life together.",
    },
    services: [
      { id: "web-dev", title: "Web Developer", icon: web },
      { id: "react-native-dev", title: "React Native Developer", icon: mobile },
      { id: "backend-dev", title: "Backend Developer", icon: backend },
      { id: "content-creator", title: "Content Creator", icon: creator },
      { id: "e-commerce", title: "E-Commerce Specialist", icon: creator },
    ],
    experience: {
      subtitle: "What I have done so far",
      title: "Work Experience.",
    },
    experiences: [
      {
        title: "Freelancer Developer",
        company_name: "General Freelancing",
        icon: web,
        iconBg: "#383E56",
        date: "Apr 2020 - now",
        points: [
          "Built and customized WordPress and Shopify stores",
          "Set up and optimized WooCommerce and Shopify stores",
          "Performed technical audits (performance, UX, SEO basics, security)",
          "Fixed issues and improved Core Web Vitals",
        ],
      },
      {
        title: "Salesperson",
        company_name: "E-Commerce Online and Offline",
        icon: web,
        iconBg: "#383E56",
        date: "Feb 2022 - Sep 2025",
        points: [
          "Managed online shop and direct offline sales",
          "Sold women's clothing and other products",
          "Maintained the website and optimized customer experience",
        ],
      },
      {
        title: "Shopify Freelancer Developer",
        company_name: "Team on Fiverr platform",
        icon: web,
        iconBg: "#383E56",
        date: "Nov 2019 - Jun 2021",
        points: [
          "Worked in a freelance team on Shopify solutions",
          "Built and optimized Shopify stores",
          "Solved technical issues",
        ],
      },
      {
        title: "Technical Support",
        company_name: "GPS company in Technopark Casablanca",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Sep 2019 - Oct 2019",
        points: [
          "Programmed and configured GPS tracking devices",
          "Tested hardware function and signal connection",
          "Checked platform integration and reported technical status",
          "Other services.",
        ],
      },
      {
        title: "Salesperson",
        company_name: "Retail - my parents' clothing store in Khouribga",
        icon: web,
        iconBg: "#383E56",
        date: "Oct 2017 - May 2019",
        points: [
          "Organized clothing inventory",
          "Handled customer support",
          "Managed merchandise",
        ],
      },
    ],
    tech: {
      subtitle: "My stack",
      title: "Technologies.",
    },
    works: {
      subtitle: "My Work",
      title: "Projects.",
      description:
        "The following projects showcase my skills and experience through practical examples of my work. Each project is briefly described and includes links to code repositories and live demos. This reflects my ability to solve complex problems, work across technologies, and deliver projects effectively.",
    },
    projects: [
      {
        name: "Car Rent",
        description:
          "Web platform that allows users to search, book, and manage car rentals from multiple providers, offering a practical and efficient transportation solution.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "mongodb", color: "green-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
      },
      {
        name: "Job IT",
        description:
          "Web application that lets users search job offers, view estimated salary ranges, and find available roles based on their current location.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "restapi", color: "green-text-gradient" },
          { name: "scss", color: "pink-text-gradient" },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
      },
      {
        name: "Trip Guide",
        description:
          "Comprehensive travel booking platform that helps users reserve flights, hotels, and rental cars, with personalized recommendations for popular destinations.",
        tags: [
          { name: "nextjs", color: "blue-text-gradient" },
          { name: "supabase", color: "green-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
      },
    ],
    feedback: {
      subtitle: "What people say",
      title: "Testimonials.",
    },
    testimonials: [
      {
        testimonial:
          "After Mr. Abduljabbar optimized our website, our traffic increased by 50%. We cannot thank him enough.",
        name: "Sara N.",
        designation: "Partner",
        company: "Freelancing",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial:
          "I have never met a web developer who truly cares about client success as much as Mr. Abdul.",
        name: "Christophe C.",
        designation: "Client",
        company: "",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "I thought it was impossible to build a website as strong as our product, but Abdo proved me wrong.",
        name: "Ren D.",
        designation: "Client",
        company: "",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
    contact: {
      subtitle: "Stay in touch",
      title: "Contact.",
      nameLabel: "Your Name",
      namePlaceholder: "What is your name?",
      emailLabel: "Your Email",
      emailPlaceholder: "What is your email?",
      messageLabel: "Your Message",
      messagePlaceholder: "What would you like to say?",
      sending: "Sending...",
      send: "Send",
      successAlert: "Thank you. I will get back to you as soon as possible.",
      errorAlert: "Something went wrong. Please try again.",
    },
    avi: {
      title: "A random human appeared floating in space",
    },
  },
  fr: {
    navbar: {
      brandPrefix: "Portfolio de",
      brandName: "M. Abdeljabar",
    },
    navLinks: [
      { id: "about", title: "A Propos" },
      { id: "work", title: "Experience" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      greeting: "Bonjour, je m'appelle",
      subtitleLine1:
        "Technicien en developpement informatique et freelancer en ecommerce.",
      subtitleLine2:
        "Je developpe des interfaces web, des applications web et bien plus encore.",
    },
    about: {
      intro: "Introduction",
      title: "Apercu.",
      description:
        "Je suis un developpeur qualifie avec une experience en commerce et en programmation JavaScript, ainsi qu'une expertise dans des frameworks tels que React, Node.js et Three.js. J'apprends vite et je collabore etroitement avec les clients pour creer des solutions efficaces, evolutives et conviviales qui resolvent des problemes concrets. Donnons vie a vos idees ensemble.",
    },
    services: [
      { id: "web-dev", title: "Developpeur Web", icon: web },
      { id: "react-native-dev", title: "Developpeur React Native", icon: mobile },
      { id: "backend-dev", title: "Developpeur Backend", icon: backend },
      { id: "content-creator", title: "Createur de Contenu", icon: creator },
      { id: "e-commerce", title: "Specialiste E-Commerce", icon: creator },
    ],
    experience: {
      subtitle: "Ce que j'ai fait jusqu'a present",
      title: "Experience Professionnelle.",
    },
    experiences: [
      {
        title: "Developpeur Freelance",
        company_name: "Freelancing General",
        icon: web,
        iconBg: "#383E56",
        date: "Apr 2020 - maintenant",
        points: [
          "Creation et personnalisation de boutiques WordPress et Shopify",
          "Mise en place et optimisation de boutiques WooCommerce et Shopify",
          "Realisation d'audits techniques (performance, UX, bases SEO, securite)",
          "Correction des erreurs et amelioration des Core Web Vitals",
        ],
      },
      {
        title: "Vendeur",
        company_name: "E-Commerce en ligne et hors ligne",
        icon: web,
        iconBg: "#383E56",
        date: "Feb 2022 - Sep 2025",
        points: [
          "Gestion de la boutique en ligne et de la vente directe hors ligne",
          "Vente de vetements pour femmes et d'autres produits",
          "Maintenance du site et optimisation de l'experience client",
        ],
      },
      {
        title: "Developpeur Shopify Freelancer",
        company_name: "Equipe sur la plateforme Fiverr",
        icon: web,
        iconBg: "#383E56",
        date: "Nov 2019 - Jun 2021",
        points: [
          "Participation a des solutions Shopify dans une equipe freelance",
          "Creation et optimisation de boutiques Shopify",
          "Resolution de problemes techniques",
        ],
      },
      {
        title: "Support Technique",
        company_name: "Entreprise GPS au Technopark de Casablanca",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Sep 2019 - Oct 2019",
        points: [
          "Programmation et configuration des appareils de suivi GPS",
          "Test du fonctionnement du materiel et de la connexion du signal",
          "Verification de l'integration a la plateforme et rapport de l'etat technique",
          "Autres services.",
        ],
      },
      {
        title: "Vendeur",
        company_name: "Commerce de detail - magasin de vetements de mes parents a Khouribga",
        icon: web,
        iconBg: "#383E56",
        date: "Oct 2017 - May 2019",
        points: [
          "Organisation des vetements",
          "Prise en charge des clients",
          "Gestion des marchandises",
        ],
      },
    ],
    tech: {
      subtitle: "Mes outils",
      title: "Technologies.",
    },
    works: {
      subtitle: "Mon Travail",
      title: "Projets.",
      description:
        "Les projets suivants mettent en valeur mes competences et mon experience a travers des exemples concrets de mon travail. Chaque projet est decrit brievement avec des liens vers des depots de code et des demos en direct. Cela reflete ma capacite a resoudre des problemes complexes, a travailler avec differentes technologies et a gerer des projets efficacement.",
    },
    projects: [
      {
        name: "Car Rent",
        description:
          "Plateforme web qui permet aux utilisateurs de rechercher, reserver et gerer des locations de voitures aupres de divers fournisseurs, offrant une solution pratique et efficace pour les besoins de transport.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "mongodb", color: "green-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
      },
      {
        name: "Job IT",
        description:
          "Application web qui permet aux utilisateurs de rechercher des offres d'emploi, d'afficher les salaires estimes pour les postes et de localiser les emplois disponibles selon leur emplacement actuel.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "restapi", color: "green-text-gradient" },
          { name: "scss", color: "pink-text-gradient" },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
      },
      {
        name: "Trip Guide",
        description:
          "Plateforme complete de reservation de voyages permettant aux utilisateurs de reserver vols, hotels et voitures de location, avec des recommandations personnalisees pour des destinations populaires.",
        tags: [
          { name: "nextjs", color: "blue-text-gradient" },
          { name: "supabase", color: "green-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
      },
    ],
    feedback: {
      subtitle: "Ce que les autres disent",
      title: "Temoignages.",
    },
    testimonials: [
      {
        testimonial:
          "Apres que M. Abduljabbar ait optimise notre site web, notre trafic a augmente de 50 %. Nous ne pouvons pas le remercier assez.",
        name: "Sara N.",
        designation: "Partenaire",
        company: "Freelancing",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial:
          "Je n'ai jamais rencontre un developpeur web qui se soucie vraiment du succes de ses clients comme le fait Monsieur Abdul.",
        name: "Christophe C.",
        designation: "Client",
        company: "",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "Je pensais qu'il etait impossible de creer un site web aussi beau que notre produit, mais Abdo m'a prouve le contraire.",
        name: "Ren D.",
        designation: "Client",
        company: "",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
    contact: {
      subtitle: "Restons en contact",
      title: "Contact.",
      nameLabel: "Votre Nom",
      namePlaceholder: "Comment vous appelez-vous ?",
      emailLabel: "Votre E-mail",
      emailPlaceholder: "Quelle est votre adresse e-mail ?",
      messageLabel: "Votre Message",
      messagePlaceholder: "Que voulez-vous dire ?",
      sending: "Envoi en cours...",
      send: "Envoyer",
      successAlert: "Merci. Je vous repondrai des que possible.",
      errorAlert: "Quelque chose a mal tourne. Veuillez reessayer.",
    },
    avi: {
      title: "Un humain aleatoire est apparu flottant dans l'espace",
    },
  },
};

export const getPortfolioContent = (language) =>
  contentByLanguage[language] || contentByLanguage[DEFAULT_LANGUAGE];

export { technologies };
