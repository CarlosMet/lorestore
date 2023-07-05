"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsArrowUpRight} from 'react-icons/bs'

export default function page() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wzm20al', 'template_caeydwt', form.current, 'gQLIhF5TesmoEYT-S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return ( 


    <div className='w-8/12 mx-auto'>
      <form action="" ref={form} onSubmit={sendEmail}>
        <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold mt-4 lg:mt-8 xl:mt-12'>Si tienes alguna duda, <br /> escibenos ✍️</h2>

        <div className='flex flex-col lg:flex-row gap-0 lg:gap-5 justify-between items-center mt-4 lg:mt-8 xl:mt-10 mb-2 lg:mb-4'>
            <div className='w-full lg:w-1/2'>  
                <label htmlFor="">Nombre</label><br />
                <input className='border-none w-full bg-[#eeeaea] p-1 rounded-none' type="text" name='user_name' />
            </div>
            <div className='w-full lg:w-1/2'>  
                <label htmlFor="">Correo</label><br />
                <input className='border-none w-full bg-[#eeeaea] p-1 rounded-none' type="text" name='user_email' />
            </div>
        </div>

        <label htmlFor="">A qué se debe tu duda</label>
        <div>
            <select className='bg-[#eeeaea] py-1 px-2 my-2 lg:my-4'>
                <option value="">Productos</option>
                <option value="">Problemas con la página</option>
                <option value="">Pagos</option>
            </select>
        </div>
        <div>
            <label htmlFor="">Déjanos tu mensaje</label><br />
            <textarea name="message" className='w-full border-black border mt-2 h-24 lg:h-28 bg-[#eeeaea]'></textarea>
        </div>
        <div className='mt-2 lg:mt-4'>
            <button type="submit" className='flex items-center gap-1 py-1 px-10 lg:px-14 xl:py-2 xl:px-20 bg-gradient-to-bl from-[#F57667] to-[#cd5c50] hover:brightness-110 rounded-md text-white font-bold tracking-tight shadow-sm shadow-black hover:shadow-lg'>Enviar <BsArrowUpRight></BsArrowUpRight> </button>
        </div>
      </form>
    </div>
  )
}
