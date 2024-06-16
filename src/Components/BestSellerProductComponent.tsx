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

const BestSellerSofaComp: React.FC<SofaProps> = ({ id, name, category, price, imageUrl, discount }) => {
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
            className="mb-4 text-black cursor-pointer transition-colors duration-700 w-full h-full"
            onClick={handleProductClick}
        >
            <div className="relative w-[19rem] h-[18rem] rounded-xl overflow-hidden">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {discount} Off
                </div>
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to view
                </div>
                <div className="absolute bottom-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
                    Best Seller
                </div>
            </div>
            <div className="flex flex-col justify-between items-start p-2">
                <div className=''>
                    <h2 className="text-lg font-light">{name}</h2>
                    <p className="text-sm">{category}</p>
                </div>

                <div className=''>
                    <p className="text-lg font-semibold">
                        <span className="mr-1">
                            {calculateDiscountedPrice(price, discount) + '  '}
                        </span>
                        <span className="line-through font-light text-sm">{price}</span>
                    </p>
                    <p className='text-xs'>Incl. of all Taxes</p>
                </div>
            </div>
        </div>
    );
};

export default BestSellerSofaComp;
