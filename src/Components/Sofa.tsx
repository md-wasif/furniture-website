"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Image from "next/image";

interface SofaProps {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  discount: string;
  tag: string;
}

const Sofa: React.FC<SofaProps> = ({
  id,
  name,
  category,
  price,
  imageUrl,
  discount,
  tag,
}) => {
  const router = useRouter();

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    // console.log("Stored",storedWishlist);
    // console.log("Id",id);
    if (storedWishlist.includes(id)) {
      setIsWishlisted(true);
    }
    setWishlist(storedWishlist);
  }, [id]);

  const handleProductClick = () => {
    const url = `/sofa/${id}`;
    router.push(url);
  };

  const handleWishlistClick = (e: any) => {
    e.stopPropagation();
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 300);

    // Determine if the item is currently wishlisted
    const isCurrentlyWishlisted = wishlist.includes(id);

    // Update the wishlist state using the functional form
    setWishlist((prevWishlist) => {
      let updatedWishlist = [...prevWishlist];

      if (isCurrentlyWishlisted) {
        // Remove the item from the wishlist
        updatedWishlist = updatedWishlist.filter(
          (itemId: number) => itemId !== id
        );
      } else {
        // Add the item to the wishlist
        updatedWishlist.push(id);
      }

      // Save the updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return updatedWishlist;
    });

    // Update the isWishlisted state
    setIsWishlisted(!isCurrentlyWishlisted);
  };

  const calculateDiscountedPrice = (
    price: string,
    discount: string
  ): string => {
    if (!price || isNaN(parseFloat(price.replace(/[^0-9.]/g, "")))) {
      return "Invalid price";
    }

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
    const numericDiscount = parseFloat(discount.replace("%", "")) / 100;

    const discountedPrice = numericPrice * (1 - numericDiscount);
    return discountedPrice.toFixed(2);
  };

  return (
    <div
      className="mb-4 text-black cursor-pointer transition-colors duration-700"
      onClick={handleProductClick}
    >
      <div className="relative bg-gray-200">
        <div className="overflow-hidden cursor-pointer">
          <Image src={imageUrl} alt={name} width={600} height={100} className="w-full md:h-[20rem] h-[15rem] object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          Click to view
        </div>
        {tag && (
          <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
            {tag}
          </div>
        )}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

          <div
            className={`absolute top-2 right-2 rounded-full text-black ${
              animateHeart ? "animate-pop" : ""
            } group`}
            onClick={handleWishlistClick}
          >
            {/* <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            {isWishlisted ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
          </div> */}
            {isWishlisted ? (
              <FaHeart size={20} color="red" />
            ) : (
              <FaRegHeart size={20} />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start p-1">
        <div className="w-full border-b border-gray border-b-1 py-1">
          <h2 className="text-lg font-light">{name}</h2>
        </div>
        <span className="text-sm text-green-500 py-1">Today Deal</span>
        <div>
          <p className="text-lg font-bold flex items-center">
            ₹
            <span className="mr-1">
              {calculateDiscountedPrice(price, discount) + "  "}
            </span>
            <span className="line-through font-light text-sm">{price}</span>
            <span className="font-medium text-green-500 ml-2">
              {discount} % off
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sofa;
