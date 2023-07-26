"use client"
import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='bg-black text-gray-300 flex flex-col lg:flex-row pad pb-10 mt-4 lg:mt-24 xl:mt-32 2xl:mt-48'>
      
        <div className='w-1/2'>
            <h2 className='title text-white'>UNIFORM <span className='text-[#F57667]'>STORE.</span></h2>
            <p className='lg:w-8/12 mt-4 text-justify'>Tienda de uniformes.</p>
            <div className='flex items-center mt-4 mb-2 gap-3 xl:gap-5'>
                <BsFillTelephoneFill color='#F57667'></BsFillTelephoneFill>
                <p>301 6457898</p>
            </div>
            <div className='flex items-center gap-3 xl:gap-5'>
                <CiMail color='#F57667'></CiMail>
                <p>lorestore@gmail.com</p>
            </div>
        </div>
        <div className='w-1/2 flex flex-col lg:flex-row justify-between'>
            <div className='w-1/3'>
                <h3 className='title text-white mb-4'>Tienda.</h3>
                <ul>                    
                    <Link href={'/contact'}><li>Contacto</li></Link>
                    <Link href={'/products'}><li>Productos</li></Link>                    
                </ul>
            </div>
            <div className='w-1/3'>
                <h3 className='title mb-4 text-white'>Información.</h3>
                <ul>
                    <li><Link href={'/quienessomos'}>Quienes somos</Link></li>                    
                </ul>
            </div>
            <div className='w-1/3'>
                <h3 className='title mb-4 text-white'>Siguenos.</h3>
                <div className='flex items-center justify-between'>
                    <AiOutlineInstagram color='#F57667' size={24}></AiOutlineInstagram>
                    <AiOutlineFacebook color='#F57667' size={24}></AiOutlineFacebook>
                    <AiOutlineTwitter color='#F57667' size={24}></AiOutlineTwitter>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Footer
