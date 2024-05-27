import React from 'react';

interface imagesurl {
  imageUrl: string;
}

const images: imagesurl[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/ir7vbzdzu20hmf3sud81.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/mvefkg4irsxqaghaq6og.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/nnkjvzqglpmlkvcfh1t9.webp",
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
