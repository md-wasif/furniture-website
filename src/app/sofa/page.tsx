// pages/sofas.js
"use client";
import React, { useEffect, useState } from 'react';
import Sofa from '@/Components/Sofa';
import Categories from '@/Components/Categories';

interface Sofa {
    id: number;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    url: string;
    discount: string;
    tag: string;
}

const SofasPage = () => {
    const [list, setList] = useState<Sofa[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category: React.SetStateAction<string>) => {
        setSelectedCategory(category);
        console.log(category);
    };

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        console.log(data);
        setList(data.sofa);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);


    return (
        <div className="max-w-full mx-auto mt-8 p-10 bg-white text-black">
            <h1 className="text-2xl font-semibold mb-4 text-center">All Sofas</h1>
            <Categories onSelectCategory={handleCategoryChange} />
            <div className="mb-4 text-center">
                <label className="mr-2">Filter by Category:</label>
                <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory} className="w-fit p-2 border border-gray-300 rounded">
                    <option value="All">All</option>
                    <option value="Fabric">Fabric</option>
                    <option value="Wooden">Wooden</option>
                    <option value="Leatherette">Leatherette</option>
                    <option value="Leather">Leather</option>
                    <option value="Sofa Bed">Sofa Bed</option>
                    <option value="Sofa Set">Sofa Set</option>
                    <option value="Corner Sofa">Corner Sofa</option>
                    <option value="Premium Sofa">Premium Sofa</option>
                </select>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                {list && list
                    .filter((sofa) => selectedCategory === 'All' || sofa.category === selectedCategory)
                    .map((sofa) => (
                        <Sofa
                            key={sofa.id}
                            id={sofa.id}
                            name={sofa.name}
                            category={sofa.category}
                            price={sofa.price}
                            imageUrl={sofa.imageUrl}
                            discount={sofa.discount}
                            tag= {sofa.tag}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SofasPage;


