"use client"
import React from 'react'
import CountUp from 'react-countup'
import {RxLapTimer} from 'react-icons/rx'
import {BiShoppingBag} from 'react-icons/bi'
import {MdOutlineEmojiPeople} from 'react-icons/md'

const Counter = () => {    
  return (
    
        <div className='pad2 mt-4 lg:mt-8 xl:mt-12 flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex flex-col items-center gap-4 w-48'>
                <div className='py-3 lg:py-5 2xl:py-8 px-6 lg:px-9 2xl:px-12 flex flex-col items-center gap-2'>
                    <RxLapTimer size={35} color='#F57667'></RxLapTimer>
                    <span className='text-3xl font-extrabold'><CountUp start={0} end={7} duration={6} /></span>
                </div>
                <p className='text-base  tracking-tight'>Años en el mercado</p>
            </div>
            <div className='flex flex-col items-center gap-4 w-48'>
                <div className='py-3 lg:py-5 2xl:py-8 px-6 lg:px-9 2xl:px-12 flex flex-col items-center gap-2'>
                    <BiShoppingBag size={35} color='#F57667'></BiShoppingBag>
                    <span className='text-3xl font-extrabold'><CountUp start={357} end={1000} duration={6} />+</span>
                </div>
                <p className='text-base  tracking-tight'>Productos entregados</p>
            </div>
            <div className='flex flex-col items-center gap-4 w-48'>
                <div className='py-3 lg:py-5 2xl:py-8 px-6 lg:px-9 2xl:px-12 flex flex-col items-center gap-2'>
                    <MdOutlineEmojiPeople size={35} color='#F57667'></MdOutlineEmojiPeople>
                    <span className='text-3xl font-extrabold'><CountUp start={0} end={500} duration={6} />+</span>
                </div>
                <p className='text-base  tracking-tight'>Clientes satisfechos</p>
            </div>
        </div>
    
  )
}

export default Counter
