
import Categories from '@/components/Categories'
import Counter from '@/components/Counter'
import Domicilios from '@/components/Domicilios'
import Hero from '@/components/Hero'
import MasPopulares from '@/components/MasPopulares'
import ShoppingCards from '@/components/ShoppingCards'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>      
      <Hero></Hero>
      <Categories></Categories>    
      <MasPopulares></MasPopulares>  
      <Domicilios></Domicilios>      
    </main>
  )
}
