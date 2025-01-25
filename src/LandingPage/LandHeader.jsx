import React, { useContext } from 'react';
import { Mycontext } from "../App";
import { MdOutlineViewHeadline } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function LandHeader() {
    const { hideSideBar, setHideSideBar } = useContext(Mycontext);

    const hide = () => {
        setHideSideBar((prev) => !prev);
    };

    return (
        <header>
            <nav className="p-4 flex justify-around w-[100vw] items-center">
                <img className="w-[80px]" src="/images/log.png" alt="logo" />
                <div className="relative">
                    <div className="md:hidden ml-4" onClick={hide}>
                        <MdOutlineViewHeadline size={20} />
                    </div>
                    <ul className={`md:flex md:gap-5 text-[10px] lg:text-sm md:items-center 
                        absolute md:static ${hideSideBar ? 'hidden' : 'block'} 
                        bg-white md:bg-transparent rounded-md w-[115px] md:w-full left-0 top-full z-10`}>
                        <li className="p-2 hover:bg-gray-200"><Link>Home</Link></li>
                        <li className="p-2 hover:bg-gray-200"><Link>About</Link></li>
                        <li className="p-2 hover:bg-gray-200"><Link>Service</Link></li>
                        <li className="p-2 hover:bg-gray-200"><Link>Our Business</Link></li>
                        <li className="p-2 hover:bg-gray-200"><Link>Contact Us</Link></li>
                        <li className="p-2 hover:bg-gray-200"><Link>News</Link></li>
                        <li className="p-2 hover:bg-gray-200"><Link>ANSAA Offices</Link></li>
                    </ul>
                </div>
                <div className="flex text-sm gap-2">
                    <button className="w-[65px] lg:w-[100px] bg-gold px-4 py-2 text-white">Apply</button>
                    <button className="w-[65px] lg:w-[100px] bg-red-700 px-4 py-2 text-white">Login</button>
                </div>
            </nav>
        </header>
    );
}
