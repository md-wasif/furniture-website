import React from 'react'
import Image from 'next/image'

function TopCategories() {
    return (
        <>
            <div className='w-full m-auto p-3 flex flex-col justify-center item-center'>
                <h1 className='text-xl text-center p-3'>Top Categories</h1>
                <ul className='flex flex-wrap justify-center'>
                    <li><Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716810704/website%20assets/cover%20page/rdorbc4cufn6snbrrn2y.webp" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716811103/website%20assets/tdrmvi3gqyyeaug5erdj.webp" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716810704/website%20assets/cover%20page/rgy6teslutvbmjpdjelf.webp" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716810704/website%20assets/cover%20page/nxaxdxfyz9amw3exylbo.webp" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716810704/website%20assets/cover%20page/peiszjvlrbk8xrrnn4sq.webp" alt="Description" width={200} height={100} />
                    </li>
                    <li><Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1716810703/website%20assets/cover%20page/ggyonkxafiaafwm4mozx.webp" alt="Description" width={200} height={100} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TopCategories