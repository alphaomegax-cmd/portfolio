import React from 'react'

import { motion } from "framer-motion";
import { Tilt } from 'react-tilt' ;
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../context/LanguageContext";


const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt
      className="xs:w-[200px] w-full"
      options={{
        max:45,scale:1,speed:450
      }}
    >
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full bg-gradient-to-r from-red-600 to-green-700 p-[1px] rounded-[20px] shadow card'
        >
        <div
        className='bg-[#0a263c] rounded-[20px] py-5 
        px-12 min-h-[250px] flex justify-evenly items-center flex-col bg-[#0c2b44]'
        >
          <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const { content } = useLanguage();
  const { about, services } = content;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{about.intro}</p>
        <h2 className={styles.sectionHeadText}>{about.title}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       {about.description}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");
