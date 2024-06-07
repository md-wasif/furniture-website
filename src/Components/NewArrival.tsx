import React from 'react';

export default function NewArrival() {
  const list = [
    {
      title: "Loveseat",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/dguqhhsrfhwqwi7p3dcf.webp",
      price: "$5.50",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Chesterfield",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/susoh5ct3roy5opsgtyh.webp",
      price: "$3.00",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Tuxedo",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/i2w14zaajb9qrtiijmij.jpg",
      price: "$10.00",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Chaise",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/yvz1ucswpotbz7tqcv72.jpg",
      price: "$5.30",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Divan",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/cxeemehtj5bh8se8jv42.jpg",
      price: "$15.70",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Futon",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp",
      price: "$8.00",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Wingback Chair",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      price: "$7.50",
      url:"http://localhost:3000/sofa/1"
    },
    {
      title: "Egg Chair",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      price: "$12.20",
      url:"http://localhost:3000/sofa/1"
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
            <a href={item.url} key={index} className='bg-blue-100 rounded-xl w-[20rem]'>
              <div className="overflow-hidden rounded-t-xl">
                <img
                  alt={item.title}
                  className="object-cover w-full h-[15rem]"
                  src={item.img}
                />
              </div>
              <div className="p-4">
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
