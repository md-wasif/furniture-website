"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-xl">
        Testimonials
      </h1>
      <p>They have already used our products & services</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "The selection was diverse, catering to various tastes and styles. The quality of the sofa exceeded my expectations, and the staff provided excellent assistance throughout the process. From choosing the fabric to arranging delivery, their service was top-notch.",
    name: "Rittick Dutta",
    title: "Extremely Satisfied Customer",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Very good quality products available. All furniture are very good quality. Sofa designs are very nice. Awesome design.",
    name: "Kazi Zulfikar Ali",
    title: "Impressed Customer",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "A fabulous place where you can purchase your dream furniture for your home at affordable prices. Do get experienced guys!",
    name: "Aditi Mondal",
    title: "Highly Recommended",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Nice place, very good quality products available.",
    name: "টবে জৈবিক চাষ",
    title: "Satisfied Customer",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Great product, and great behavior. Overall perfect place for buying furniture.",
    name: "Sk Ekramul",
    title: "Happy Shopper",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Very nice place to buy something for home, I was amazed to see the range they have in store and I personally recommended this store.",
    name: "Neha Noor",
    title: "Delighted Customer",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Best sofas and more comfort at very low prices.",
    name: "Wasif",
    title: "Highly Satisfied Customer",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Superb collection & very reasonable price. The shopping experience was delightful.",
    name: "Abinash Jana",
    title: "Impressed Shopper",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Excellent products collection... Their range is unparalleled.",
    name: "Dipankar Mondal",
    title: "Satisfied Buyer",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  {
    quote: "Comfortable and budget-friendly. And also quality was good. Will definitely come back for more.",
    name: "Haimanti Piyada",
    title: "Satisfied Shopper",
    image: "https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp", // Replace with actual image URL
  },
  // Add more testimonials here
];
