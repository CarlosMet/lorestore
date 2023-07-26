import React from 'react'
import PopularCard from './PopularCard'

export default function MasPopulares() {
    const products = [        
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
        }
        
    ]
  return (
    <div className='pad3'>
        <div className='flex items-center justify-between mb-4 lg:mb-8 xl:mb-12'>
            <h2 className='title'>Más vendidos</h2>
            
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
            {/* grid-cols-2 lg:grid-cols-3 place-items-center md:gap-2 */}
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
