import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { content } = useLanguage();
  const { contact } = content;

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.send('service_az66vnq','template_7boa3ow', {
          from_name: form.name,
          to_name: "Aox Team",
          from_email: form.email,
          to_email: "mouchfi2020@gmail.com",
          message: form.message,
        },
        'nMxKGwl_IpX45yjNN').then(
        () => {
          setLoading(false);
          alert(contact.successAlert);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(contact.errorAlert);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#0a263c] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{contact.subtitle}</p>
        <h3 className={styles.sectionHeadText}>{contact.title}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{contact.nameLabel}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={contact.namePlaceholder}
              className='bg-[#081d2d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{contact.emailLabel}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={contact.emailPlaceholder}
              className='bg-[#081d2d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{contact.messageLabel}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={contact.messagePlaceholder}
              className='bg-[#081d2d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#081d2d] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? contact.sending : contact.send}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[250px] h-[250px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
