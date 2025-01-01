import React from "react"
import { IoIosAddCircle } from "react-icons/io"

export default function PromotionalActivities(){

const addActivities = () => {
    
} 

    return(
       <section className="py-3 px-6 sm:w-[99%] md:w-[68%] smallLg:w-[73%] largeLg:w-[82%] lg:w-[77%] eight:w-[70%] ml-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-buttonColor text-[1em] font-bold">Promotional Activities</h1>
                <button className="w-[203px] h-[45px] bg-buttonColor text-white rounded-[3px] flex justify-center items-center"><IoIosAddCircle size={20} className="mr-2" />Add New Activities</button>
            </div>
            <section className="bg-white mt-4 h-[475px] p-2">
                <div>
                    <ul className="flex justify-around w-full text-[.6em] font-bold bg-buttonColor text-white p-2 sm:text-[.8em]">
                        <li>S/N</li>
                        <li>Application Type</li>
                        <li>Ads Type</li>
                        <li>Period</li>
                        <li>Start Date</li>
                        <li>End Date</li>
                        <li>No. of Vehicle</li>
                        <li>Status</li>
                        <li>Action</li>
                    </ul>
                </div>
            </section>
       </section>
    )
}