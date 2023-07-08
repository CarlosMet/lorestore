import React from 'react'
import PopularCard from './PopularCard'

export default function MasPopulares() {
    const products = [
        {
            id:1,
            imgSrc: "https://i.imgur.com/KsMD2jM.png",
            title: "Uniforme Completo Adelaida",
            price: 170500,
            institucion: "AdelaidaCorrea"
        },
        {
            id:2,
            imgSrc: "https://i.imgur.com/5A9HQJE.png",
            title: "Uniforme completo M Auxiliadora",
            price: 205500,
            institucion: "MariaAuxiliadora"
        },
        {
            id:3,
            imgSrc: "https://i.imgur.com/1jUvJcx.png?1",
            title: "Camiseta M Auxiliadora",
            price: 49500
        },
        {
            id:4,
            imgSrc: "https://i.imgur.com/7xdUVSj.png",
            title: "Sudadera M Auxiliadora",
            price: 75500,
            institucion: "MariaAuxiliadora"
        },
        {
            id:5,
            imgSrc: "https://i.imgur.com/GirYzu4.png",
            title: "Tennis Adelaida",
            price: 80000,
            institucion: "AdelaidaCorrea"
        },
        {
            id:6,
            imgSrc: "https://i.imgur.com/GWj2xbj.png",
            title: "Camiseta Adelaida",
            price: 42500,
            institucion: "AdelaidaCorrea"
        }
    ]
  return (
    <div className='pad'>
        <div className='flex items-center justify-between mb-4 lg:mb-8 xl:mb-12'>
            <h2 className='title'>Más vendidos</h2>
            
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 place-items-center md:gap-2'>
            {products.map( (product) =>{
                return(
                    <PopularCard
                        key={product.id}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        price={product.price}
                        institucion={product.institucion}
                    ></PopularCard>
                )
            } )}
        </div>
        
    </div>
  )
}
