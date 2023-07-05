"use client"
import React from 'react'
import { useAppGlobalContext } from '@/context/AppContext'
import { useEffect } from 'react'
import { useState } from 'react'
import productos from '@/utils/productos'
import {BsArrowLeft} from 'react-icons/bs'
import Link from 'next/link'

const Page = () => {    
    const {cartProducts, addProduct, deleteProduct, setCart, setPrice} = useAppGlobalContext()    
    // const localProducts = window.localStorage.getItem("appState")   
    // const [productsToRender, setProductsToRender] = useState([])   // console.log(window.localStorage.getItem("appState"))
     
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(()=>{
      if(Array.isArray(cartProducts) && cartProducts.length > 0){
        const calculatedPrice = cartProducts.reduce( function(acumulador, producto) {
          const subTotal = producto.price * producto.cantidad
          return acumulador + subTotal
        }, 0 )
        setTotalPrice(calculatedPrice)
      }
      console.log(totalPrice, "from carrito")
      
    }, [cartProducts, totalPrice])

  return (
    <div className='w-full'>
      {
        cartProducts && cartProducts.length > 0
        ? (cartProducts.length > 0 
          && 
          <div className='w-full'>

            <div className="flex flex-col lg:flex-row w-full">

              <div className='w-full lg:w-8/12'>
                  {
                  cartProducts.map( (product) =>{
                    return(
                        <div key={product.id} className='flex items-center justify-between p-2 lg:py-4 lg:px-6 bg-[#E5E9EA] w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto mt-3 lg:mt-4 xl:mt-6 rounded-lg relative'>                    
                            <div className='w-2/12 rounded-full overflow-hidden bg-white'>
                              <img src={product.imgSrc} alt="" className='w-full' />
                            </div>
                            <div className='w-4/12'>
                              <p className='tracking-tighter font-bold'>{product.title}</p>
                              <p className='text-sm text-gray-600'>Talla:{product.size}</p>
                            </div>
                            <div className='w-2/12'>
                              <p>{product.cantidad}</p>
                            </div>
                            <div className='w-3/2'>
                              <p>{product.price}</p>
                            </div>
                            <button onClick={()=> deleteProduct(product.id, product.size)} className='absolute top-1/3 -right-4 font-bold text-[#F57667] text-lg'>x</button>
                        </div>
                      )
                  } )
                  }
                  <div className='flex items-center justify-between px-2 md:px-6 lg:px-10 xl:px-16 2 mt-8 lg:mt-12 xl:mt-16 2xl:mt-24'>
                    <div className=''>
                      <Link className='flex gap-2 items-center' href={'/productos'}>
                        <BsArrowLeft></BsArrowLeft>
                        <button className='trackin-tighter text-sm lg:text-base'>Volver a la tienda</button>
                      </Link>
                    </div>
                    <div>
                      <p><span className='text-lg font-bold tracking-tight'>Precio total :</span> {totalPrice}</p>
                    </div>
                  </div>
              </div>


                {/* Informacion de pago */}
              <div className='w-full mt-7 lg:mt-0 lg:w-4/12 border-l-2 px-3 lg:px-6'>
                  <h3 className='title text-[#F57667] text-center lg:text-left'>Detalles de pago</h3>
                  <div className='w-1/2 mt-4 lg:mt-8 mx-auto'>
                    <img src="https://www.inttercom.net.co/gallery_gen/ca0eb6faeb74ae423bb06a1593fc9512_400x120.png" className='w-full' alt="" />
                  </div>
                  <div className='bg-white w-[40%] lg:w-[32%] xl:w-[38%] mt-4 lg:mt-12 mx-auto'>
                    <img className='w-full' src="https://i.imgur.com/KQRFNxT.jpg" alt="" />
                  </div>
                  <div className='mt-4 lg:mt-6 text-center'>
                    <p className='text-lg font-semibold'>Bancos: Bancolombia y Nequi</p>
                    <p className='text-lg font-semibold'>01536867666 ahorros</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <Link className='' href={'carrito/finalizarCompra'}>
                      <button onClick={()=> setPrice(totalPrice
                        )} className='boton my-4 lg:my-7'>Finalizar compra</button>
                    </Link>
                  </div>
              </div>
            </div>

              {/* contenido de abajo */}
            <div className='pad'>
                  <h3 className='title'>Instrucciones de pago</h3>
                  <p className='mt-4 lg:mt-6'><span className='title text-[#F57667] mr-1'>1.</span> Cuando hayas seleccionado todos tus productos y estés seguro de realizar la compra da click en <span className='text-[#F57667] font-bold tracking-tight text-lg'>Finalizar compra.</span> </p>
                  <p className='mt-2 lg:mt-4'><span className='title text-[#F57667] mr-1'>2.</span>Completa el formulario con tus datos personales, selecciona si quieres retirar tu pedido en tienda o que te lo llevemos a casa y verifica que tu orden esté correcta.</p>
                  <p className='mt-2 lg:mt-4'><span className='title text-[#F57667] mr-1'>3.</span> Realiza el pago por transferencia Bancolombia o Nequi y relaciona el número de comprobante de pago en caso de transferencia bancolombia o referencia de pago en caso de Nequi en la casilla correspondiente. </p>
                  <p className='mt-2 lg:mt-4'><span className='title text-[#F57667] mr-1'>4.</span>Por último da click en <span className='text-[#F57667] font-bold text-lg tracking-tight mr-1'>Hacer pedido</span></p>
            </div>
          </div>
        
        ) 
        : <div className='grid place-items-center w-full'>
            <img className='w-3/12 2xl:w-4/12' src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="" />
            <h2 className='title mb-4'>El carrito está vacio</h2>
            <p>Parece que aún no has añadido ningún producto al carrito</p>
            <Link href={'/productos'}>
              <button className='boton mt-7 lg:mt-10'>Empezar a añadir productos</button>
            </Link>
        </div>
      }
    </div>
  )
}

export default Page
