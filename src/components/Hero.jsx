import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex items-end justify-end w-full h-auto ">
        <img
          src="/headshot.png"
          alt="headshot"
          className="2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[700px] xs:w-[700px] w-[150px] max-w-[1300px] h-auto rounded-4xl object-cover transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
