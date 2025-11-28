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
  git,
  figma,
  docker,
  movievault,
  jobit,
  tripguide,
  threejs,
  videoediting,
  brainstorming,
  ux,
  youtube,
  saramonic,
  nki,
  premierepro,
  davinci,
  capcut,
  logicpro,
  sonyalpha,
  photoshop,
  lightroom,
  canva,
  tiktok,
  instagram,
  facebook,
  notion,
  morningclarity,
} from "../assets";

import upwork from "../assets/company/upwork.png";
import digg from "../assets/company/digg.png";
import inxight from "../assets/company/inxight.png";
import experis from "../assets/company/experis.png";
import kristiania from "../assets/company/kristiania.png";

export const navLinks = [
  {
    id: "about",
    title: "Om meg",
  },
  {
    id: "work",
    title: "Erfaring",
  },
  {
    id: "works",
    title: "Prosjekter",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Innholdsproduksjon",
    icon: creator,
  },
  {
    title: "Videoredigering",
    icon: videoediting,
  },
  {
    title: "Konsept & idéutvikling",
    icon: brainstorming,
  },
  {
    title: "Webutvikling",
    icon: ux,
  },
];

const technologies = [
  // Video & redigering
  {
    name: "Premiere Pro",
    icon: premierepro,
  },
  {
    name: "DaVinci Resolve",
    icon: davinci,
  },
  {
    name: "CapCut",
    icon: capcut,
  },

  // Kamera / gear
  {
    name: "Sony Alpha Series",
    icon: sonyalpha,
  },

  // Audio
  {
    name: "Logic Pro X",
    icon: logicpro,
  },

  // Design & bildebehandling
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Lightroom",
    icon: lightroom,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Figma",
    icon: figma,
  },

  // Sosiale medier
  {
    name: "YouTube",
    icon: youtube,
  },
  {
    name: "TikTok",
    icon: tiktok,
  },
  {
    name: "Instagram",
    icon: instagram,
  },
  {
    name: "Facebook",
    icon: facebook,
  },
];

const experiences = [
  {
    title: "Kreatør",
    company_name: "YouTube",
    icon: youtube,
    iconBg: "#f6f0e9",
    date: "Januar 2025 - Nå",
    points: [
      "Produserer visuelt gjennomtenkte videoer med fokus på musikk, rytme og historiefortelling",
      "Planlegger, filmer og redigerer alt innhold selv – fra idé til ferdig publisering",
      "Eksperimenterer med kreative formater og utvikler en personlig visuell stil inspirert av dokumentar og hverdagsfilm",
      "Bygger et publikum gjennom autentisk uttrykk og konsistent innholdsstrategi",
    ],
  },
  {
    title: "Medarbeider",
    company_name: "Digg Pizza AS",
    icon: digg,
    iconBg: "#f6f0e9",
    date: "August 2022 - Nå",
    points: [
      "Trives i et hektisk service­miljø med mye kundekontakt",
      "Bygger ekte relasjoner og bidrar til godt arbeidsmiljø",
      "Fortsetter å lære å håndtere press og holde hodet kaldt når det koker",
    ],
  },
  {
    title: "Freelance",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#f6f0e9",
    date: "Juli 2022 - Nå",
    points: [
      "Leverer tjenester innen bilde- og videoredigering, oversettelse og musikkproduksjon",
      "Var med på norsk launch av Proxify.io",
      "Skapte langvarige kundeforhold gjennom pålitelighet, profesjonalitet og god kommunikasjon",
    ],
  },
  {
    title: "Fullstack-utvikler",
    company_name: "Experis Academy",
    icon: experis,
    iconBg: "#f6f0e9",
    date: "August 2023 - November 2023",
    points: [
      "12-ukers intensiv opplæring i fullstack (.NET/C#, ASP.NET Core, databaser, skyløsninger, JavaScript, React, Angular)",
      "Utviklet komplette løsninger i caseoppgaver fra database til deployment",
      "Fikk innsikt i konsulentrollen og arbeid med kundecaser",
    ],
  },
  {
    title: "Fullstack-utvikler",
    company_name: "InXight AS",
    icon: inxight,
    iconBg: "#f6f0e9",
    date: "Jan 2023 - Mai 2023",
    points: [
      "Utviklet visuell modell/digitalt årshjul for bedriftsstyring i bachelorprosjekt",
      "Arbeidet med backend og frontend i team av tre studenter",
      "Erfaring med å jobbe i et profesjonelt miljø og bidra i et større utviklingsteam",
    ],
  },
  {
    title: "Bachelor, Frontend- og mobilutvikling",
    company_name: "Høyskolen Kristiania",
    icon: kristiania,
    iconBg: "#f6f0e9",
    date: "August 2020 - Juni 2023",
    points: [
      "Solid erfaring med moderne web- og mobilutvikling (React, Swift, Kotlin/Java)",
      "God forståelse av fullstack-utvikling, databaser og skyløsninger",
      "Sterk kompetanse i interaksjonsdesign og brukervennlige, responsive løsninger",
      "Vant til smidige prosesser, teamarbeid og profesjonelle utviklingsverktøy",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Saramonic Air",
    description:
      "En musikkdrevet, visuelt rolig og ærlig test i samarbeid med Saramonic. Videoen kombinerer gitar, vokal og minimalistiske scener for å skape en ekte og nær opplevelse av hvordan mikrofonene presterer i praksis.",
    tags: [
      {
        name: "produkt",
        color: "blue-text-gradient",
      },
      {
        name: "merkevare",
        color: "green-text-gradient",
      },
      {
        name: "kort-form",
        color: "pink-text-gradient",
      },
      {
        name: "musikk",
        color: "green-text-gradient",
      },
    ],
    image: saramonic,
    source_code_link: "https://youtube.com/shorts/dPkWXbj4nLg?feature=share",
  },
  {
    name: "NKI Nettstudier",
    description:
      "En humoristisk ‘faux-reklame’ for NKI Nettstudier. Videoen viser humor, tempo og enkel historiefortelling i et kort og konsist format.",
    tags: [
      {
        name: "reklame",
        color: "blue-text-gradient",
      },
      {
        name: "humor",
        color: "green-text-gradient",
      },
      {
        name: "tempo",
        color: "pink-text-gradient",
      },
      {
        name: "lang-form",
        color: "green-text-gradient",
      },
    ],
    image: nki,
    source_code_link: "https://vimeo.com/1057032229/6109936082?fl=pl&fe=ti",
  },
  {
    name: "Morgenklarhet",
    description:
      "En kortfilm som utforsker stillheten og de små øyeblikkene i en morgenrutine. Videoen kombinerer rolige bilder, subtil lyd og ærlige refleksjoner for å skape en følelse av nærvær og klarhet.",
    tags: [
      {
        name: "atmosfære",
        color: "blue-text-gradient",
      },
      {
        name: "naturlig lys",
        color: "green-text-gradient",
      },
      {
        name: "kort-film",
        color: "pink-text-gradient",
      },
    ],
    image: morningclarity,
    source_code_link: "https://www.youtube.com/watch?v=lDX6B8E62JA",
  },
];

export { services, technologies, experiences, testimonials, projects };
