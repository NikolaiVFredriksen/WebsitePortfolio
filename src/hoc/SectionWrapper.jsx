import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="!px-6 !py-10 sm:!px-16 sm:!py-16 max-w-7xl mx-auto relative z-0"
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
