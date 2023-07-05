import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    const categories = [
        {
            id: 1,
            logo: "https://images.vexels.com/media/users/3/239083/isolated/preview/87221d6b22af98b4f64bcf08930a7a4c-graphicicon-clothing-16.png",
            title: "Uniformes completos"
        },
        {
            id: 2,
            logo: "https://www.svgrepo.com/show/4306/nylon-jacket.svg",
            title: "Chaquetas"
        },
        {
            id: 3,
            logo: "https://www.svgrepo.com/show/201120/shoe.svg",
            title: "Calzado"
        },
        {
            id: 4,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Black_belt.svg/2560px-Black_belt.svg.png",
            title: "Accesorios"
        },
        {
            id: 5,
            logo: "https://www.svgrepo.com/show/38129/denim-shorts.svg",
            title: "Pantalones"
        },
        {
            id: 6,
            logo: "https://images.vexels.com/media/users/3/142647/isolated/preview/7975c8713e6cd70ff26097efbbebdbd1-ropa-de-camiseta.png",
            title: "Camisetas"
        },
        {
            id: 7,
            logo: "https://svgsilh.com/svg_v2/2580503.svg",
            title: "faldas"
        }
    ]
  return (
    <div className='pad'>
      <h2 className='title'>Categories.</h2>
      <div className='grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 items-center justify-between mt-6 lg:mt-8 xl:mt-10'>
        {categories.map( (cat) => {
            return(
                <CategoryCard
                    key={cat.id}
                    title = {cat.title}
                    logo={cat.logo}
                ></CategoryCard>
            )
        } )}
      </div>
    </div>
  )
}

export default Categories
