import React from "react"
import { FaUserCircle,FaBriefcase } from 'react-icons/fa'

export default function Register(){
    return(
        <>
            <p className="text-buttonColor text-sm mr-auto mt-2 mb-3 font-bold">Select Registration Type</p>
            <div className="flex gap-5 text-buttonColor">
              <div className="relative border rounded-sm p-4 flex flex-col items-center bg-[#F2F2F2]">  
                    <input className="absolute top-2 right-2 w-4 h-4" name="userType" type='radio' id="coo"/>  
                    <div className="text-3xl mb-2">  
                        <FaBriefcase />  
                    </div>   
                        <label className="font-semibold" htmlFor="coo">Corporate</label>  
                </div>  
                <div className="relative border rounded-sm p-4 flex flex-col items-center bg-[#F2F2F2]">  
                    <input className="absolute top-2 right-2 w-4 h-4" name="userType" type='radio' id="ind" />  
                    <div className="text-3xl mb-2">  
                        <FaUserCircle />  
                    </div>   
                        <label className="font-semibold" htmlFor="ind">Individual</label>  
                </div>  
            </div>
            <div className="w-[100%] border-2 mt-3 h-full text-buttonColor flex flex-col gap-2 p-3">
                <label htmlFor="asin" className="text-[11px] font-bold">Enter ASIN</label>
                <input type="text" placeholder="123456789" id="asin"  className="rounded-sm border-[1px] indent-4 py-1"/>
                <button className="bg-buttonColor text-white text-sm py-2 rounded-sm ">Verify ASIN</button>
            </div>
        </>
    )
}