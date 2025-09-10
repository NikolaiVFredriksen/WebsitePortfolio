import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a href="https://movie-app-five-xi-34.vercel.app">
        <div className="!bg-tertiary !p-5 !rounded-2xl sm:!w-[360px] !w-full transform transition hover:scale-105">
          <div className="!relative !w-full !h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="!w-full !h-full !object-cover !rounded-2xl"
            />

            <div className="!absolute !inset-0 !flex !justify-end !m-3 card-img_hover ">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient !w-10 !h-10 !rounded-full !flex !justify-center !items-center !cursor-pointer transform transition hover:scale-115"
              >
                <img
                  src={github}
                  alt="source code"
                  className="!w-1/2 !h-1/2 !object-contain "
                />
              </div>
            </div>
          </div>

          <div className="!mt-5">
            <h3 className="!text-white !font-bold !text-[24px]">{name}</h3>
            <p className="!mt-2 text-secondary !text-[14px]">{description}</p>
          </div>

          <div className="!mt-4 !flex !flex-wrap !gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`!text-[14px] !whitespace-nowrap ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="!text-black-100 !text-[14px] !uppercase !tracking-wider">
          Mitt arbeid
        </p>
        <h2 className="!text-black-100 !font-black !text-[60px] !leading-tight">
          Prosjekter.
        </h2>
      </motion.div>

      <div className="!w-full !flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="!mt-3 !text-black-100 !text-[17px] !max-w-5xl !leading-[30px]"
        >
          Prosjektene nedenfor viser hva jeg kan. Hvert prosjekt er kort
          beskrevet, med lenker til kode og demoer. De viser hvordan jeg jobber
          med ulike teknologier, løser problemer og bygger ting fra idé til
          ferdig løsning.
        </motion.p>
      </div>

      <div className="flex flex-row flex-wrap gap-10 !mt-20 items-stretch">
        <div className="flex flex-wrap gap-7 flex-1 min-w-[300px]">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <div className="flex flex-col justify-end items-start min-w-[260px] max-w-xs w-full p-6 ml-8  rounded-2xl ">
          <span className="text-[#8B3A3A] font-semibold text-lg mb-1">
            Mer prosjekter kommer...
          </span>
          <span className="text-xs text-black-100 opacity-60">
            Følg med for oppdateringer!
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
