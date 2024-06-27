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
        <section className="my-8 px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 p-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto">
                  <img src="https://ahdfurniture.com/wp-content/uploads/2024/03/Group-374.svg" alt="Home Decor" width={60} height={60} />
                </div>
                <h4 className="text-lg font-semibold mt-4">5 Years Warranty</h4>
                <p className="mt-2">Enjoy Peace of Mind with 5 Years Warranty</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto">
                  <img src="https://ahdfurniture.com/wp-content/uploads/2024/03/Group-376.svg" alt="Best Prices" width={60} height={60} />
                </div>
                <h4 className="text-lg font-semibold mt-4">Best Prices</h4>
                <p className="mt-2">We provide the best prices, guaranteed every time.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto">
                  <img src="https://ahdfurniture.com/wp-content/uploads/2024/03/Group-373.svg" alt="Happy Customers" width={60} height={60} />
                </div>
                <h4 className="text-lg font-semibold mt-4">100,000 +</h4>
                <p className="mt-2">Happy Customers Trusting Us for Excellence</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto">
                  <img src="https://ahdfurniture.com/wp-content/uploads/2024/03/Group-372.svg" alt="Free Shipping" width={60} height={60} />
                </div>
                <h4 className="text-lg font-semibold mt-4">Free Shipping</h4>
                <p className="mt-2">Enjoy Free Shipping on every order you make</p>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="flex justify-center items-center">
          <Image src="https://res.cloudinary.com/dg38njbya/image/upload/v1719140299/website%20assets/Delivery/Delivery-Strip-Mobile_jzpobh.png" className="w-3/5" alt="" width={200} height={50} />
        </div> */}
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
