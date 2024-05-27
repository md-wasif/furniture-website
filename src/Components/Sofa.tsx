// components/Sofa.js

import React from 'react';
import Cta from './Cta';

const Sofa = ({ name, category, price, imageUrl }: any) => {
    return (
        <div className="border border-gray-300 p-4 mb-4 text-black">
            <img src={imageUrl} alt={name} className="mb-2" style={{ maxWidth: '100%' }} />
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p>Category: {category}</p>
                </div>
                <div>
                    <Cta />
                </div>
            </div>

            {/* <p>Price: {price}</p> */}
        </div>
    );
}

export default Sofa;
