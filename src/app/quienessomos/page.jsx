import React from 'react'

export default function page() {
  return (
    <div>
      <div className='grid place-items-center'>
        <h2 className='title'>Quiénes somos</h2>
      </div>
      <div className='flex flex-col-reverse lg:flex-row mt-4 lg:mt-8 xl:mt-12'>
        <div className='w-full lg:w-1/2 py-4 px-4 lg:px-14 lg:py-12 2xl:px-16 2xl:py-20'>
            <h3 className='text-lg lg:text-xl font-semibold mb-4 lg:mb-6 2xl:mb-10'>Lore Store</h3>
            <p className=' text-slate-800'>¡Bienvenido a Lorestore, tu destino familiar para uniformes escolares, accesorios y papelería! Somos una empresa comprometida en ofrecerte productos de calidad y una experiencia de compra excepcional. <br /><br />

En Lorestore, entendemos la importancia de los uniformes escolares como una parte esencial de la identidad y el espíritu de equipo en las instituciones educativas. Nos enorgullece proporcionar una amplia variedad de uniformes escolares de alta calidad para estudiantes de todas las edades. Ya sea que necesites uniformes para preescolar, primaria o secundaria, tenemos opciones que se adaptan a todos los estilos y tallas. Nuestra extensa selección incluye camisas, pantalones, faldas, suéteres y mucho más, todo confeccionado con materiales duraderos y cómodos para garantizar la satisfacción de nuestros clientes. </p>
        </div>
        <div className='w-full lg:w-1/2 bg-[#F57667] relative'>            
                <img className='w-9/12 mx-auto lg:w-10/12 2xl:w-7/12 lg:absolute -top-4 left-0 lg:-left-6 lg:top-1/2 lg:transform lg:-translate-y-1/2 rounded-xl shadow-lg shadow-black' src="https://img.freepik.com/foto-gratis/equipo-empresarios-apilando-manos_53876-20873.jpg?w=1380&t=st=1687822401~exp=1687823001~hmac=5f49a9eb3d0df422ee9458dfef553472d82d8eb75dbf73000c07467ec3923614" alt="" />            
        </div>  

      </div>
    </div>
  )
}
