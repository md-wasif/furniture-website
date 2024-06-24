import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';

const ProductCard = ({ product, onRemove }: { product: any; onRemove: () => void }) => {

  useEffect(() => {
    console.log(product);
  })

  return (
    <div className="rounded-md bg-white text-black overflow-hidden shadow-md">
      <Image src={product.sofa.imageUrl} alt={product.sofa.name} className="w-full h-30 object-cover" />
      <div className="px-4 py-2 flex justify-between">
        <div >
          <h2 className="text-lg font-semibold mb-2">{product.sofa.name}</h2>
          <p className="text-gray-700">{product.sofa.category}</p>
        </div>
        <button onClick={onRemove} className="p-1 text-black rounded-md flex items-center">
          <FaTrash className="" />
        </button>
      </div>
      <div className="px-4 py-1 flex items-center justify-between">
          <p className="text-gray-700 text-sm">Price: {product.sofa.price}</p>
          <p className="text-green-600 text-sm">Discount: {product.sofa.discount}%</p>
        </div>
    </div>
  );
};

export default ProductCard;
