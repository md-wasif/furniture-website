// components/Categories.js
import React from 'react';

const categories = [
    { name: 'Modern', imageUrl: 'https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png' },
    { name: 'Vintage', imageUrl: 'https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png' },
    { name: 'Classic', imageUrl: 'https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png' },
    // Add more categories as needed
];

const Categories = ({ onSelectCategory }:any) => {
    return (
        <div className="flex justify-center gap-4 mb-8">
            {categories.map((category, index) => (
                <div key={index} className="relative text-center cursor-pointer w-24 h-24" onClick={() => onSelectCategory(category.name)}>
                    <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white font-bold text-center py-1 rounded-b-full">
                        {category.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
