import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {styles} from '../styles';
import {logo,menu,close} from '../assets';
import { useLanguage } from "../context/LanguageContext";



const Navbar = () => {

  const [active,setActive] = useState("");
  const [toggle,setToggle] = useState(false);
  const { language, setLanguage, languageOptions, content } = useLanguage();
  const { navLinks, navbar } = content;
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-tr from-slate-900 to-sky-900`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={()=>{setActive("");window.scrollTo(0,0);}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            {navbar.brandPrefix} &nbsp;<span className='sm:block hidden'>| {navbar.brandName}</span>
          </p>
        </Link>
        <div className='hidden sm:flex items-center gap-8'>
          <ul className='list-none flex flex-row gap-10'>
          {navLinks.map((linkItem)=> (
            <li key={linkItem.id} className={`${active === linkItem.title ? "text-white" : "text-secondary"} 
            hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=> setActive(linkItem.title)}>
              <a href={`#${linkItem.id}`}>{linkItem.title}</a>
            </li>
          ))}
          </ul>
          <div className='flex items-center rounded-xl border border-[#1d4465] bg-[#0a263c] p-1'>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type='button'
                onClick={() => setLanguage(option.code)}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition ${
                  language === option.code
                    ? "bg-[#1f6ea7] text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} 
          p-6 bg-[#0c2b44] to-zinc-900 absolute top-20 right-0 mx-4 my-2
          min-w-[140px] z-10 rounded-xl `}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((linkItem)=> (
            <li key={linkItem.id} className={`${active === linkItem.title ? "text-white" : "text-secondary"} 
            font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={()=> {setToggle(!toggle);setActive(linkItem.title);}}>
              <a href={`#${linkItem.id}`}>{linkItem.title}</a>
            </li>
          ))}
          <li className='pt-2'>
            <div className='flex items-center rounded-xl border border-[#1d4465] bg-[#0a263c] p-1'>
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type='button'
                  onClick={() => setLanguage(option.code)}
                  className={`px-2 py-1 text-xs font-bold rounded-lg transition ${
                    language === option.code
                      ? "bg-[#1f6ea7] text-white"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </li>
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
