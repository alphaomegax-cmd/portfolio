import React from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#0c2b44]'></div>
          <div className='w-1 sm:h-80 h-40 bg-[#0c2b44]'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} `}>
            <span className='text-black'>{hero.greeting}</span> <span className='text-[#0c2b44]'>Abduljabbar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            {hero.subtitleLine1} <br className='sm:block hidden' />
            {hero.subtitleLine2}
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero
