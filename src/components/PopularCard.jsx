import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function PopularCard({title, price, imgSrc, institucion}) {
  const trimmedTitle = title.replace(/\s/g, '')
  
  return (
    <Link href={`/productos/${institucion}/${trimmedTitle}`}>
      <div className='border border-gray-400 rounded-md flex items-center gap-1 md:gap-2 p-2 lg:p-4 xl:p-6 mb-2 lg:mb-8 w-[142px] md:w-48 lg:w-60 xl:w-72 2xl:w-80 h-32 lg:h-40'>
          <div className='w-1/3 relative'>
              <div className='w-full h-12'>
                <img src={imgSrc} alt="" className='w-full' />
              </div>
              {/* <img src={imgSrc} alt="" className='w-full' /> */}
              <div className='absolute top-0 left-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#F57667] text-xs lg:text-sm text-white font-bold grid place-items-center'>
                  hot
              </div>
          </div>
          
          <div className='w-2/3'>
              <p className='tracking-tight text-sm lg:text-base h-20 md:h-16'>{title}</p>
              <p className='font-bold'>desde ${price}</p>
          </div>
          
      </div>
    
    </Link>
  )
}
