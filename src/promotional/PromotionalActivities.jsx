import React, {useContext,useState,useEffect} from "react"
import { IoIosAddCircle } from "react-icons/io"
import AddActivitiesModal from "./AddActivitiesModal"
import { Mycontext} from "../App"


export default function PromotionalActivities(){

const {showModal,setShowModal} = useContext(Mycontext)
const addActivitiesModal = () => {
    setShowModal(true)
} 
const [activities, setActivities] = useState([]);

useEffect(() => {
  const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
  setActivities(storedActivities)
}, [showModal])

const allActivities = activities.map((activity,index) =>{
    return(
        <div key={index}>
            <ul className="flex justify-between items-center w-full text-[.4em]
             font-sm bg-modal text-bold px-1 py-2 sm:text-[.8em] mt-4 sm:"
             >
                <li>1</li>
                <li>{activity.applicationType}</li>
                <li>{activity.adsType}</li>
                <li>{activity.period}</li>
                <li>{activity.startDate}</li>
                <li>{activity.endDate}</li>
                <li>{activity.noVehicle}</li>
                <li className="bg-gray-100 py-1 px-2 rounded-lg">pending</li>
                <li><button className="bg-green-700 px-3 py-1 rounded-sm text-white">Action</button></li>
            </ul>
        </div>
    )
})
    return(
        <section className=" w-[100vw] sm:w-[100vw] md:w-[70vw] lg:w-[82vw] largeLg:w-[78vw] xl:w-[82vw] ml-auto">
          <section className="py-3 px-6 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-buttonColor text-[1em] font-bold">Promotional Activities</h1>
                    <button onClick={addActivitiesModal} className="w-[203px] h-[45px] bg-buttonColor text-white rounded-[3px] flex justify-center items-center"><IoIosAddCircle size={20} className="mr-2" />Add New Activities</button>
                </div>
                <section className="bg-white mt-4 h-[475px] p-2">
                    <div>
                        <ul className="flex justify-between w-full text-[.4em] font-bold bg-buttonColor text-white p-2 sm:text-[.8em]">
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
                    {allActivities}
                </section>
          </section>
          {showModal && (
            <AddActivitiesModal/>
          )}
        </section>
    )
}