
      import React, { useState, useEffect } from "react";
      import { MdLogout } from "react-icons/md";
      import { PiNotebookThin } from "react-icons/pi";
      import { IoPersonCircleOutline } from "react-icons/io5";
      import { IoMdArrowDropdown } from "react-icons/io";
      import { RiBrush4Line } from "react-icons/ri";
      import { MdGridView } from "react-icons/md";
      import { MdOutlineViewHeadline } from "react-icons/md";
      
      export default function Layout() {
 
        const [hideSideBar, setHideSideBar] = useState(
          JSON.parse(localStorage.getItem("sidebar")) || false
        )
        const [ HideSignAge , setHideSignAge ] = useState(true)
      
        // flip the state
        const hide = () => {
          setHideSideBar((prev) => !prev);
        };
      
        // Update localStorage whenever the state changes
        useEffect(() => {
          localStorage.setItem("sidebar", hideSideBar);
        }, [hideSideBar]);
      
        // Update the sidebar visibility based on window size
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 768) {
              setHideSideBar(false)
              localStorage.setItem("sidebar", true)
            } else {
              setHideSideBar(true);
              localStorage.setItem("sidebar", false)
            }
          }

          window.addEventListener("resize", handleResize)
          handleResize()

          return () => {
            window.removeEventListener("resize", handleResize);
          }

        }, [])

const hideSignAge = () =>{
    setHideSignAge(prev => !prev)
}

    return(
        <nav className="w-[100vw]">
            <div className="flex px-8 py-6 justify-between items-center w-[93vw] ">
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
            <div className="md:hidden" onClick={hide}><MdOutlineViewHeadline size={30}/></div>
            <div className={`${hideSideBar? "hidden" : ""} bg-blue-950 w-[250px] h-[100vh] fixed pl-3 pt-8 text-white`}>
                <ul className="">
                    <li className="flex gap-4 items-center hover:cursor-pointer hover:bg-red-600 h-16 w-52 pl-4"> <MdGridView size={30}/> Overview</li>
                    <li className="flex gap-4 items-center hover:cursor-pointer hover:bg-red-600 h-16 w-52 pl-4"> <MdGridView size={30}/>Permissions</li>
                    <li 
                        onClick={hideSignAge} 
                        className={`${!HideSignAge ? "bg-red-600" : "hover:bg-red-600"}
                         flex gap-4 items-center hover:cursor-pointer h-16 w-52 pl-4`}
                    >
                        <RiBrush4Line size={30} />
                        Signage Application
                    </li>
                </ul>
                <ul className={`${HideSignAge? "hidden" : ""} mt-4 text-[12px] font-bold ml-6`}>
                    <li className="hover:cursor-pointer hover:bg-red-600  w-52 p-4">Register 1st Party Signage</li>
                    <li className="hover:cursor-pointer hover:bg-red-600  w-52 p-4">Register 3rd Party Structure</li>
                    <li className="hover:cursor-pointer hover:bg-red-600  w-52 p-4">Mobile Advertisement</li>
                    <li className="hover:cursor-pointer hover:bg-red-600  w-52 p-4">Street Lamp-Pole Signage</li>
                    <li className="hover:cursor-pointer hover:bg-red-600  w-52 p-4">Promotional Activities</li>
                </ul>
            </div>
        </nav>
    )
}