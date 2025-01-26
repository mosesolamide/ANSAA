import React, { useContext } from 'react'
import { Mycontext } from "../App"
import { MdOutlineViewHeadline } from "react-icons/md"
import { Link } from 'react-router-dom'

export default function LandHeader() {
    const { hideSideBar, setHideSideBar } = useContext(Mycontext);

    const hide = () => {
        setHideSideBar((prev) => !prev);
    };

    const scrollToAboutUs = () => {
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToContact = () => {
        const aboutSection = document.getElementById('contact');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToService = () => {
        const aboutSection = document.getElementById('service');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className='fixed top-0 left-0 right-0 bg-bgColor z-10'>
            <nav className="p-4 flex justify-around w-[100vw] items-center">
                <img className="w-[80px]" src="/images/log.png" alt="logo" />
                <div className="relative">
                    <div className="md:hidden ml-4" onClick={hide}>
                        <MdOutlineViewHeadline size={20} />
                    </div>
                    <ul
                        className={`md:flex md:gap-5 text-[10px] lg:text-sm md:items-center 
                        absolute md:static ${hideSideBar ? 'hidden' : 'block'} 
                        bg-white md:bg-transparent rounded-md w-[115px] md:w-full left-0 top-full z-10`}
                    >
                        <li className="p-2">
                            <Link>Home</Link>
                        </li>
                        <li className="p-2">
                            <Link onClick={scrollToAboutUs}>About Us</Link>
                        </li>
                        <li className="p-2">
                            <Link onClick={scrollToService}>Service</Link>
                        </li>
                        <li className="p-2">
                            <Link>Our Business</Link>
                        </li>
                        <li className="p-2">
                            <Link onClick={scrollToContact}>Contact Us</Link>
                        </li>
                        <li className="p-2">
                            <Link>News</Link>
                        </li>
                        <li className="p-2">
                            <Link>ANSAA Offices</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex text-sm gap-2">
                    <button className="w-[65px] lg:w-[100px] bg-gold px-4 py-2 text-white">
                        Apply
                    </button>
                    <button className="w-[65px] lg:w-[100px] bg-red-700 px-4 py-2 text-white">
                        Login
                    </button>
                </div>
            </nav>
        </header>
    );
}
