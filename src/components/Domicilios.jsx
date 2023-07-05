import Link from 'next/link'
import React from 'react'

const Domicilios = () => {
  return (
    <div className='pad w-full'>
      <h2 className='title'>Domicilios.</h2>
      <div className='margen domicilio relative rounded-xl w-full bg-gradient-to-bl from-black to-[rgb(65,65,65)] px-6 lg:px-12 xl:px-20 py-6 lg:py-16 xl:py-28 flex flex-col items-center'>
        <h3 className='text-white z-10 title mb-6'>Servicio de domicilio.</h3>
        <p className='text-white text-center z-10 lg:w-[45%]'>Contamos con servicio de domicilio en Sabaneta, la estrella, itagüí, Medellín, Envigado y Bello</p>
        <Link className='z-10 my-4 lg:my-8' href={'/productos'}>
            <button className='boton'>Hacer pedido!</button>
        </Link>
        <div className="absolute bottom-0 left-4 lg:left-8 w-full z-0">
            <img src="repartidor2-removebg-preview.png" className='w-[20%]' />
        </div>
      </div>
    </div>
  )
}

export default Domicilios
