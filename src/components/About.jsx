import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    </>
  );
};

export default About;
