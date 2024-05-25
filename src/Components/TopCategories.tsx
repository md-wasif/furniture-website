import React from 'react'
import Image from 'next/image'

function TopCategories() {
    return (
        <>
            <div className='w-full m-auto p-3 flex flex-col justify-center item-center'>
                <h1 className='text-xl text-center p-3'>Top Categories</h1>
                <ul className='flex flex-wrap justify-center'>
                    <li><Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TopCategories