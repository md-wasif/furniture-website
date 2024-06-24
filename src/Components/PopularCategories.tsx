import React from 'react';
import Image from 'next/image';

export default function PopularCategories() {
  const list = [
    {
      title: "Loveseat",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/dguqhhsrfhwqwi7p3dcf.webp",
      price: "$5.50",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Chesterfield",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/susoh5ct3roy5opsgtyh.webp",
      price: "$3.00",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Tuxedo",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/i2w14zaajb9qrtiijmij.jpg",
      price: "$10.00",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Chaise",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/yvz1ucswpotbz7tqcv72.jpg",
      price: "$5.30",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Divan",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/cxeemehtj5bh8se8jv42.jpg",
      price: "$15.70",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Futon",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp",
      price: "$8.00",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Wingback Chair",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      price: "$7.50",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Egg Chair",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      price: "$12.20",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Wingback Chair",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      price: "$7.50",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Egg Chair",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      price: "$12.20",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
  ];

  return (
    <>
      <div>
        <h1 className='text-xl text-center p-10'> Popular Categories</h1>
      </div>
      <div className='w-full flex justify-center item-center'>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 md:w-fit w-[90%]">
          {list.map((item, index) => (
            <a href={item.url} key={index} className='md:w-[15rem] '>
              <div className="overflow-hidden">
                <Image
                  alt={item.title}
                  className="object-cover w-full h-[13rem]"
                  src={item.img}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div className="p-4 text-center">
                <b>{item.title}</b>
                {/* <p className="text-default-500">{item.price}</p> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
