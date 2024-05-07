"use client";
import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function NewArrival() {
  const list = [
    {
      title: "Orange",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://res.cloudinary.com/drszvaldf/image/upload/v1714071704/samples/ecommerce/analog-classic.jpg",
      price: "$12.20",
    },
  ];


  return (
    <>
      <div >
          <h1 className='text-xl text-center p-4'> New Arrival</h1>
        </div>
      <div className='w-full flex justify-center item-center'>
        <div className="w-fit gap-1 grid grid-cols-1 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card className='bg-[#eb7515] rounded-xl w-fit ' shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[15rem] w-[20rem] rounded rounded-xl"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
