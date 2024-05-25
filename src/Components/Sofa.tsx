// components/Sofa.js

import React from 'react';

const Sofa = ({ name, category, price, imageUrl }:any) => {
    return (
        <div className="border border-gray-300 p-4 mb-4">
            <img src={imageUrl} alt={name} className="mb-2" style={{ maxWidth: '100%' }} />
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
        </div>
    );
}

export default Sofa;
