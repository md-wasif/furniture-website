"use client";
import React from 'react';
import Sofa from './Sofa';
import BestSellerSofaComp from './BestSellerProductComponent';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function BestSeller() {
  const list = [
    {
      id: 1,
      name: "Loveseat",
      category: "fabric",
      price: "$5.50",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/dguqhhsrfhwqwi7p3dcf.webp",
      url: "http://localhost:3000/sofa/1",
      discount: "30%"
    },
    {
      id: 2,
      name: "Chesterfield",
      category: "leather",
      price: "$3.00",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/susoh5ct3roy5opsgtyh.webp",
      url: "http://localhost:3000/sofa/2",
      discount: "20%"
    },
    {
      id: 3,
      name: "Tuxedo",
      category: "leather",
      price: "$10.00",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/i2w14zaajb9qrtiijmij.jpg",
      url: "http://localhost:3000/sofa/3",
      discount: "15%"
    },
    {
      id: 4,
      name: "Chaise",
      category: "leather",
      price: "$5.30",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/yvz1ucswpotbz7tqcv72.jpg",
      url: "http://localhost:3000/sofa/4",
      discount: "10%"
    },
    {
      id: 5,
      name: "Divan",
      category: "leather",
      price: "$15.70",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/cxeemehtj5bh8se8jv42.jpg",
      url: "http://localhost:3000/sofa/5",
      discount: "25%"
    },
    {
      id: 6,
      name: "Futon",
      category: "sofacumbed",
      price: "$8.00",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp",
      url: "http://localhost:3000/sofa/6",
      discount: "5%"
    },
    {
      id: 7,
      name: "Wingback Chair",
      category: "leather",
      price: "$7.50",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      url: "http://localhost:3000/sofa/7",
      discount: "20%"
    },
    {
      id: 8,
      name: "Egg Chair",
      category: "leather",
      price: "$12.20",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      url: "http://localhost:3000/sofa/8",
      discount: "15%"
    },
    {
      id: 9,
      name: "Wingback Chair",
      category: "leather",
      price: "$7.50",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      url: "http://localhost:3000/sofa/9",
      discount: "10%"
    },
    {
      id: 10,
      name: "Egg Chair",
      category: "leather",
      price: "$12.20",
      imageUrl: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      url: "http://localhost:3000/sofa/10",
      discount: "20%"
    },
  ];


  const scrollRef = useRef<HTMLDivElement>(null);

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
            <h1 className='text-xl text-center mb-6'> Best Seller</h1>
            <div className="flex overflow-x-auto space-x-4 p-4" ref={scrollRef}>
                {list.map((sofa) => (
                    <BestSellerSofaComp
                        key={sofa.id}
                        id={sofa.id}
                        name={sofa.name}
                        category={sofa.category}
                        price={sofa.price}
                        imageUrl={sofa.imageUrl}
                        discount={sofa.discount}
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
