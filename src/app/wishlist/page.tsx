"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from '@/Components/ProductCard'; // Assuming you have a component to display product details

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  discount: string;
  imageUrl: string;
}

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const removeFromWishlist = (productId: number) => {
    // Remove product from wishlist state
    const updatedWishlist = wishlist.filter(product => product.id !== productId);
    setWishlist(updatedWishlist);
  
    // Update local storage
    const storedWishlist: number[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedStoredWishlist = storedWishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedStoredWishlist));
  
    console.log("removed");
  };
  

  useEffect(() => {
    // Retrieve wishlist from local storage
    const storedWishlist: number[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

    // Fetch product details for each wishlist item
    const fetchWishlistProducts = async () => {
      try {
        const productDetails = await Promise.all(storedWishlist.map(fetchProductDetails));
        setWishlist(productDetails.filter((product): product is Product => !!product)); // Filter out any null values
      } catch (error) {
        console.error('Error fetching wishlist products:', error);
      }
    };

    fetchWishlistProducts();
  }, []);

  const fetchProductDetails = async (productId: number): Promise<Product | null> => {
    try {
      const response = await fetch(`/api/product/${productId}`); // Corrected API endpoint URL
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID ${productId}`);
      }
      const productData: Product = await response.json();
      console.log(productData);
      return productData;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      return null; // Return null if there's an error fetching product details
    }
  };

  return (
    <div>
      <h1 className='bg-white text-center text-xl py-4 text-black'>Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="bg-white p-5 text-black grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} onRemove={() => removeFromWishlist(product.id)} />
          ))}
        </div>
      ) : (
        <p>No items in wishlist.</p>
      )}
    </div>
  );
};

export default WishlistPage;
