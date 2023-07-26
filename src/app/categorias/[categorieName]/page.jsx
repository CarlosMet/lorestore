import React from 'react'
import productos from '@/utils/productos'
import Link from 'next/link'
import Image from 'next/image'

export default function Page({params}) {
    const categorie = params.categorieName
    const productsToShow = productos.filter( (item) =>{
        return(
            item.categoria.replace(/\s/g, '') === categorie
        )
    } )
  return (
    <div className='w-full px-4 lg:w-10/12 lg:mx-auto 2xl:w-9/12'>
      { productsToShow && productsToShow.length > 0
      ? productsToShow.map( (product, index) =>{
                    const trimmedTitle = product.title.replace(/\s/g, '')
                    return(
                        <div key={index} className='flex flex-col lg:flex-row justify-between lg:items-center mb-4 lg:mb-8 xl:mb-12 w-full border border-gray-300 lg:border-none rounded-lg'>
                            <div className='w-9/12 mx-auto lg:mx-0 lg:w-1/5 p-3'>
                                
                                <Image 
                                    src={product.imgSrc}
                                    layout='responsive'
                                    width={1}
                                    height={1} 
                                    alt={product.title}                               
                                />
                            </div>
                            <div className='lg:w-3/5 px-3 lg:px-0'>
                                <h3 className='font-extrabold text-lg mb-4 lg:mb-7'>{product.title}</h3>
                                <p className='mb-2 font-bold text-lg block lg:hidden'>${product.price_16 || product.price ? (product.price_16 ? product.price_16 : product.price) : (null)}</p>
                                <p className='tracking-tight'>{product.description}</p>
                                <button className='text-white bg-[#F57667] py-1 px-3 mt-2 font-bold mb-2 lg:mb-0 rounded-md hover:brightness-110'><Link href={`/productos/${params.trimmedSchool}/${trimmedTitle}`}>Comprar</Link></button>
                            </div>
                            <div className='lg:w-1/5 text-center lg:text-left hidden lg:block lg:px-7'>
                                <p className=''>precio</p>
                                <p className='text-[#F57667] font-extrabold'>${product.price_16 || product.price ? (product.price_16 ? product.price_16 : product.price) : (null)}</p>
                            </div>
                        </div>
                    )
                } 
                
                )
                : <div className='flex flex-col items-center mt-8 lg:mt-16 xl:mt-20'>
                    <div className='w-36'>
                        <Image 
                            src='https://i.imgur.com/07KMWab.jpg'
                            layout='responsive'
                            width={1}
                            height={1} 
                            alt='empty'                               
                        />
                    </div>
                    <div>
                        <h3 className='no-margin-title text-center mb-4 mt-6 lg:mt-10 2xl:mt-16'>No se encontraron productos</h3>
                        <p>Aún no tenemos productos para esta categoría, pero pronto los estaremos añadiendo</p>
                    </div>

                </div>
            }
    </div>
  )
}
