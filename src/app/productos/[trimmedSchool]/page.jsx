import React from 'react'
import productos from '../../../utils/productos.js'
import Link from 'next/link'

const Page = ({params}) => {
    
    const products = productos.filter( (producto) => {
        return(
            producto.institucion === params.trimmedSchool
        )
    } )

  return (
    <div className='pad w-full'>
      
        <div className='w-full flex justify-between'>
            {/* filtros */}
            <div className='border border-gray-500 rounded-lg w-1/5 p-4 h-[100vh] hidden lg:block'>
                <h3 className='text-lg font-bold mb-2'>Categorias</h3>
                <div>
                    <ul>
                        <li>Uniforme completo</li>
                        <li>Pantalones</li>
                        <li>Camisetas</li>
                        <li>Faldas</li>
                        <li>Busos y chaquetas</li>
                        <li>Calzado</li>
                        <li>Accesorios</li>
                    </ul>
                </div>
                <h3 className='font-bold my-8'>En construcción</h3>
                <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-construccion_114360-1718.jpg?w=1380&t=st=1687849637~exp=1687850237~hmac=17f6f73c267171e4e84baa7f4259894da6ccd5582f12d58d68c0b81d7504b262" className='w-full' />

            </div>

            {/* productos */}

            <div className='w-full lg:w-4/5'>
                <p className='text-sm text-center font-bold text-[#F57667] mb-5 lg:mb-1'>Nota: los precios de los productos pueden variar según la talla</p>
                {products.map( (product) =>{
                    const trimmedTitle = product.title.replace(/\s/g, '')
                    return(
                        <div className='flex flex-col lg:flex-row justify-between lg:items-center mb-4 lg:mb-8 xl:mb-12 w-full border border-gray-300 lg:border-none rounded-lg'>
                            <div className='w-9/12 mx-auto lg:mx-0 lg:w-1/5 p-3'>
                                <img className='w-full p-4' src={product.imgSrc} alt="" />
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
                } )}

            </div>

        </div>

    </div>
  )
}

export default Page
