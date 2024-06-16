"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface SofaProps {
    id: number;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    discount: string;
}

const Sofa: React.FC<SofaProps> = ({ id, name, category, price, imageUrl, discount }) => {
    const router = useRouter();

    const handleProductClick = () => {
        const url = `/sofa/${id}`;
        router.push(url);
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
            <div className='relative overflow-hidden' >
                <img src={imageUrl} alt={name} className=" w-fit h-fit object-cover rounded-xl" style={{ maxWidth: '100%' }} />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to view
                </div>
            </div>

            <div className="flex flex-col justify-between items-start p-2">
                <div className='w-full border-b border-black border-b-1 py-1'> 
                    <h2 className="text-lg font-light">{name}</h2>
                    {/* <p>Category: {category}</p> */}
                </div>
                <span className='text-sm text-green-500 py-1'>Today's Deal</span>
                <div>
                    <p className="text-lg font-bold flex items-center">
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
