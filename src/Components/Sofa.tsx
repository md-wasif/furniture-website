"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

interface SofaProps {
    id: number;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    discount: string;
    tag: string;
}

const Sofa: React.FC<SofaProps> = ({ id, name, category, price, imageUrl, discount, tag }) => {
    const router = useRouter();

    const [isWishlisted, setIsWishlisted] = useState(false);
    const [animateHeart, setAnimateHeart] = useState(false);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (wishlist.includes(id)) {
            setIsWishlisted(true);
        }
    }, [id]);

    const handleProductClick = () => {
        const url = `/sofa/${id}`;
        router.push(url);
    };

    const handleWishlistClick = (e: any) => {
        e.stopPropagation();
        setAnimateHeart(true);
        setTimeout(() => setAnimateHeart(false), 300);

        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

        if (isWishlisted) {
            wishlist = wishlist.filter((itemId: number) => itemId !== id);
        } else {
            wishlist.push(id);
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        setIsWishlisted(!isWishlisted);
    };

    const calculateDiscountedPrice = (price: string, discount: string): string => {
        if (!price || isNaN(parseFloat(price.replace(/[^0-9.]/g, '')))) {
            return 'Invalid price';
        }

        const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
        const numericDiscount = parseFloat(discount.replace('%', '')) / 100;

        const discountedPrice = numericPrice * (1 - numericDiscount);
        return discountedPrice.toFixed(2);
    };
    return (
        <div
            className="mb-4 text-black cursor-pointer transition-colors duration-700"
            onClick={handleProductClick}
        >
            <div className='relative bg-red-300' >
                <div className="overflow-hidden cursor-pointer" >
                    <img src={imageUrl} alt={name} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to view
                </div>
                {tag && (
                    <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
                        {tag}
                    </div>
                )}
                <div
                    className={`absolute top-2 right-2 text-black ${animateHeart ? 'animate-pop' : ''}`}
                    onClick={handleWishlistClick}
                >
                    {isWishlisted ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
                </div>
            </div>

            <div className="flex flex-col justify-between items-start p-2">
                <div className='w-full border-b border-black border-b-1 py-1'>
                    <h2 className="text-lg font-light">{name}</h2>
                    {/* <p>Category: {category}</p> */}
                </div>
                <span className='text-sm text-green-500 py-1'>Today's Deal</span>
                <div>
                    <p className="text-lg font-bold flex items-center">₹
                        <span className="mr-1">
                            {calculateDiscountedPrice(price, discount) + '  '}
                        </span>
                        <span className="line-through font-light text-sm">{price}</span>
                        <span className='font-medium text-green-500 ml-2'>{discount} % off</span>
                        {/* <span className='py-1 px-2 rounded-lg bg-orange-500 text-white text-sm'>{' '}30%</span> */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sofa;
