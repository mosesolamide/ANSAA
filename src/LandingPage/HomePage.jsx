import React from 'react'

export default function HomePage(){
    return(
        <>
            <img src="images/SLIDER 3.png" alt="banner" className='w-[100vw] h-[250px] sm:h-[350px] md:h-[430px] relative'/>
            <div className=' absolute top-[115px] sm:top-36 left-6 sm:left-20 bottom-0'>
                <h1 className=' w-56 sm:w-[400px] md:w-[450px] font-[600] sm:font-[700] text-[15px] sm:text-3xl lg:text-4xl leading-[20px] sm:leading-[35px] text-[#024C7E]'>Welcome to Anambra Signage & Advertisement Agency(ANSAA)</h1>
                <p className='text-[#024C7E] font-[500] text-[10px] sm:text-sm my-2 sm:my-4'>...your progress partner in business</p>
                <button className='bg-red-700 px-2 py-2 sm:px-4 sm:py-4 text-white text-[10px] sm:text-sm rounded-sm'>Apply for Signage Permit</button>
            </div>

            <div className='flex flex-wrap justify-center gap-6 py-8 px-3 md:justify-evenly items-center'>
                <img src="images/about image.png" alt="image of people in ansaa" className='w-[300px]' />
                <div className='w-80 px-3'>
                   <h2 className='font-black text-2xl text-[#080239]'>About Us</h2> 
                   <p className='text-[11px] leading-4 font-bold text-[#080239]'>
                        The Anambra State Signage and Advertisement Agency ANSAA is the organisation by 
                        law,   empowered   to   regulate   the   use   of   Out-of-Home   signage,   
                        hoarding   and advertisement   in   Anambra   State   and   for   connected   
                        purposes.   The   Agency   was founded in 2010 following the passing and signing
                        of the Law establishing it by the Anambra State House of Assembly.
                        This law came into force on the 5th of August 2010.
                   </p>
                   <button className='w-[150px] bg-gold px-4 py-2 text-white mt-4 rounded-sm'>Learn more</button>
                </div>
            </div>

            <div className=' bg-white text-center py-8'>
                <p className='uppercase text-red-700 font-bold text-sm'>what we do</p>
                <h3 className='text-[#080239] font-bold text-xl'>Our Services</h3>
                <div className='flex justify-center gap-4 mt-4 px-4'>
                    <img src="images/Group 6.png" alt="image of our services" className='w-24 flex-grow max-w-60' />
                    <img src="images/Group 7.png" alt="image of our services" className='w-24 flex-grow max-w-60'/>
                    <img src="images/Group 8.png" alt="image of our services" className='w-24 flex-grow max-w-60'/>
                </div>
            </div>

            <div>
                <img src="images/reg.png" alt="registration process" className='w-full h-[300px] sm:h-[400px]' />
            </div>
        </>
    )
}