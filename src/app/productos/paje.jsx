import React from 'react'
import productos from '../../utils/productos.js'
import Link from 'next/link'

const page = () => {
    
    const products = productos
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

            </div>

            {/* productos */}

            <div className='w-full lg:w-4/5'>
                {products.map( (product) =>{
                    const trimmedTitle = product.title.replace(/\s/g, '')
                    return(
                        <div className='flex flex-col lg:flex-row justify-between lg:items-center mb-4 lg:mb-8 xl:mb-12 w-full border border-gray-300 lg:border-none rounded-lg'>
                            <div className='w-9/12 mx-auto lg:mx-0 lg:w-1/5 p-3'>
                                <img className='w-full' src={product.imgSrc} alt="" />
                            </div>
                            <div className='lg:w-3/5 px-3 lg:px-0'>
                                <h3 className='font-extrabold text-lg mb-4 lg:mb-7'>{product.title}</h3>
                                <p className='mb-2 font-bold text-lg block lg:hidden'>${product.price_16 || product.price ? (product.price_16 ? product.price_16 : product.price) : (null)}</p>
                                <p className='tracking-tight'>{product.description}</p>
                                <button className='text-white bg-[#F57667] py-1 px-3 mt-2 font-bold mb-2 lg:mb-0 rounded-md hover:brightness-110'><Link href={`/productos/${trimmedTitle}`}>Comprar</Link></button>
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

export default page



"use client"
import React, { useState } from 'react'
import productos from '@/utils/productos.js';
import { useAppGlobalContext } from '@/context/AppContext';
import Link from 'next/link';

export default function page({params}) {

  const {addProduct, cartProducts, setCart} = useAppGlobalContext()  
  
  

  let selectedProduct = "";
  if (params.trimmedTitle){
    selectedProduct = params.trimmedTitle
  }
  const products = productos;
  const filteredProduct = products.filter( (singleProduct) => {
    return (
      singleProduct.title.replace(/\s/g, '') === selectedProduct
    )
  } )    

  const [finalPrice, setFinalPrice] = useState(filteredProduct[0].price)
  const [productCounter, setProductCounter] = useState(1)
  const [productSize, setProductSize] = useState(filteredProduct[0].sizes[0])
  const [selectedSize, setSelectedSize] = useState()

  const counterHandler = addOrSubstract =>{
    if(addOrSubstract === "add"){
      setProductCounter(productCounter + 1)
    }else{
      setProductCounter(productCounter - 1)
    }
  }
  
  const addProductToCart = (obj)=>{ 
    const existingProduct = cartProducts.filter( (p) => {
      return(
        (p.id === obj.id) && (p.size === obj.size)
      )
    } )
    if(existingProduct.length !== 0){
      console.log(existingProduct)
      const updatedCart = cartProducts.map( (item) =>{
        if (item.id === obj.id){
        return(
          {
            ...item,
            cantidad: item.cantidad + obj.cantidad
          }
        )}
        return item
      } )
      setCart(updatedCart)
    }else{
      addProduct(obj)
    }
  }

  const selectProductPrice = (size)=>{
    setProductSize(size)
    if(size > 3 && size < 17){
      setFinalPrice(filteredProduct[0].prices[0])
    }else if (size > 17 && size < 43 ){
      setFinalPrice(filteredProduct[0].prices[1])
    }else{
      if(filteredProduct[0].prices.length === 3){
        setFinalPrice(filteredProduct[0].prices[2])
      }
    }


  }

  return (
    <div className='pad flex flex-col lg:flex-row'>

      <div className='w-full lg:w-1/2 grid place-items-center'>
        {filteredProduct[0]
        ? <div className='w-full flex flex-col items-center'>
            <div className='w-1/2'>
              <img src={filteredProduct[0].imgSrc} alt="" />
            </div>
            <div className='w-full flex'>
              <div className='w-1/3'><img src={filteredProduct[0].imgSrc} className='w-full border border-gray-300 p-5' alt="" /></div>
              <div className='w-1/3'><img src={filteredProduct[0].imgSrc} className='w-full border border-gray-300 p-5' alt="" /></div>
              <div className='w-1/3'><img src={filteredProduct[0].imgSrc} className='w-full border border-gray-300 p-5' alt="" /></div>
            </div>
          </div>
        : <div className='w-full h-96 bg-gray-400'>

          </div>
      }
      </div> 

      <div className='w-full lg:w-1/2 pl-0 lg:pl-8'>
        {filteredProduct[0]
          ? <div>              
              <h3 className='mt-2 font-medium text tracking-tight'>{filteredProduct[0].title}</h3>
              {/* <p className='text-2xl font-extrabold mt-1'>${filteredProduct[0].price_16 || filteredProduct[0].price ? (filteredProduct[0].price_16 ? filteredProduct[0].price_16 : filteredProduct[0].price) : (null)}</p> */}
              <p>{finalPrice}</p>
              <p className='text-[#F57667] font-semibold mt-4'>Descripción</p>
              <p className='mt-1'>{filteredProduct[0].description}</p>
              <div className='w-full h-[2px] bg-gray-400 mt-1'></div>
              <div className='mt-5 lg:mt-8 xl:mt-10'>
                <h3 className='font-bold tracking-tight'>Seleccionar talla</h3>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {filteredProduct[0].sizes.map( (size) => {
                    const bgColor = size === productSize ? 'black' : 'rgb(209, 211, 215)'
                    return (
                      <button onClick={()=> selectProductPrice(size)} style={{backgroundColor:bgColor}} className='text-white py-1 px-3 font-extrabold'>{size}</button>
                    )
                  } )}
                </div>
                <div className='mt-5 lg:mt-8 xl:mt-10 flex flex-col lg:flex-row gap-7 lg:gap-0 lg:items-center lg:justify-between'>
                  <div className='w-full lg:w-1/2 flex gap-4'>
                    <p>Cantidad</p>
                    <div className='flex'>
                      <button onClick={()=> counterHandler("substract")} className='bg-gray-200 px-3 py-1 rounded-md'>-</button>
                      <div className='px-3 py-1'>{productCounter}</div>
                      <button onClick={()=> counterHandler("add")} className='bg-[#F57667] text-white px-3 py-1 rounded-md hover:brightness-110'>+</button>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 flex gap-2'>
                    <Link href={'/productos'}><button className='border border-[#F57667] text-[#F57667] py-2 px-3 hover:bg-black hover:border-0 hover:text-white rounded-md'>cancelar</button></Link>
                    <button onClick={()=> addProductToCart({
                      id:filteredProduct[0].id,
                      cantidad : productCounter,
                      imgSrc: filteredProduct[0].imgSrc,
                      title: filteredProduct[0].title,
                      size: productSize,
                      price: finalPrice
                    })} className='bg-[#F57667] text-white font-extrabold py-2 px-5 tracking-tight hover:brightness-110 rounded-md'>Añadir al carro!</button>
                  </div>
                </div>
              </div>

            </div> 
          : <div>

          </div>
        }
        
      </div>  

    </div>
  )
}

