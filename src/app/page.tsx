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
import VideoPlayer from "@/Components/VideoPlayer";
import PopularCategories from "@/Components/PopularCategories";
import WhatsAppButton from "@/Components/WhatsAppButton";
import CallNowButton from "@/Components/CallNowButton";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <WhatsAppButton />
        <CallNowButton />

        <HeroCarousel />
        {/* <TopCategories /> */}
        <br />
        <div className="flex justify-center items-center">
          <Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1719140299/website%20assets/Delivery/Delivery-Strip-Mobile_jzpobh.png" className="w-3/5" alt="" width={200} height={50} />
        </div>
        <br />
        <PopularCategories />
        {/* BANNER */}
        <div className="w-full my-12 bg-gray-100">
          <Image
            className="w-full object-cover"
            src="https://res.cloudinary.com/dg38njbya/image/upload/v1716885829/website%20assets/BEST%20SELLER/hgos60oov3o3zd4tcwlr.png"
            alt="Banner Image"
            width={2140}
            height={200}
          />
        </div>
        <BestSeller />
        <VideoPlayer />
        <NewArrival />
        <LayoutGridDemo />
        <ProductWithDesc />
        <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}
