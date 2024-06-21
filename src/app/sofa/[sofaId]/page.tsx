"use client";
import { usePathname } from 'next/navigation';
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

async function getProductDetailsUsingId(productId: Number) {
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
  const num = pathname.split('/').pop() || "default-value";
  const id: number = parseInt(num, 10);  
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.includes(id)) {
      setIsWishlisted(true);
    }
  }, [id]);


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

  const calculateDiscountedPrice = (price: string, discount: string): string => {
    if (!price || isNaN(parseFloat(price.replace(/[^0-9.]/g, '')))) {
      return 'Invalid price';
    }

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    const numericDiscount = parseFloat(discount.replace('%', '')) / 100;

    const discountedPrice = numericPrice * (1 - numericDiscount);
    return discountedPrice.toFixed(2);
  };

  const whatsappShareUrl = `https://wa.me/?text=Check%20out%20this%20sofa:%20${window.location.href}`;

  const handleWishlistClick = (e: any) => {
    e.stopPropagation();
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 300);

    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    console.log("type of Id",typeof id);

    if (isWishlisted) {
      wishlist = wishlist.filter((itemId: Number) => itemId !== id);
      console.log(id);
    } else {
      wishlist.push(id);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setIsWishlisted(!isWishlisted);
  };

  return (
    <main className="w-full h-full flex items-center justify-center p-5 bg-white">
      <div className="flex flex-col md:flex-row max-w-8xl max-h-8xl w-full h-full bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-3/5 flex-1 p-5">
          <div className="w-full flex flex-col relative bg-gray-100 justify-end items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl">
            {/* Main image slider */}
            {images.map((elem: string, idx: number) => (
              <div
                key={idx}
                className={`${idx === activeImage ? "block w-full h-fit-content object-cover transition-all duration-500 ease-in-out" : "hidden"}`}
              >
                <Image
                  src={elem}
                  alt={`Sofa image ${idx + 1}`}
                  width={400}
                  height={150}
                  className="w-full h-fit object-cover md:rounded-2xl"
                />
              </div>
            ))}
            <div className='absolute inset-x-0 md:top-[12rem] flex justify-between items-center p-2 gap-3'>
              {/* Previous button */}
              <button className='bg-gray-200 p-3 rounded-full flex justify-center items-center' onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}>
                <FaChevronLeft />
              </button>

              {/* Next button */}
              <button className='bg-gray-200 p-3 rounded-full flex justify-center items-center' onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
                <FaChevronRight />
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto">
                {images.map((elem: string, idx: number) => (
                  <div key={idx} className="cursor-pointer">
                    <Image
                      src={elem}
                      alt={`Sofa image ${idx + 1}`}
                      width={100}
                      height={75}
                      className="object-cover rounded-lg"
                      onClick={() => setActiveImage(idx)}
                    />
                  </div>
                ))}
              </div>
          </div>

        </div>

        <div className="flex-1 p-5 flex flex-col justify-start text-black">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.sofa.name}</h1>
            <p className='mb-2 text-md'>{product.sofa.description}</p>
            <p className="mb-2 text-lg font-bold">Category: <span className='font-light'>{product.sofa.category}</span></p>
            <p className="mb-4 text-lg font-bold">
              Price:
              <span className="mr-1">
                {calculateDiscountedPrice(product.sofa.price, product.sofa.discount) + '  '}
              </span>
              <span className="line-through font-light text-sm">{product.sofa.price}</span> {' '}
              <span className='py-1 px-2 rounded-lg bg-green-500 text-white text-sm'>{product.sofa.discount}% Off</span>
            </p>
          </div>


          <div>
            <a
              href="/checkout"
              className="flex items-center justify-center px-4 py-2 text-lg font-semibold text-white rounded-md bg-blue-900 hover:bg-green-600 mb-2"
            >
              Order Now
            </a>
            <div className='flex md:flex-row flex-col justify-center items-center'>
              <div
                className={`w-full flex items-center justify-center md:mr-1 md:mb-0 mb-2 px-4 py-2 font-semibold rounded-md border ${isWishlisted ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' : 'bg-white text-red-500 border-black hover:bg-red-500 hover:text-white'} ${animateHeart ? 'animate-pop' : ''}`}
                onClick={handleWishlistClick}
              >
                {isWishlisted ? (
                  <div className='flex justify-center items-center'>
                    <span className='mr-2'>Added to Wishlist</span>
                    <FaHeart size={20} color="white" />
                  </div>
                ) : (
                  <div className='flex justify-center items-center'>
                    <span className='mr-2'>Add to Wishlist</span>
                    <FaRegHeart size={20} />
                  </div>
                )}
              </div>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-2 font-semibold bg-white-500 text-green-500 rounded-md border border-black hover:bg-green-600 hover:text-white"
              >
                <FaWhatsapp className="mr-2" /> Share on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h1 className='text-lg font-bold p-2 border-b border-black'>Product Overview</h1>
            {product?.sofa?.ProductOverview?.map((overview: { size: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; material: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; dimensions: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; weight: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; warranty: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
              <div className='p-2' key={index}>
              <p className="mb-2">Size: {overview.size}</p>
              <p className="mb-2">Material: {overview.material}</p>
              <p className="mb-2">Dimensions: {overview.dimensions}</p>
              <p className="mb-2">Weight: {overview.weight}</p>
              <p className="mb-2">Warranty: {overview.warranty}</p>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
