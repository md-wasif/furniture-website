"use client";
import React from 'react'
import Image from 'next/image'

function ProductWithDesc() {
    return (
        <>
            <h1 className='text-2xl text-center py-8'>Ultimate Sofa Sanctuary</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='md:w-[50%] flex md:flex-row flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716823027/website%20assets/BEST%20SELLER/r8mgrhvui6bmf6xrf5hf.jpg" alt="Leather Sofa" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-xl font-bold'>Luxurious Fabric Sofa</h1>
                        <p>Indulge in luxury with our Luxurious Leather Sofa, crafted from premium leather for unmatched comfort and elegance. Experience the ultimate relaxation with this timeless piece of furniture.</p>
                    </div>
                </div>
                <div className='md:w-[50%] flex md:flex-row-reverse flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716823027/website%20assets/BEST%20SELLER/qd5srgdjsahvyju9spl0.webp" alt="Wooden Sofa" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-xl font-bold'>Classic Leather Sofa</h1>
                        <p>Bring warmth and sophistication to your home with our Classic Wooden Sofa, crafted from high-quality wood for durability and timeless appeal. Elevate your living space with this elegant addition.</p>
                    </div>
                </div>
                <div className='md:w-[50%] flex md:flex-row flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716823027/website%20assets/BEST%20SELLER/g5p5qysi7wm4xcct4eb9.avif" alt="Sofa Cumbed" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-xl font-bold'>Versatile Sofa Cum Bed</h1>
                        <p>Maximize space in your home with our Versatile Sofa Cum Bed, designed to seamlessly transition from a comfortable sofa to a cozy bed. Experience convenience and functionality without compromising on style.</p>
                    </div>
                </div>
                <div className='md:w-[50%] flex md:flex-row-reverse flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716823028/website%20assets/BEST%20SELLER/o2sgan30apseqplmu1ro.jpg" alt="Fabric Sofa" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-xl font-bold'>Comfortable Fabric Sofa</h1>
                        <p>Discover comfort and style with our Comfortable Fabric Sofa, upholstered in soft and durable fabric for a cozy seating experience. Add a touch of elegance to your living space with this inviting sofa.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductWithDesc
