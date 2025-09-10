import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github } from "../assets";
import { linkedin } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`padding-x absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 !mt-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#8B3A3A]" />
          <div className="w-1 sm:h-80 h-40 burgundy-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} !text-black-100 `}>
            Hei, <span className="text-[#8B3A3A]">Nikolai</span> her
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-black-100 w-3/4`}>
            Fullstack-utvikler med fokus på god brukeropplevelse og pålitelig
            kode
          </p>

          <div className="hidden sm:flex flex-row justify-center gap-5 w-1/3 !mt-12 !ml-25 ">
            <a href="https://github.com/NikolaiVFredriksen">
              <div className="bg-black-100 !p-4 rounded-full w-16 h-16 hover:scale-110  transform transition">
                <img src={github} alt="github" className=" object-contain" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nikolai-fredriksen/">
              <div className="bg-black-100 !p-4 rounded-full w-16 h-16 hover:scale-110  transform transition">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className=" object-contain"
                />
              </div>
            </a>
          </div>
          <div className="w-1/2 !ml-4 flex flex-col justify-center items-center !mt-60 ">
            <a
              href="#about"
              className=" left-2/12 !p-5 bg-[#8B3A3A] text-white rounded-lg shadow-md hover:scale-105  transform transition flex flex-col justify-center items-center cursor-pointer "
            >
              Mer om meg
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ display: "block", margin: "8px auto 0 auto" }}
              >
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
                  <path
                    d="M12 4v16m0 0l-6-6m6 6l6-6"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
      <img
        src="/headshot.png"
        alt="headshot"
        className="absolute bottom-0 right-0 2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[700px] xs:w-[700px] w-[150px] max-w-[1300px] h-auto rounded-4xl object-cover transition-all duration-300 ease-in-out"
        style={{ zIndex: 1 }}
      />
    </section>
  );
};

export default Hero;
