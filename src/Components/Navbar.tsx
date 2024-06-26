"use client";
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

function NavBar() {
    const pathname = usePathname();

    const [navbar, setNavbar] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>(pathname);

    // Update active page on route change
    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    return (
        <div>
            <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50">
                <div className="px-2 mx-auto lg:w-4/5 md:flex md:justify-between md:items-center md:px-0">
                    <div>
                        <div className="flex md:flex-col items-center justify-between md:py-0 py-1 md:py-1 md:block">
                            {/* LOGO */}
                            <div className="w-[9rem]">
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
                    <div className="transparent">
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'} md:block`}
                        >
                            <ul className="h-screen text-black md:h-fit items-center justify-center md:flex relative">
                                {['/', '/sofa', '/about', '/contact', '/wishlist'].map((path, index) => (
                                    <li key={index} className={`pb-3 text-md py-2 md:px-6 text-center border-b-2 ${activePage === path ? 'border-purple-900' : 'border-transparent'} ${activePage === path ? 'animate-border' : ''}`}>
                                        <Link href={path} onClick={() => setNavbar(false)}>
                                            <div className={path === '/wishlist' ? 'hover:text-black flex justify-center items-center' : ''}>
                                                {path === '/wishlist' ? <FaRegHeart /> : path.slice(1) || 'Home'}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
