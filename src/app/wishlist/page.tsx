"use client";
import React, { useState, useEffect } from 'react';
import Sofa from '@/Components/Sofa'; // Assuming you have a component to display product details

interface ProductOverview {
  size: string;
  material: string;
  dimensions: string;
  weight: string;
  warranty: string;
}

interface SofaProduct {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  imageUrl: string;
  images: string[];
  discount: string;
  tag: string;
  ProductOverview: ProductOverview[];
}

interface Product {
  sofa: SofaProduct;
}

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<(SofaProduct | null)[]>([]);

  const fetchProductDetails = async (productId: number): Promise<SofaProduct | null> => {
    try {
      const response = await fetch(`/api/product/${productId}`); // Corrected API endpoint URL
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID ${productId}`);
      }
      const productData: Product = await response.json();
      // Return the sofa property directly
      return productData.sofa;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      return null; // Return null if there's an error fetching product details
    }
  };

  useEffect(() => {
    // Retrieve wishlist from local storage
    const storedWishlist: number[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

    // Fetch product details for each wishlist item
    const fetchWishlistProducts = async () => {
      try {
        const productDetails = await Promise.all(storedWishlist.map(fetchProductDetails));
        setWishlist(productDetails); // Set all values including nulls
        console.log("PD", productDetails);
        console.log("WL", wishlist);
      } catch (error) {
        console.error('Error fetching wishlist products:', error);
      }
    };

    fetchWishlistProducts();
  }, []);

  return (
    <div>
      <h1 className='bg-white text-center text-xl py-4 text-black'>Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="bg-white p-5 text-black grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product, index) =>
            product ? <Sofa key={product.id} {...product} /> : <div key={index}>Product not found</div>
          )}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-[30rem] bg-white'>
          <p>Your Wishlist is Empty!!!</p>
          ☹️
          <a
              href="/sofa"
              className="flex items-center justify-center px-4 py-2 text-lg font-semibold text-white rounded-md bg-black hover:bg-white hover:text-black hover:border  mb-2"
            >
              Explore Now
            </a>
          </div>
      )}
    </div>
  );
};

export default WishlistPage;
