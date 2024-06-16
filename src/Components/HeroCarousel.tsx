"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

function HeroCarousel() {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716882756/website%20assets/SLIDE/dymfeexnucmxmeeff7jd.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716882756/website%20assets/SLIDE/jnv1ahnjf2eozggjycbo.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716882756/website%20assets/SLIDE/vtk2rfddr2p0l0lu3erl.webp',
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

  return (
    <div className='flex h-15rem bg-red-300'>
      <div className='max-w-[1200px] h-[580px] w-[60%] m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
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
      <div className='w-[40%] h-full flex flex-col justify-center items-center'>
        <div className='w-full h-[50%] bg-blue-600'>
          <Image className='w-full h-[290px] object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp" alt="" width={1920} height={200} />
        </div>
        <div className='w-full h-[50%] bg-green-400'>
          <Image className='w-full h-[290px] object-cover' src="https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp" alt="" width={1920} height={200} />
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;