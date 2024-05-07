import React from 'react';

export default function NewArrival() {
  const list = [
    {
      title: "Orange",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1715094510/v3gw8u0q0jeee4dufife.jpg",
      price: "$12.20",
    },
  ];

  return (
    <>
      <div>
        <h1 className='text-xl text-center p-4'> New Arrival</h1>
      </div>
      <div className='w-full flex justify-center item-center'>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {list.map((item, index) => (
            <div className='bg-blue-100 rounded-xl w-[20rem]' key={index}>
              <div className="overflow-hidden rounded-t-xl">
                <img
                  alt={item.title}
                  className="object-cover w-full h-[15rem]"
                  src={item.img}
                />
              </div>
              <div className="p-4">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
