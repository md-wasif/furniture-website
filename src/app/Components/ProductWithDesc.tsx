import React from 'react'
import Image from 'next/image'

function ProductWithDesc() {
    return (
        <>
            <h1 className='text-xl text-center py-8'>Affordable Starting Price</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='md:w-[50%] flex md:flex-row flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg" alt="" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-2xl'>
                            Title
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt dolore doloremque quibusdam exercitationem? Nobis nulla unde tempore? Quis velit pariatur temporibus praesentium ea.
                        </p>
                    </div>
                </div>
                <div className='md:w-[50%] flex md:flex-row-reverse flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg" alt="" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-2xl'>
                            Title
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt dolore doloremque quibusdam exercitationem? Nobis nulla unde tempore? Quis velit pariatur temporibus praesentium ea.
                        </p>
                    </div>
                </div>
                <div className='md:w-[50%] flex md:flex-row flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg" alt="" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-2xl'>
                            Title
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt dolore doloremque quibusdam exercitationem? Nobis nulla unde tempore? Quis velit pariatur temporibus praesentium ea.
                        </p>
                    </div>
                </div>
                <div className='md:w-[50%] flex md:flex-row-reverse flex-col p-3'>
                    <div>
                        <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg" alt="" width={400} height={100} />
                    </div>
                    <div className='w-full flex flex-col p-5 text-left '>
                        <h1 className='text-2xl'>
                            Title
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt dolore doloremque quibusdam exercitationem? Nobis nulla unde tempore? Quis velit pariatur temporibus praesentium ea.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductWithDesc
