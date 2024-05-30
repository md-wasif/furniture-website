import Image from "next/image";
import Navbar from "../Components/Navbar";
import HeroCarousel from "../Components/HeroCarousel";
import TopCategories from "../Components/TopCategories";
import BestSeller from "../Components/BestSeller";
import NewArrival from "../Components/NewArrival";
import { LayoutGridDemo } from "../Components/LayoutGrid";
import ProductWithDesc from "../Components/ProductWithDesc";
import { InfiniteMovingCardsDemo } from "../Components/InfiniteMovingCardsDemo";
import Footer from "../Components/Footer";
import ContactModal from "../Components/Cta";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
      <HeroCarousel />
      <TopCategories />
      <BestSeller />
      <NewArrival />
      {/* BANNER */}
      <div className="w-full py-12">
        <Image className="w-full h-[20rem] " src="https://res.cloudinary.com/dg38njbya/image/upload/v1716885829/website%20assets/BEST%20SELLER/hgos60oov3o3zd4tcwlr.png" alt="" width={100} height={100} />
      </div>

      <LayoutGridDemo />
      <ProductWithDesc />
      <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}
