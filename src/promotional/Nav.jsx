import React, { useState, useEffect, useContext } from "react";
import { MdLogout } from "react-icons/md";
import { PiNotebookThin } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiBrush4Line } from "react-icons/ri";
import { MdGridView } from "react-icons/md";
import { MdOutlineViewHeadline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Mycontext } from "../App";

      
export default function Nav() {

  const {hideSideBar, setHideSideBar} = useContext(Mycontext)

  const [HideSignAge,setHideSignAge] = useState(true)
      
        // flip the state
  const hide = () => {
          setHideSideBar(prev => !prev)
        }
      
        // Update localStorage whenever the state changes
        useEffect(() => {
          localStorage.setItem("sidebar", hideSideBar);
        }, [hideSideBar]);


const hideSignAge = () =>{
    setHideSignAge(prev => !prev)
}

    return(
        <header className="w-[100vw] bg-white">
            <nav>

                <div className="flex px-8 py-6 justify-between items-center w-[93vw]">
                    <div className="flex items-center">
                        <img className="w-[80px]" src="/images/log.png" alt="logo" />
                        <PiNotebookThin size={20} className="ml-4" />
                    </div>
                    <div className="flex justify-between items-center w-32">
                        <div className="flex items-center">
                          <IoPersonCircleOutline size={30} />
                            <p className="mx-1 flex items-center font-bold">Admin <IoMdArrowDropdown /></p>
                        </div>
                        <button className="w-[85px] h-[31px] flex items-center bg-red-100 text-red-600 font-bold p-2 rounded-sm ml-1"><MdLogout/>  Logout</button>
                    </div>
                </div>
                
                <div className="md:hidden ml-4" onClick={hide}><MdOutlineViewHeadline size={30}/></div>

                <div className={`${hideSideBar ? "opacity-0 translate-x-[-100%]" : "opacity-100 translate-x-0"} transition-all ease-in-out duration-700 bg-blue-950 w-[250px] h-[550px] fixed pl-3 pt-8 text-white`}>
                    <ul className="">
                        <li className="flex gap-4 items-center hover:cursor-pointer hover:bg-red-600 h-16 w-52 pl-4"> <MdGridView size={30}/> Overview</li>
                        <li className="flex gap-4 items-center hover:cursor-pointer hover:bg-red-600 h-16 w-52 pl-4"> <MdGridView size={30}/>Permissions</li>
                        <li 
                            onClick={hideSignAge} 
                            className={`${!HideSignAge ? "bg-red-600" : "hover:bg-red-600"}
                            flex gap-4 items-center hover:cursor-pointer h-16 w-52 pl-4`}
                        >
                            <RiBrush4Line size={30} />
                            SignAge Application
                        </li>
                    </ul>
                    <ul className={`${HideSignAge? "hidden" : ""} mt-6 text-[12px] font-bold ml-6 flex flex-col gap-6`}>
                        <li><Link className="hover:cursor-pointer hover:bg-red-600 w-52 p-4">Register 1st Party Signage</Link></li>
                        <li><Link className="hover:cursor-pointer hover:bg-red-600 w-52 p-4">Register 3rd Party Structure</Link></li>
                        <li><Link className="hover:cursor-pointer hover:bg-red-600 w-52 p-4">Mobile Advertisement</Link></li>
                        <li><Link className="hover:cursor-pointer hover:bg-red-600 w-52 p-4">Street Lamp-Pole Signage</Link></li>
                        <li><Link className="hover:cursor-pointer hover:bg-red-600 w-52 p-4" to="promotionalActivities">Promotional Activities</Link></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}