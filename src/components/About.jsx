import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient !p-[1px] rounded-[20px] shadow-card"
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Jeg lager løsninger som fungerer – både for brukerne og for deg som eier
        prosjektet. Med erfaring i TypeScript, JavaScript, React, Node.js og
        Three.js bygger jeg apper og nettsteder som er raske, skalerbare og
        enkle å bruke. Jeg liker å jobbe tett med kunder for å finne ut hva som
        faktisk trengs, og levere noe som både ser bra ut og holder teknisk.
        Enten det er et lite prosjekt eller en større applikasjon, sørger jeg
        for at vi beveger oss raskt fra idé til ferdig løsning – uten unødvendig
        kompliserte prosesser.
      </motion.p>

      <div className="!mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
