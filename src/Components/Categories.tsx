// components/Categories.js
import React from 'react';

const categories = [
    { id: 1, name: 'Sofa 1', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp' },
    { id: 2, name: 'Sofa 1', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636864/website%20assets/wooden%20sofa/irkwcbdeo8txaqwjzj91.webp' },
    { id: 3, name: 'Sofa 1', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636843/website%20assets/leatherette%20sofa/dq5k0ocxcc5c3xbkh0d3.webp' },
    { id: 4, name: 'Sofa 1', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/xf5otfqo5lvbttgwx7hh.webp' },
    { id: 5, name: 'Sofa 1', category: 'Sofa Bed', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/j5i3ymylfudkbextcww9.webp' },
    { id: 6, name: 'Sofa 1', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636853/website%20assets/sofa%20set/zmhfx18omex1ek6a2tm5.webp' },
    { id: 7, name: 'Sofa 1', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/nnkjvzqglpmlkvcfh1t9.webp' },
    { id: 8, name: 'Sofa 1', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636850/website%20assets/premium%20sofa/eggk9uoxp464ekepcham.webp' },
    // Add more categories as needed
];

const Categories = ({ onSelectCategory }:any) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category, index) => (
            <div 
                key={index} 
                className="relative text-center cursor-pointer w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36" 
                onClick={() => onSelectCategory(category.category)}
            >
                <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110" 
                />
                <div className="absolute bottom-0 w-full text-black font-bold text-center py-1 bg-white bg-opacity-75 rounded-b-full">
                    {category.category}
                </div>
            </div>
        ))}
    </div>    
    );
};

export default Categories;
