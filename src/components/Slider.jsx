"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'



import Image from 'next/image';

const Slider = () => {  
  const sliderImages = [
    "/slider1.jpg",
    "/slider2.avif",
    "/slider3.avif" 
  ]
    
  return (
    <div className='w-full h-[64vh]'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay = {{
        delay:3800
      }}
      pagination={{
        clickable:true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> ' + '</span>';
        },
      }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {sliderImages.map( (sliderView, index) =>{
        return(
          <SwiperSlide key={index}>
            <div style={{ width: '100%', height: '64vh' }}>
              <Image
                src={sliderView}
                fill
              />
            </div>
            {/* <img className='w-full h-[64vh] slider-img' src={sliderView} alt="slider img" /> */}
          </SwiperSlide>
        )
      } )}
      
    </Swiper>
    </div>
  )
}

export default Slider
