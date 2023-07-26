import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CategoryCard = ({logo, title}) => {
  const categorieName = title.replace(/\s/g, '')
  return (
    <Link href={`/categorias/${categorieName}`}>
        <div className='flex flex-col items-center w-[125px] '>
          <div className='rounded-lg border border-gray-400 grid place-items-center w-full h-24'>              
                <img src={logo} className='h-20' alt="" />           
          </div>
          <p className='text-center h-10'>{title}</p>
        </div>
    </Link>
  )
}

export default CategoryCard
