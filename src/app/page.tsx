import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroCarousel from "./Components/HeroCarousel";
import TopCategories from "./Components/TopCategories";
import BestSeller from "./Components/BestSeller";
import NewArrival from "./Components/NewArrival";
import { LayoutGridDemo } from "./Components/LayoutGrid";
import ProductWithDesc from "./Components/ProductWithDesc";
import { InfiniteMovingCardsDemo } from "./Components/InfiniteMovingCardsDemo";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
      <Navbar />
      <HeroCarousel />
      <TopCategories />
      <BestSeller />
      <NewArrival />
      {/* BANNER */}
      <div className="w-full py-12">
        <Image className="w-full h-[20rem] object-cover" src="https://res.cloudinary.com/drszvaldf/image/upload/v1715080451/hkc19jyf2rdiuwbvqiy5.webp" alt="" width={100} height={100} />
      </div>

      <LayoutGridDemo />
      <ProductWithDesc />
      <InfiniteMovingCardsDemo />
      <Footer />
      </div>
    </>
  );
}
