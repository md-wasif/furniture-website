"use client";
import React, { useEffect, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import Image from 'next/image';

function HeroCarousel() {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719051367/website%20assets/Banner/Fabric_Banner_lqynmz.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1718980770/website%20assets/Banner/Armchair_Banner_o0rhxe.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1718607246/website%20assets/Banner/GIFs_Colorful_Couch_p4o0la.gif'
    },
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716883217/website%20assets/wlsyyztyq83xpl8qjaug.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716883217/website%20assets/lcpq06u7f1y7ovem44ly.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); // 5000ms = 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentIndex, slides.length]);

  return (
    <div className='flex flex-col lg:flex-row m-2 xl:h-[52rem]'>
      <div className='relative w-full lg:w-3/5 h-96 lg:h-[38rem] xl:h-[52rem] m-auto mr-2'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-cover bg-left duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-white text-black cursor-pointer'>
          <SlArrowLeft onClick={prevSlide} size={25} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-white text-black cursor-pointer'>
          <SlArrowRight onClick={nextSlide} size={25} />
        </div>
      </div>
      <div className='w-full lg:w-2/5 flex flex-col justify-center items-center mt-4 lg:mt-0'>
        <div className='w-full h-48 lg:h-[48%] mb-2'>
          <Image className='w-full h-full object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1718974787/website%20assets/Banner/Banner_Discount_rgh1b6.jpg" alt="Discount Banner" width={1920} height={200} />
        </div>
        <div className='w-full lg:h-[52%] bg-gray-300'>
          <Image className='w-full h-full object-contain' src="https://res.cloudinary.com/dg38njbya/image/upload/v1719218632/website%20assets/Banner/sofacumbed_banner_gif_xc4qt0.gif" alt="Sofa cum bed" width={1920} height={200} />
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
