import Link from 'next/link'
import React from 'react'

const CategoryCard = ({logo, title}) => {
  const categorieName = title.replace(/\s/g, '')
  return (
    <Link href={`/categorias/${categorieName}`}>
        <div className='flex flex-col items-center w-[125px] lg:w-[90px] xl:w-[115px]'>
          <div className='rounded-lg border border-gray-400 grid place-items-center w-full h-24'>
              <img src={logo} alt="" className='w-[65%] h-[65%]' />
          </div>
          <p className='text-center h-10'>{title}</p>
        </div>
    </Link>
  )
}

export default CategoryCard
