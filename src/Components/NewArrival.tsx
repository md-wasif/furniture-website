"use client";
import React, { useEffect, useState } from 'react';
import Sofa from './Sofa';
import BestSellerSofaComp from './BestSellerProductComponent';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Sofa{
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  url: string;
  discount: string;
  tag: string;
}

export default function NewArrival() {
  const [list,setList]= useState<Sofa[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await fetch('api/products');
        const data = await response.json();
        setList(data.sofa);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'  // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'  // Smooth scrolling
      });
    }
  };
  return (
    <div className="m-auto w-[90%] py-10 relative">
      <h1 className='text-xl text-center mb-6'>New Arrival</h1>
      <div className="flex overflow-x-auto space-x-4 p-4" ref={scrollRef}
        style={{
          msOverflowStyle: 'none',  // IE and Edge
          scrollbarWidth: 'none',   // Firefox
        }}
      >
        {list && list
          .filter((sofa)=> sofa.tag==='New Arrival')
          .map((sofa) => (
          <BestSellerSofaComp
            key={sofa.id}
            id={sofa.id}
            name={sofa.name}
            category={sofa.category}
            price={sofa.price}
            imageUrl={sofa.imageUrl}
            discount={sofa.discount}
            tag={sofa.tag}
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 outline-none focus:outline-none z-50"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 outline-none focus:outline-none z-50"
        onClick={scrollRight}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
