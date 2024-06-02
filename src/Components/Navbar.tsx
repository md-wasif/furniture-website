"use client";
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState<boolean>(true);
    const [active, setActive] = useState<boolean>(true);

    return (
        <div>
            <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50">
                <div className="justify-between px-4 mx-auto lg:w-full md:items-center md:flex md:flex-col md:px-0">
                    <div>
                        <div className="flex md:flex-col items-center justify-between md:py-0 py-1 md:py-1 md:block">
                            {/* LOGO */}
                            <div className='w-[9rem]'>
                                <Link href="/">
                                    <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1717052012/xk8julcz94ozzbud8uhu.png" alt="Description" width={200} height={100} />
                                </Link>
                            </div>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? <FiX size={30} /> : <FiMenu size={30} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='transparent w-full border-b border-black'>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul
                                className="h-screen text-black md:h-fit items-center justify-center md:flex relative"
                            >
                                <li className="pb-3 text-md py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#cf6f4c]  border-purple-900  md:hover:text-[#cf6f4c] md:hover:bg-transparent">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        <div>Home</div>
                                    </Link>
                                </li>
                                <li className="pb-3 text-md py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#cf6f4c]  border-purple-900  md:hover:text-[#cf6f4c] md:hover:bg-transparent">
                                    <Link href="/sofa" onClick={() => setNavbar(!navbar)}>
                                        <div>Sofa</div>
                                    </Link>
                                </li>

                                <li className="pb-3 text-md py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#cf6f4c]  border-purple-900  md:hover:text-[#cf6f4c] md:hover:bg-transparent">
                                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                        <div>About</div>
                                    </Link>
                                </li>
                                <li className="pb-3 text-md py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#cf6f4c]  border-purple-900  md:hover:text-[#cf6f4c] md:hover:bg-transparent">
                                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                        <div>Contact</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
