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
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    source_code_link: "https://github.com/NikolaiVFredriksen/MovieApp",
  },
  {
    name: "NKI Nettstudier",
    description:
      "En liten, humoristisk ‘faux-reklame’ for NKI Nettstudier. Videoen viser humor, tempo og enkel historiefortelling i et kort og konsist format.",
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
    source_code_link: "https://github.com/NikolaiVFredriksen/MovieApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
