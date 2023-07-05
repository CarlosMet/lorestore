import React from 'react'
import Slider from './Slider'

const Hero = () => {
  return (
    <div className='pad flex flex-col lg:flex-row items-center mt-4 lg:mt-7 xl:mt-14 2xl:mt-20'>

      <div className='w-full lg:w-2/3 rounded-2xl overflow-hidden h-[38vh] lg:h-[64vh]'>
        <Slider></Slider>
      </div>

      <div className='mt-5 lg:mt-0 w-full lg:w-1/3 lg:h-[64vh] overflow-hidden flex flex-row lg:flex-col justify-between pl-0 lg:pl-4 xl:pl-6'>
        <div className='w-[60%] lg:w-full'>
            <img src="https://img.freepik.com/foto-gratis/forma-piernas-ninos-alto-angulo_23-2148480233.jpg?w=1480&t=st=1687824887~exp=1687825487~hmac=d84140517358a2475862ffb223658d6effe0e27c244079d0c8a9518f69ebf28f" className='h-full lg:w-full rounded-xl md:h-[30vh]' alt="" />
        </div>
        <div className='w-[37%] lg:w-full'>
            <img src="https://img.freepik.com/vector-gratis/poster-escolar-material-papeleria-educacion-que-ninos-estudien-sobre-superficie-azul_107791-6713.jpg?w=1800&t=st=1687825004~exp=1687825604~hmac=057912cf0d4e79262fe6855076cf402b4e06205fe5d3fc01c98f8b1e36319cca" className='h-full lg:w-full rounded-xl  md:h-[30vh]' alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
