"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';

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

  if (!product) {
    return <main className='flex justify-center items-center'>Loading...</main>;
  }

  const whatsappShareUrl = `https://wa.me/?text=Check%20out%20this%20sofa:%20${window.location.href}`;

  const calculateDiscountedPrice = (price: string, discount: string): string => {
    if (!price || isNaN(parseFloat(price.replace(/[^0-9.]/g, '')))) {
        return 'Invalid price';
    }

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    const numericDiscount = parseFloat(discount.replace('%', '')) / 100;

    const discountedPrice = numericPrice * (1 - numericDiscount);
    return discountedPrice.toFixed(2);
};

  return (
    <main className="flex items-center justify-center p-5 bg-white">
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 p-5">
          <img src={product.sofa.imageUrl} alt={product.sofa.name} className="w-full h-auto rounded-lg" />
        </div>

        <div className="flex-1 p-5 flex flex-col justify-between text-black">
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
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 text-lg font-semibold bg-white-500 text-green-500 rounded-md border border-black hover:bg-green-600 hover:text-white"
            >
              <FaWhatsapp className="mr-2" /> Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
