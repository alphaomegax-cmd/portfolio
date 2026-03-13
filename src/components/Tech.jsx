import React from "react";
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useLanguage } from "../context/LanguageContext";
const Tech = () => {
  const { content } = useLanguage();
  const { tech } = content;

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{tech.subtitle}</p>
          <h2 className={styles.sectionHeadText}>{tech.title}</h2>
        </motion.div>
    {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
        {/* <BallCanvas icon={technology.icon} /> */}
        <img  src={technology.icon} alt="" />
      </div>
    ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')
