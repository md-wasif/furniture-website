"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


async function getProductDetailsUsingId(productId: string) {
  const response = await fetch(`http://localhost:3000/api/product/${productId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }

  return response.json();
}

export default function SofaDetails() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        console.log("No ID found in URL");
        return;
      }

      try {
        console.log(`Fetching product details for ID: ${id}`);
        const data = await getProductDetailsUsingId(id);
        console.log('Fetched product data:', data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const images = product?.sofa?.images ?? [];

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setTimeout(() => {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, images.length]);

  if (!product) {
    return <main className='flex justify-center items-center'>Loading...</main>;
  }

  const whatsappShareUrl = `https://wa.me/?text=Check%20out%20this%20sofa:%20${window.location.href}`;

  return (
    <main className="flex items-center justify-center p-5 bg-white">
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="relative flex-1 p-5">
          <div className={`w-full flex bg-red-200 justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl`}>
            {images.map((elem: string, idx: number) => (
              <div
                key={idx}
                className={`${idx === activeImage ? "block w-full h-fit-content object-cover transition-all duration-500 ease-in-out" : "hidden"}`}
              >
                <Image
                  src={elem}
                  alt={`Sofa image ${idx + 1}`}
                  width={200}
                  height={100}
                  className="w-full h-fit object-cover md:rounded-2xl"
                />
              </div>
            ))}
          </div>
          <div className='absolute inset-0 items-center text-black flex justify-between p-2 gap-3'>
            <button className='bg-gray-200 p-3 rounded-full flex justify-center items-center' onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}> <FaChevronLeft/></button>
            <button className='bg-gray-200 p-3 rounded-full flex justify-center items-center' onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}><FaChevronRight/></button>
          </div>
        </div>

        <div className="flex-1 p-5 flex flex-col justify-between text-black">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.sofa.name}</h1>
            <p className='mb-2 text-md'>{product.sofa.description}</p>
            <p className="mb-2 text-lg font-bold">Category: <span className='font-light'>{product.sofa.category}</span></p>
            <p className="mb-4 text-lg font-bold">
              Price:
              <span className="ml-2">
                {product.sofa.price && !isNaN(parseFloat(product.sofa.price.replace(/[^0-9.]/g, ''))) ?
                  (parseFloat(product.sofa.price.replace(/[^0-9.]/g, '')) * 0.7).toFixed(2) + '  '
                  : 'Invalid price'}
              </span>
              <span className="line-through font-light text-sm">{product.sofa.price}</span> {' '}
              <span className='py-1 px-2 rounded-lg bg-orange-500 text-white text-sm'>{' '}30%</span>
            </p>
          </div>

          <div>
            <a
              href="/checkout"
              className="flex items-center justify-center px-4 py-2 text-lg font-semibold text-white rounded-md bg-blue-900 hover:bg-orange-600 mb-2"
            >
              Order Now
            </a>
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 text-lg font-semibold bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              <FaWhatsapp className="mr-2" /> Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
