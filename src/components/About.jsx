import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full hidden sm:block">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] !py-5 !px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduksjon</p>
        <h2 className={styles.sectionHeadText}>Oversikt.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black-100 text-[17px] max-w-6xl leading-[30px]"
      >
        Jeg skaper visuelt innhold som treffer – enten det handler om musikk,
        produkter eller historier fra hverdagen. Stilen min er varm, ærlig og
        gjennomtenkt, med fokus på flyt, rytme og tilstedeværelse i hvert eneste
        klipp. Jeg jobber både med egne prosjekter og merkevarer, og liker
        prosesser der vi utvikler idéer sammen. Målet er alltid det samme: å
        lage noe som føles ekte, solid og som folk faktisk har lyst til å se –
        om og om igjen. Uansett om det er korte sosiale videoer,
        YouTube-innhold, produktfilmer eller kreative mini-dokumentarer, sørger
        jeg for en produksjon som er effektiv, tydelig og gjennomført fra idé
        til ferdig video.
      </motion.p>

      <div className="sm:!mt-20 flex flex-wrap gap-10 sm:columns-2 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="sm:hidden flex flex-row items-end">
        Fullstack, react, web, inhholdsprodusent
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
