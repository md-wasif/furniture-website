"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen md:py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Comfortable Sofa</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This sofa offers a perfect blend of comfort and style, making it a
        great addition to any living room.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Modern Sectional Sofa</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A sleek and contemporary sectional sofa that provides ample seating and
        adds a modern touch to your home decor.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Luxurious Leather Sofa</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the elegance and comfort of this luxurious leather sofa,
        perfect for any sophisticated living space.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cozy Recliner Sofa</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This recliner sofa offers unmatched comfort and relaxation, ideal for
        unwinding after a long day.
      </p>
    </div>
  );
};


const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/xf5otfqo5lvbttgwx7hh.webp",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://res.cloudinary.com/dg38njbya/image/upload/v1716636850/website%20assets/premium%20sofa/cuoeygtimbhsbwso7dx2.webp",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/ir7vbzdzu20hmf3sud81.webp",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/lxhpc0wvlynik4d2mfyq.webp",
    },
  ];
  