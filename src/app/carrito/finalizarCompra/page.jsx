"use client"
import React, {useRef, useState} from 'react'
import { useAppGlobalContext } from '@/context/AppContext'
import emailjs from '@emailjs/browser';

export default function Page() {

  const form = useRef(null)

  const {cartProducts, totalPrice} = useAppGlobalContext()
  const [paymentRef, setPaymentRef] = useState("")
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    adress: "",
    paymentRef: "",
    price: "",
    delivery : false,
    city: "",
    tel: 0
  })
  
  const submitOrder = (e)=>{
    e.preventDefault()    
    form.current.submit()
  }

  const formSubmit = (e)=>{
    e.preventDefault()

    const email = e.target.correo.value
    const nombre = e.target.nombre.value
    const direccion = e.target.direccion.value
    const municipio = e.target.municipio.value
    const telefono = e.target.telefono.value
    const estudiante = e.target.estudiante.value

    e.target.referencia.value = paymentRef
    e.target.pedido.value = JSON.stringify(cartProducts)

    const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if( (email === "" || nombre === "" || direccion === "" || municipio === "" || telefono === "" || estudiante === "" ) ){
      alert("Los campos marcados con * son obligatorios")
      return
    }

    if( email !== "" && !regexEmail.test(email) ){
      alert("Debes ingresar una dirección de correo válida")
      return
    }

    if(paymentRef === ""){
      alert("Recuerda anexar la referencia de pago antes de finalizar la compra")
      return
    }



    emailjs.sendForm('service_wzm20al', 'template_g0e388u', form.current, 'gQLIhF5TesmoEYT-S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    alert("enviado")

  }

  const refChangeHandler = (e)=>{
    setPaymentRef(e.target.value)
  }

  

  return (
    <>
    <div className='flex flex-col gap-8 lg:gap-0 lg:flex-row w-full pad justify-between'>

      <div className='w-full lg:w-7/12'>
        <h2 className='font-black text-xl lg:text-2xl 2xl:text-3xl tracking-tighter mt-2'>Datos de envío</h2>
        <form ref={form} onSubmit={formSubmit} id='paymentForm' action="" className='mt-4 lg:mt-8'>
          <div className='flex items-center justify-between'>
            <div className='w-6/12'>
              <label htmlFor="nameInput">Nombre <span className='text-[#F57667]'>*</span></label><br />
              <input className='py-1 lg:py-2 w-full border border-black' type="text" id='nameInput' name='nombre' />
            </div>
            <div className='w-5/12'>
              <label htmlFor="nameInput">Apellido</label><br />
              <input className='py-1 lg:py-2 border w-full border-black' type="text" id='lastnameInput' name='apellido' />
            </div>
          </div>
          <label htmlFor="document">Nombre del estudiante <span className='text-[#F57667]'>*</span></label><br />
          <input type="text" className='py-1 lg:py-2 my-2 lg:my-4 border border-black w-full' name="estudiante" id="document" /><br />
          <label htmlFor="city">Municipio <span className='text-[#F57667]'>*</span></label><br />
          <input list='cities' id='city' className='py-1 lg:py-2 border border-black w-full' name='municipio' />
          <datalist id='cities'>
            <option value="Medellín"></option>
            <option value="Sabaneta"></option>
            <option value="Envigado"></option>
            <option value="La estrella"></option>
          </datalist><br />
          <label htmlFor="adress">Dirección <span className='text-[#F57667]'>*</span></label><br />
          <input type="text" id='adress' name='direccion' className='py-1 lg:py-2 my-2 lg:my-4 border border-black w-full' />
          <label htmlFor="description">Descripción (opcional) ej. edificio bolivar, apto 302</label><br />
          <input type="text" id='description' name='descripcion' className='py-1 lg:py-2 border border-black w-full' />
          <label htmlFor="phone">Teléfono <span className='text-[#F57667]'>*</span></label><br />
          <input type="number" id='phone' name='telefono' className='py-1 lg:py-2 my-2 lg:my-4 border border-black w-full' />
          <label htmlFor="email">Correo electrónico <span className='text-[#F57667]'>*</span></label><br />
          <input type="email" id='email' name='correo' className='py-1 lg:py-2 border border-black w-full' />          
          <input type="text" name='referencia' className='w-0' />
          <input type="text" name='pedido' className='w-0' />
          <div className='grid place-items-center my-4 lg:my-6'>
              <button type='submit' className='boton disabled:cursor-not-allowed'>Hacer pedido!</button>
          </div>


        </form>
      </div>

      <div className='w-full lg:w-5/12 pad'>
        <div className='border border-gray-400 rounded-lg flex flex-col justify-between px-4 lg:px-8 2xl:px-14'>
          <h2 className='font-black text-xl lg:text-2xl 2xl:text-3xl tracking-tighter mt-2'>Pedido</h2>
          {
            cartProducts && cartProducts.length > 0 
            ? <div>
                <div className='flex justify-between items-center my-4 lg:my-6 xl:my-10'>
                  <p className='text-lg font-bold'>Producto</p>
                  <p className='text-lg font-bold'>Precio</p>
                </div>
                <hr />
                <div>
                  {cartProducts.map( (item) => {
                    return(
                    <>
                    <div className='flex items-center justify-between my-2 lg:my-4 2xl:my-6'>
                      <p>{item.title} <p className='text-slate-500'>talla {item.size}</p> x {item.cantidad}</p>
                      <p>${item.price}</p>
                    </div>
                    <hr />
                    </>
                    )
                  } )}  
                </div>             
                
                <div className='flex items-center justify-between my-4 lg:my-6 xl:my-10'>
                  <p className='text-lg font-bold'>Subtotal:</p>
                  <p>{totalPrice}</p>
                </div>

                <div className='flex items-center justify-between my-4 lg:my-6 xl:my-10'>
                  <p className='text-lg font-bold'>Domicilio:</p>
                  <p>10000</p>
                </div>
                
                
                <div className='flex items-center justify-between my-4 lg:my-6 xl:my-10'>
                  <p className='text-lg font-bold'>Total:</p>
                  <p>{totalPrice + 10000}</p>
                </div>
                
                <hr />
                <div>
                  <p className='font-black text-xl lg:text-2xl 2xl:text-3xl tracking-tighter mt-2'>Transferencia</p>
                  <p className='text-sm font-light my-2 lg:my-4 xl:my-6'>Realiza el pago por transferencia Bancolombia o Nequi usando el código qr de la imagen y relaciona el número de comprobante de pago en caso de transferencia bancolombia o referencia de pago en caso de Nequi en la casilla correspondiente.</p>                  
                  <img className='w-[60%] mx-auto' src="https://i.imgur.com/KQRFNxT.jpg" alt="" />
                    <div>
                      <label htmlFor="ref">Referencia de pago</label>
                      <input type="text" id='ref' onChange={refChangeHandler} className='border border-gray-400 my-2 w-full rounded-sm' />
                    </div>                  
                  
                </div>
            </div>
            : <div>Aun no has añadido nada</div>
          }
        </div>

      </div>

    </div>
    <div className='pad w-full'>
          <h2 className='title mb-4 lg:mb-8'>Información importante</h2>

          <div className='flex flex-col lg:flex-row lg:justify-between px-4 md:px-14 lg:px-20 xl:px-28 2xl:px-40'>

            <div>
              <h3 className='font-extrabold text-lg mb-3 lg:mb-6 text-[#F57667]'>Bancolombia</h3>
              <p><span className='font-bold'>Nro. de cuenta: </span>01536867666</p>
              <p className='mb-3 lg:mb-6'><span className='font-bold'>Tipo de cuenta: </span>Ahorros</p>
            </div>

            <div>
              <h3 className='font-extrabold text-lg mb-3 lg:mb-6 text-[#F57667]'>Nequi</h3>
              <p><span className='font-bold'>Nro. de cuenta: </span>324 675 8205</p>
            </div>

          </div>
          
          


    </div>
    </>
  )
}
