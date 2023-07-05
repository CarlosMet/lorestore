"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const Slider = () => {  
  const sliderImages = [
    "https://i.imgur.com/aHiQV2C.jpg",
    "https://img.freepik.com/vector-gratis/estudiantes-mascara_23-2148581674.jpg?w=826&t=st=1687824629~exp=1687825229~hmac=a5dabde2796ba7fa777974023d79de0f0a02cd62d8cbcc8b6b025be6c03e2780",
    "https://img.freepik.com/foto-gratis/vista-frontal-jovenes-empresarios-posando_23-2148465744.jpg?w=1380&t=st=1687824744~exp=1687825344~hmac=9b08cd9f3b38927f86e60b16286b697691e0371dbb9ffac9368e4f2354201df9"
  ];
    
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
      {sliderImages.map( (sliderView) =>{
        return(
          <SwiperSlide>
            <img className='w-full h-[64vh] slider-img' src={sliderView} alt="slider img" />
          </SwiperSlide>
        )
      } )}
      
    </Swiper>
    </div>
  )
}

export default Slider
