import React from 'react'

const ShoppingCards = () => {
  return (

    <div className='mt-6 lg:mt-10 xl:mt-14 2xl:mt-20 flex flex-col xl:flex-row justify-center gap-2 items-center'>

      <div className='flex gap-2'>
        <div className='card text-center p-8 relative w-36 h-52 lg:w-64 lg:h-96'>
          <div className="absolute top-0 right-0 left-0 flex flex-col -bottom-20 lg:-bottom-44 items-center justify-center transform translate-x(-50%) translate-y(-50%)">
              <p className='text-lg lg:text-xl font-bold text-white tracking-tight'>Hombre</p>
              <h2 className='text-xl lg:text-2xl tracking-tight font-extrabold text-white'>Uniforme Completo.</h2>
              <button className='py-1 px-4 lg:py-3 lg:px-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out'>COMPRAR</button>
          </div>
        </div>

        <div className='card2 text-center p-8 relative w-36 h-52 lg:w-64 lg:h-96'>
          <div className="absolute top-0 right-0 left-0 flex flex-col -bottom-20 lg:-bottom-44 items-center justify-center transform translate-x(-50%) translate-y(-50%)">
              <p className='text-lg lg:text-xl font-bold text-white tracking-tight'>Mujer</p>
              <h2 className='text-xl lg:text-2xl tracking-tight font-extrabold text-white'>Uniforme Completo.</h2>
              <button className='py-1 px-4 lg:py-3 lg:px-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out'>COMPRAR</button>
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
      <div className='card3 text-center p-8 relative w-36 h-52 lg:w-64 lg:h-96'>
          <div className="absolute top-0 right-0 left-0 flex flex-col -bottom-20 lg:-bottom-44 items-center justify-center transform translate-x(-50%) translate-y(-50%)">
              <p className='text-lg lg:text-xl font-bold text-white tracking-tight'>Mujer</p>
              <h2 className='text-xl lg:text-2xl tracking-tight font-extrabold text-white'>Calzado</h2>
              <button className='py-1 px-4 lg:py-3 lg:px-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out'>COMPRAR</button>
          </div>
        </div>

        <div className='card4 text-center p-8 relative w-36 h-52 lg:w-64 lg:h-96'>
          <div className="absolute top-0 right-0 left-0 flex flex-col -bottom-20 lg:-bottom-44 items-center justify-center transform translate-x(-50%) translate-y(-50%)">
              <p className='text-lg lg:text-xl font-bold text-white tracking-tight'>Hombre</p>
              <h2 className='text-xl lg:text-2xl tracking-tight font-extrabold text-white'>Calzado</h2>
              <button className='py-1 px-4 lg:py-3 lg:px-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out'>COMPRAR</button>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default ShoppingCards

