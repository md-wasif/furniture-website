"use client";
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import Image from 'next/image';

function HeroCarousel() {
  const slides = [
    {
      // url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716882756/website%20assets/SLIDE/dymfeexnucmxmeeff7jd.jpg',
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719051367/website%20assets/Banner/Fabric_Banner_lqynmz.jpg'
      // url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719229731/website%20assets/Banner/c9ltgtzab9lji7o5yurz.webp'
    },
    {
      // url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716882756/website%20assets/SLIDE/jnv1ahnjf2eozggjycbo.jpg',
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1718980770/website%20assets/Banner/Armchair_Banner_o0rhxe.jpg'
    },
    {
      // url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716882756/website%20assets/SLIDE/vtk2rfddr2p0l0lu3erl.webp',
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
  }, [currentIndex,slides.length]);

  return (
    <div className='flex h-15rem pt-4 pl-2'>
      <div className='max-w-[1200px] h-[580px] w-[65%] m-auto relative group pr-2.5'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-center duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-white text-black cursor-pointer'>
          <SlArrowLeft onClick={prevSlide} size={25} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-white text-black cursor-pointer'>
          <SlArrowRight onClick={nextSlide} size={25} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
            </div>
          ))}
        </div>
      </div>
      <div className='w-[40%] h-full flex flex-col justify-center items-center pt-2'>
        <div className='w-full h-[50%] pr-2'>
          {/* <Image className='w-full h-[290px] object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp" alt="" width={1920} height={200} /> */}
          <Image className='w-full h-[290px] object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1718974787/website%20assets/Banner/Banner_Discount_rgh1b6.jpg" alt="" width={1920} height={200} />
        </div>
        <div className='w-full h-[50%] pt-2.5 pr-2'>
          {/* <Image className='w-full h-[290px] object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp" alt="" width={1920} height={200} /> */}
          <Image className='w-full h-[290px] object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1719218632/website%20assets/Banner/sofacumbed_banner_gif_xc4qt0.gif" alt="" width={1920} height={200} />
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;