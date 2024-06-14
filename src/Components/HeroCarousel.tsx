"use client";
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='max-w-[1200px] h-[580px] w-full m-auto py-3rem px-4 md:mt-10 md:mb-10 mt-8 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
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
  );
}

export default HeroCarousel;