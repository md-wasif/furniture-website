import React from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaPhone,FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Cta from "./Cta";

function Footer() {
    return (
        <>
            <div className="bg-gray-200 w-full flex md:flex-row flex-col justify-around items-start md:p-10 p-5">
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
                            <a href="" className="text-md flex"><FaMapMarkerAlt className="text-xl mr-1"/>18/k Topsia Road, near Albela Biryani <br></br> Kolkata, West Bengal 700039</a>
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
                                Fabric
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Sofa Cum-Bed
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Wooden Sofa
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                L Shaped Sofa
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Chesterfield Sofa 
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
                <div className="text-xl font-bold text-black flex flex-col justify-end items-center p-5 md:p-0">
                    {/* <h1 className="p-2 text-center md:text-right">Transform Your Home with Beauty Furniture</h1> */}
                    <h1 className="p-2 text-center md:text-right">Décor your home and give a new fresh look.</h1>
                    <Cta />
                </div>
            </div>
              {/* Service boxes section */}
              <div className="w-full flex flex-wrap justify-around items-center py-2 bg-gray-100">
                <div className="col-6 col-sm-6 col-md-3 mb-5">
                    <div className="srvs-item">
                        <div className="media">
                            <div className="media-left">
                                <div className="srvs-icon">
                                    <img src="https://www.royaloakindia.com/media/royaloakindia/images/delivery-truck.png" />
                                </div>
                            </div>
                            <div className="media-body">
                                <h5>Free Delivery</h5>
                                <p>When ordering from Rs. 2500.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-5">
                    <div className="srvs-item">
                        <div className="media">
                            <div className="media-left">
                                <div className="srvs-icon">
                                    <img src="https://www.royaloakindia.com/media/royaloakindia/images/delavery-icon0.png" />
                                </div>
                            </div>
                            <div className="media-body">
                                <h5>Easy RETURNS</h5>
                                <p>If goods have problems</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-5">
                    <div className="srvs-item">
                        <div className="media">
                            <div className="media-left">
                                <div className="srvs-icon">
                                    <img src="https://www.royaloakindia.com/media/royaloakindia/images/delavery-icon1.png" />
                                </div>
                            </div>
                            <div className="media-body">
                                <h5>Secure Payment</h5>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-5">
                    <div className="srvs-item">
                        <div className="media">
                            <div className="media-left">
                                <div className="srvs-icon">
                                    <img src="https://www.royaloakindia.com/media/royaloakindia/images/delavery-icon2.png" />
                                </div>
                            </div>
                            <div className="media-body">
                                <h5>9 am to 7:30 pm | 7 days</h5>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center p-4 bg-gray-300">
                <h1 className=" text-gray-800 font-semibold">
                    © 2024, Beauty Furniture | All rights reserved. | Terms & Conditions
                    {/* <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        Cancela{""}
                    </span> */}
                </h1>
            </div>
        </>
    );
}

export default Footer;