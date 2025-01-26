import React from 'react'
import { IoLogoFacebook } from "react-icons/io"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialInstagram } from "react-icons/ti"
import { CiLocationOn } from "react-icons/ci"
import { FiPhoneCall } from "react-icons/fi"
import { MdForwardToInbox } from "react-icons/md"

export default function ContactUsPage(){
    return(
        <>
           <div className='flex justify-around items-center flex-wrap p-4' id='contact'>
                <div className='text-buttonColor py-5 flex items-center gap-3'>

                    <div class="flex flex-col items-center space-y-4 relative">
                    <p className="text-[10px] font-black text-buttonColor rotate-90 absolute top-[-25px] left-[-15px] whitespace-nowrap">
                        FOLLOW US
                    </p>

                        <div className="w-px h-16 bg-red-500 "></div>

                        <div className="flex flex-col items-center gap-2 text-2xl">
                            <IoLogoFacebook className='hover:scale-110 transition-transform text-buttonColor' />
                            <TiSocialTwitter className='hover:scale-110 transition-transform text-buttonColor' />
                            <TiSocialInstagram className='hover:scale-110 transition-transform text-buttonColor' />
                        </div>
                    </div>

                    <div className='w-[300px]'>
                        <h1 className='font-[900] text-2xl'><span className='border-b-2 border-red-700'>Contact</span> Us</h1>
                        <p className='text-sm my-4'>Reach out to us for any enquires</p>
                        <form className='flex flex-col gap-2'>
                            <input type="text" placeholder='Name' className='h-[45px] indent-5' />
                            <input type="text" placeholder='Your email'  className='h-[45px] indent-5'/>
                            <textarea name="" id="" placeholder='Message' className='w-[300px] h-[200px] p-4 border border-gray-300 rounded-md resize-none'>
                            </textarea>
                            <button className='bg-gold text-white py-2 rounded-sm'>Submit</button>
                        </form>
                    </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31704.918153982657!2d3.3368500474709575!3d6.632665603952906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ea60971ee3%3A0xd335301146fdc207!2sOjodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1737740280815!5m2!1sen!2sng"
                    width="300"
                    height="350"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

           </div> 
           <div className='text-buttonColor flex justify-around py-2 px-8'>
                <div className='flex items-center'>
                    <CiLocationOn size={30}  className='border-[1px]'/>
                    <div className='flex flex-col items-center'>
                        <p className='text-[10px] font-bold'>Location</p>
                        <button className='bg-red-700 rounded-xl text-white text-[10px] px-2 py-1'>Locate Us</button>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <MdForwardToInbox size={30} className='border-[1px]'/>
                    <div className='flex flex-col items-center'>
                        <p className='text-[10px] font-bold'>Email</p>
                        <p className='text-[10px]'>ansaaspace@gmail.com</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <FiPhoneCall size={30} className='border-[1px]'/>
                    <div className='flex flex-col items-center'>
                        <p className='text-[10px] font-bold'>Phone</p>
                        <p className='text-[10px]'>+2349051878720</p>
                    </div>
                </div>
           </div>
           
        </>
    )
}