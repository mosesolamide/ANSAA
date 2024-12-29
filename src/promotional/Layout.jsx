import React, {useState} from "react"
import { MdLogout } from "react-icons/md"
import { PiNotebookThin } from "react-icons/pi"
import { IoPersonCircleOutline } from "react-icons/io5"
import { IoMdArrowDropdown } from "react-icons/io"
import { RiBrush4Line } from "react-icons/ri"
import { MdGridView } from "react-icons/md"
import { MdOutlineViewHeadline } from "react-icons/md"

export default function Layout(){
    const [ hideSideBar, setHideSideBar ] = useState(localStorage.setItem("sidebar",true))
    const hide = () =>{
        setHideSideBar( prev => !prev)
        console.log("moses")
    }

    window.addEventListener("resize", () =>{
        if(window.innerWidth >= 768){
            setHideSideBar(false)
        }else{
            setHideSideBar(true)
        }
    })

    return(
        <nav className="w-[100vw]">
            <div className="flex px-8 py-6 justify-between items-center w-[93vw] ">
                <div className="flex items-center">
                    <img className="w-[80px]" src="src/assets/log.png" alt="logo" />
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
            <div className={`${hideSideBar? "hidden" : ""} bg-blue-950 w-[250px] h-[100vh] fixed pl-10 pt-16 text-white`}>
                <ul className="flex flex-col gap-10">
                    <li className="flex gap-4 items-center hover:cursor-pointer"> <MdGridView size={30}/> Overview</li>
                    <li className="flex gap-4 items-center hover:cursor-pointer"> <MdGridView size={30}/>Permissions</li>
                    <li className="flex gap-4 items-center hover:cursor-pointer"><RiBrush4Line size={30} />Signage Application</li>
                </ul>
            </div>
        </nav>
    )
}