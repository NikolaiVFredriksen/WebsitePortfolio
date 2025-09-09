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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Webutvikler",
    icon: web,
  },
  {
    title: "React Native Utvikler",
    icon: mobile,
  },
  {
    title: "Backend Utvikler",
    icon: backend,
  },
  {
    title: "Innholdsprodusent",
    icon: creator,
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
  {
    title: "Freelance",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#f6f0e9",
    date: "Juli 2022 - November 2023",
    points: [
      "Leverte tjenester innen bilde- og videoredigering, oversettelse og musikkproduksjon",
      "Utførte oversettelser av nettsider, apper, e-bøker og spill",
      "Skapte langvarige kundeforhold gjennom pålitelighet, profesjonalitet og god kommunikasjon",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
