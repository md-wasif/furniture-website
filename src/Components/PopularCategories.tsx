import React from 'react';
import Image from 'next/image';

export default function PopularCategories() {
  const list = [
    {
      title: "Fabric Sofas",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/dguqhhsrfhwqwi7p3dcf.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718464111/website%20assets/Popular%20Categories/Fabric%20Sofas/Fabric_Sofa_Logo_fsa1fb.jpg",
      price: "$5.50",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Wooden Sofa",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/susoh5ct3roy5opsgtyh.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718455493/website%20assets/Popular%20Categories/Wooden%20Sofa/fabric-sofa_Mellisa-fabric-sofa_l-shape_honey_xfwmhg.jpg",
      price: "$3.00",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "L Shaped Sofa",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/i2w14zaajb9qrtiijmij.jpg",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718456498/website%20assets/Popular%20Categories/L%20Shaped%20Sofa/Fabric_Sectional_L_Shape_Sofa-Main_ges1ti.webp",
      price: "$10.00",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Chesterfield Sofa",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838015/website%20assets/leather%20sofa/style/yvz1ucswpotbz7tqcv72.jpg",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718371829/website%20assets/Popular%20Categories/Chesterfield%20Sofa/Shine_Living_Sofa_npfyve.webp",
      price: "$5.30",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Recliner Sofa",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/cxeemehtj5bh8se8jv42.jpg",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718454071/website%20assets/Popular%20Categories/Recliner%20Sofa/Leather_Recliner_Sofa_Set-Main_e4jn7w.webp",
      price: "$15.70",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Sofa Bed",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718453007/website%20assets/Popular%20Categories/Sofa%20Bed/sofa-beds_henry_ljhygv.jpg",
      price: "$8.00",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "3 Seater Sofas",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718386826/website%20assets/Popular%20Categories/3%20Seater%20Sofas/e603ef5f-48bd-477c-9f65-1925e9777ddf.097550667a374f2bf34afd9f2edee15c_nhhou5.webp",
      price: "$7.50",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "2 Seater Sofas",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718458048/website%20assets/Popular%20Categories/2%20Seater%20Sofas/3_Seater_Indigo_Blue_Wood_Leg_main_tezjij.webp",
      price: "$12.20",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Chaise Lounges",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716838014/website%20assets/leather%20sofa/style/tykvjuuvdgy2llyakiw6.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718458612/website%20assets/Popular%20Categories/Chaise%20Lounges/Chaise_Lounge_Sofa_Main_gwkihr.webp",
      price: "$7.50",
      width: 500,
      height: 300,
      url: "http://localhost:3000/sofa/1"
    },
    {
      title: "Office Sofas",
      // img: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp",
      img: "https://res.cloudinary.com/dg38njbya/image/upload/v1718457401/website%20assets/Popular%20Categories/Office%20Sofas/office_sofas_main_wexurj.webp",
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
                <p>{item.title}</p>
                {/* <p className="text-default-500">{item.price}</p> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
