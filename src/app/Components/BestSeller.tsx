import React from 'react';

interface imagesurl {
  imageUrl: string;
}

const images: imagesurl[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
  },
];

function BestSeller() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="gap-4 md:gap-8 md:h-[60rem] flex flex-col md:flex-wrap justify-center items-center">
          <h1 className="text-2xl">Best Seller</h1>
          {images.map((service, index) => (
            <img key={index} className='w-[22rem]' src={service.imageUrl} alt={`Image ${index + 1}`} />
          ))}
          <a href="/service">
            <h1 className="text-2xl">Explore More...</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
