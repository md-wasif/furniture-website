// pages/sofas.js
"use client";
import React, { useState } from 'react';
import Sofa from '@/Components/Sofa';
import Categories from '@/Components/Categories';

const sofasData = [
    { id: 1, name: 'Sofa 1', category: 'Modern', price: '$500', imageUrl: 'https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png' },
    { id: 2, name: 'Sofa 2', category: 'Vintage', price: '$700', imageUrl: 'https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png' },
    { id: 3, name: 'Sofa 3', category: 'Classic', price: '$600', imageUrl: 'https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png' },
    // Add more sofa data here
];

const SofasPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category: React.SetStateAction<string>) => {
        setSelectedCategory(category);
    };

    return (
        <div className="max-w-full mx-auto mt-8 p-10 bg-white text-black">
            <h1 className="text-2xl font-semibold mb-4 text-center">All Sofas</h1>
            <Categories onSelectCategory={handleCategoryChange} />
            <div className="mb-4 text-center">
                <label className="mr-2">Filter by Category:</label>
                <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory} className="w-fit p-2 border border-gray-300 rounded">
                    <option value="All">All</option>
                    <option value="Modern">Modern</option>
                    <option value="Vintage">Vintage</option>
                    <option value="Classic">Classic</option>
                </select>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {sofasData
                    .filter((sofa) => selectedCategory === 'All' || sofa.category === selectedCategory)
                    .map((sofa) => (
                        <Sofa key={sofa.id} {...sofa} />
                    ))}
            </div>
        </div>
    );
};

export default SofasPage;
