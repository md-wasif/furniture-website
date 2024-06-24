import React from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaPhone,FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Cta from "./Cta";

function Footer() {
    return (
        <>
            <div className="bg-gray-200 w-full flex md:flex-row flex-col justify-around items-start md:p-20 p-10">
                <div className="md:w-1/4 mb-10 md:mb-0">
                    <ul>
                        <div className='w-[10rem] mb-4'>
                            <Link href="/">
                                <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1717052012/xk8julcz94ozzbud8uhu.png" alt="Description" width={200} height={100} />
                            </Link>
                        </div>
                        <div className="flex items-center gap-3 pb-4 pl-8">
                            <a href="https://www.instagram.com/ontop_groups/"><FaInstagram className="text-2xl cursor-pointer text-black hover:text-yellow-500" /></a>
                            <a href="https://www.instagram.com/ontop_groups/"><FaFacebook className="text-2xl cursor-pointer text-black hover:text-blue-500" /></a>
                            <a href="https://www.instagram.com/ontop_groups/"><FaFacebook className="text-2xl cursor-pointer text-black hover:text-blue-500" /></a>
                        </div>
                        <div className="flex flex-col justify-center text-black">
                            <a href="tel:+1234567890" className="flex text-md"><FaPhone className="text-xl cursor-pointer text-black hover:text-blue-300" />+91- 7980412979</a><br/>
                            <a href="" className="text-md flex"><FaMapMarkerAlt className="text-xl mr-1"/>18/k, Topsia Rd, near Albela Biryani, Topsia, Kolkata, West Bengal 700039</a>
                        </div>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10 gap-5 mb-10 md:mb-0">
                    <div className="p-5 md:p-0">
                        <ul>
                            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Sofa Set
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Sofa Cum-Bed
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Wooden Sofa
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Leather Sofa
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 md:p-0">
                        <ul>
                            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/about">About</a>
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/careers">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-xl font-bold text-black flex flex-col justify-end items-end p-5 md:p-0">
                    <h1 className="p-2 text-center md:text-right">Transform Your Home with Beauty Furniture</h1>
                    <Cta />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-300">
                <h1 className=" text-gray-800 font-semibold">
                    © 2024-2025 All rights reserved | Build with ❤ by{" "}
                    <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        ontopgroups{""}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Footer;