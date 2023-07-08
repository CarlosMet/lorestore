"use client"
import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {RxMagnifyingGlass} from 'react-icons/rx'
import { useAppGlobalContext } from '@/context/AppContext'
import productos from '@/utils/productos'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import getData from '@/utils/getData'



const Navbar = () => {

    const topRef = useRef(null)
    const middleRef = useRef(null)
    const bottomRef = useRef(null)

    const {cartProducts} = useAppGlobalContext()
    const [productsQuantity, setProductsQuantity] = useState(0)
    const [showFlotating, setShowFlotating] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] =useState([])    
    const [productData, setProductData] = useState(null)

    useEffect(()=>{
        
        const fetchData = async ()=>{
            try{
                const fetchedData = await getData()
                setProductData(fetchedData)
            }catch(err){
                console.log(err)
            }
            
        }
        fetchData()
        

        const filterFetchedData = ()=>{
            const dataToFilter = productData
            if(dataToFilter){
                const filteredData = dataToFilter.filter( (result) => {
                    return(
                        result.title.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                } )
                setSearchResults(filteredData)
                
            }
        }

        filterFetchedData()

    }, [searchQuery])
    

    const showMenuHandler = ()=>{
        setShowMenu(!showMenu)
        if (!showMenu){
            middleRef.current.classList.add("opacity-0")
            topRef.current.classList.add("rotate-45")
            bottomRef.current.classList.add("-rotate-45")
            bottomRef.current.classList.add("-translate-y-[12px]")
        }else{
            middleRef.current.classList.remove("opacity-0")
            topRef.current.classList.remove("rotate-45")
            bottomRef.current.classList.remove("-rotate-45")
            bottomRef.current.classList.remove("-translate-y-[12px]")
            
        }
    }

    const searchHandler = (e)=>{
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        setProductsQuantity(cartProducts.length);
      }, [cartProducts]);
      
      useEffect(() => {
        setShowFlotating(productsQuantity > 0);
      }, [productsQuantity]);

      
       const showResultsHandler = ()=>{
        setSearchQuery('')
       }
      

     
  return (
    <nav className='relative pad flex items-center justify-between py-3 lg:py-5 mb-5'>

        <button onClick={showMenuHandler} className="flex lg:hidden flex-col gap-[3px] cursor-pointer z-20">
            <div ref={topRef} className='w-6 h-[3px] bg-slate-400 transition-transform duration-500'></div>
            <div ref={middleRef} className='w-4 h-[3px] bg-slate-400 transition-opacity duration-700'></div>
            <div ref={bottomRef} className='w-6 h-[3px] bg-slate-400 transition-transform duration-500'></div>
        </button>

        {
            showMenu 
            
                ? <div className='fixed w-[85vw] h-[100vh] bg-white z-10 top-0 -left-3'>
                    <div className='w-full mt-16'>
                        <ul className='flex flex-col px-12 gap-4 tracking-tighter'>
                            <li onClick={showMenuHandler} className='border-b-2 '><Link href={'/'}>Inicio</Link></li>
                            <li onClick={showMenuHandler}><Link href={'/productos'}>Productos</Link></li>
                            <li onClick={showMenuHandler}><Link href={'/contacto'}>Contacto</Link></li>
                            <li onClick={showMenuHandler}><Link href={'quienessomos'}>Quiénes somos</Link></li>
                        </ul>
                    </div>
                </div>
                
                :null
        }


        <div className='grid place-items-center'>
            <Link href={'/'}>
                <p className='text-xl md:text-3xl font-extrabold'>LORE<span className='text-[#F57667] font-black'>STORE.</span></p>
            </Link>
        </div>

        <div className='hidden lg:block'>
            <ul className='flex items-center justify-between gap-4 tracking-tighter'>
                <li className='border-b-2 border-b-[#F57667]'><Link href={'/'}>Inicio</Link></li>
                <li><Link href={'/productos'}>Productos</Link></li>
                <li><Link href={'/contact'}>Contacto</Link></li>
                <li><Link href={'/quienessomos'}>Quiénes somos</Link></li>
            </ul>
        </div>

        <div className='hidden lg:flex items-center bg-[#F57667] h-7 rounded-md relative'>
            <input onChange={searchHandler} type="text" className='w-full h-full bg-[#EFEFF0] focus:outline-none py-1 px-3 rounded-tl-md rounded-bl-md' placeholder='Buscar...' />
            <div className='h-full w-9 grid place-items-center'>
                <RxMagnifyingGlass size={20} color={'white'}></RxMagnifyingGlass>
            </div>
            {
                searchQuery !== "" &&
                <div className='absolute top-full w-full z-20 bg-white px-2'>
                    <div className=''>
                        {
                            searchResults.map( (result, index) =>{
                                const trimmedTitle = result.title.replace(/\s/g, '')
                                return(
                                    <Link key={index} onClick={showResultsHandler} href={`/productos/${result.institucion}/${trimmedTitle}`}>
                                        <div className='w-full overflow-hidden'>
                                            <div className="flex items-center w-full">
                                                <div className='w-2/6 p-2'>
                                                    <img src={result.imgSrc} alt="" className='w-full' />
                                                </div>
                                                <div className='w-4/6'>
                                                    <p className='font-bold tracking-tight'>{result.title}</p>
                                                    <p className='text-xs text-[#F57667]'>desde</p>
                                                    <p className='tracking-tighter text-sm'>${result.price}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                    </Link>
                                )
                            } )
                        }
                    </div>
                </div>
            }
        </div>

        <div className='flex items-center justify-center lg:justify-end gap-1 lg:gap-6 pl-8'>

            

            <div className='flex items-center gap-1'>
                

                <div className='relative'>
                    <Link href={'/carrito'}>
                        <HiOutlineShoppingCart 
                            size={22}
                            color={'#A0AEC0'}
                        ></HiOutlineShoppingCart>
                    </Link>
                    {showFlotating 
                    &&<div className='absolute w-4 h-4 rounded-full bg-red-500 -top-1 -right-1 grid place-items-center'>
                        <p className='text-[11px] font-bold text-white'>{productsQuantity}</p>
                    </div>}

                </div>
            </div>

            
        </div>

    </nav>
  )
}

export default Navbar
