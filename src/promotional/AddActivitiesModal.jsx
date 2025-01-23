import React, {useContext,useState}from "react"
import { MdCancel } from "react-icons/md"
import { Mycontext } from "../App"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function AddActivitiesModal() {
const {setShowModal} = useContext(Mycontext)

const closeModal = () => {
    setShowModal(false)
}
const [ activitiesForm,setActivitiesForm ] = useState({
    applicationType:"",
    adsType:"",
    period:"",
    startDate:"",
    endDate:"",
    noVehicle:"",
    lga:"",
    area:"",
    address:""
})

const handleChange = (e) => {
    const { name, value } = e.target
    setActivitiesForm( prev =>({
        ...prev,
        [name]:value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()

    // Step 1: Retrieve existing activities from localStorage
    let existingActivities = JSON.parse(localStorage.getItem("activities"))

    //If there's no data or it's not an array, initialize it as an empty array
    if (!existingActivities) {
        existingActivities = []// Initialize as an empty array if it is not found
    }

    //Add the new activity to the existing array
    existingActivities.push(activitiesForm)

    //Save the updated array back to localStorage
    localStorage.setItem("activities", JSON.stringify(existingActivities))

    //Close the modal
    closeModal()
}

    return (
        <div className="bg-[#080239]/80 fixed inset-0 w-full h-full grid place-items-center z-[1000] backdrop-blur-[1px]">
            <form className="bg-white shadow-lg w-[310px] sm:w-[560px] h-[550px] rounded-sm" onSubmit={handleSubmit}>
                <div className="flex justify-between items-center bg-modal w-full px-6 pt-5 pb-3">
                    <h1 className="font-semibold">Promotional Activities Application</h1>
                    <MdCancel className="text-red-600 hover:cursor-pointer" onClick={closeModal}/>
                </div>
                <div className="flex justify-center gap-2 mt-2">
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Application Type</label>
                        <select
                            name="applicationType" 
                            id="" 
                            className="w-[95px] sm:w-[170px] text-gray-600 h-[45px] border p-2 rounded outline-none text-sm"
                            onChange={handleChange}
                            value={activitiesForm.applicationType}
                            required
                         >
                            <option value="">Select option</option>
                            <option value="Mobile">Mobile</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Ads Type</label>
                        <select 
                            name="adsType" 
                            id="" 
                            className="w-[95px]  sm:w-[170px] h-[45px] border text-gray-600 p-2 rounded outline-none text-[12px] sm:text-[14px]"
                            onChange={handleChange}
                            required
                            value={activitiesForm.adsType}
                        >
                            <option value="">Select option</option>
                            <option value="Road Shows">Road Shows</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Period</label>
                        <select 
                            name="period" 
                            id="" 
                            className="w-[95px]  sm:w-[170px] h-[45px] text-gray-600
                            border p-2 rounded outline-none text-[12px] sm:text-[14px]"
                            onChange={handleChange}
                            required
                            value={activitiesForm.period}
                         >
                            <option value="">Select option</option>
                            <option value="Yearly">Yearly</option>
                            <option value="Monthly">Monthly</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Start Date</label>
                        <input
                            type="date" 
                            className="w-[95px] sm:w-[170px] h-[45px] border p-2
                            text-gray-600 rounded outline-none text-[12px] sm:text-[14px]"
                            required
                            value={activitiesForm.startDate}
                            name="startDate"
                            onChange={handleChange}
                           />
                    </div>
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">End Date</label>
                        <input
                            type="date" 
                            className="w-[95px] sm:w-[170px] h-[45px] border p-2
                            text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" 
                            required
                            name="endDate"
                            onChange={handleChange}
                            value={activitiesForm.endDate}
                          />
                    </div>
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">No of Vehicle</label>
                        <input
                            type="text" 
                            placeholder="Enter No of Vehicle" 
                            className="w-[95px] sm:w-[170px] h-[45px] border 
                            p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" 
                            name="noVehicle"
                            required
                            onChange={handleChange}
                            value={activitiesForm.noVehicle}
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">LGA</label>
                        <select 
                            name="lga" 
                            id="" 
                            className="w-[95px] sm:w-[170px] h-[45px]
                            text-gray-600 border p-2 rounded outline-none text-[12px] sm:text-[14px]"
                            required
                            value={activitiesForm.lga}
                            onChange={handleChange}
                         >
                            <option value="">Select LGA</option>
                            <option value="ikeja">Ikeja</option>
                            <option value="kosofe">Kosofe</option>
                            <option value="shomolu">Shomolu</option>
                            <option value="surulere">Surulere</option>
                            <option value="apapa">Apapa</option>
                            <option value="ibadan_north">Ibadan North</option>
                            <option value="abeokuta_south">Abeokuta South</option>
                            <option value="port_harcourt">Port Harcourt</option>
                            <option value="enugu_east">Enugu East</option>
                            <option value="uyo">Uyo</option>
                        </select>
                    </div>
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Area</label>
                        <input 
                            type="text" 
                            placeholder="Onitsha" 
                            className="w-[95px] sm:w-[170px] 
                            h-[45px] border p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]"
                            required
                            value={activitiesForm.area}
                            onChange={handleChange}
                            name="area"
                         />
                    </div>
                    <div className="relative mt-4">
                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Street Address</label>
                        <input 
                            type="text" 
                            placeholder="Enter Address" 
                            className="w-[95px] sm:w-[170px] h-[45px] border p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" 
                            required
                            name="address"
                            value={activitiesForm.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                         <div className="relative mt-4 border-[1px] w-[95%] sm:w-[90%] md:w-[79%] lg:w-[74%] p-4">
                            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Contact info</label>
                                <div className="grid grid-cols-2 gap-2 place-items-center">
                                    <div className="relative mt-4">
                                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Name</label>
                                        <input type="text" placeholder="Enter Address" className="w-full h-[45px] border p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" />
                                    </div>
                                    <div className="relative mt-4">
                                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Email</label>
                                        <input type="text" placeholder="Enter Address" className="w-full h-[45px] border p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" />
                                    </div>
                                    <div className="relative mt-2">
                                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Phone Number</label>
                                        <input type="text" placeholder="Enter Address" className="w-full h-[45px] border p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" />
                                    </div>
                                    <div className="relative mt-2">
                                        <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] sm:text-[14px] text-gray-600">Address</label>
                                        <input type="text" placeholder="Enter Address" className="w-full h-[45px] border p-2 text-gray-600 rounded outline-none text-[12px] sm:text-[14px]" />
                                    </div>
                                </div>
                        </div>
                </div>
                <button 
                    type="submit"
                    className="flex items-center w-[95%] lg:w-[90%] h-[55px] bg-buttonColor
                    text-white justify-center mx-auto mt-4"
                 >
                    Continue <FaLongArrowAltRight className="ml-8"/>
                </button>
            </form>
        </div>
    )
}

