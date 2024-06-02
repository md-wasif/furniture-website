"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface SofaProps {
    id: number;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
}

const Sofa: React.FC<SofaProps> = ({ id, name, category, price, imageUrl }) => {
    const router = useRouter();

    const handleProductClick = () => {
        const url = `/sofa/${id}`;
        router.push(url);
    };

    return (
        <div
            className="border border-gray-300 p-4 mb-4 text-black cursor-pointer transition-colors duration-700 hover:shadow-lg"
            onClick={handleProductClick}
        >
            <img src={imageUrl} alt={name} className="mb-2" style={{ maxWidth: '100%' }} />
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p>Category: {category}</p>
                </div>
                <div>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Sofa;

// "use client";
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';

// interface SofaProps {
//     id: number;
//     name: string;
//     category: string;
//     price: string;
//     imageUrl: string;
// }

// const Sofa: React.FC<SofaProps> = ({ id, name, category, price, imageUrl }) => {
//     const router = useRouter();
//     const pathname = usePathname();

//     const handleProductClick = () => {
//         // const queryString = new URLSearchParams({ name, category, price, imageUrl }).toString();
//         const url = `/sofa/${id}`;
//         router.push(url);
//         console.log()
//     };    

//     return (
//         <div
//             className="border border-gray-300 p-4 mb-4 text-black cursor-pointer transition-colors duration-700 hover:shadow-lg"
//             onClick={handleProductClick}
//         >
//             <img src={imageUrl} alt={name} className="mb-2" style={{ maxWidth: '100%' }} />
//             <div className="flex justify-between items-center">
//                 <div>
//                     <h2 className="text-lg font-semibold">{name}</h2>
//                     <p>Category: {category}</p>
//                 </div>
//                 <div>
//                     <p>Price: {price}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sofa;
