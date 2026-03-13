import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import AvatarCanvas from './canvas/Avatar';
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const Avi = () => {
    const { content } = useLanguage();

    return (
      <section className='relative w-full h-screen mx-auto z-10'>
         <motion.div variants={textVariant()} className='p-10'>
          <h2 className={styles.sectionHeadText}>{content.avi.title}</h2>
        </motion.div>
        <AvatarCanvas />
      </section>
    )
  }
  
  export default Avi
