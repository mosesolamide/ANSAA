import React from 'react'

export default function HomePage(){
    return(
        <>
            <img src="images/SLIDER 3.png" alt="banner" className='w-[100vw] h-[250px] sm:h-[350px] md:h-[430px] relative'/>
            <div className='w-[400px] md:w-[450px] absolute top-20 sm:top-36 left-6 sm:left-20 bottom-0'>
                <h1 className='font-[600] sm:font-[800] text-2xl sm:text-3xl lg:text-4xl leading-[40px] text-[#024C7E]'>Welcome to Anambra Signage & Advertisement Agency(ANSAA)</h1>
                <p className='text-[#024C7E] font-[500] text-md sm:text-lg my-4'>...your progress partner in business</p>
                <button className='bg-red-700 px-4 py-4 text-white text-sm rounded-sm'>Apply for Signage Permit</button>
            </div>
            <div className='flex flex-wrap justify-center gap-10 py-8'>
                <img src="images/about image.png" alt="image of people in ansaa" className='w-80' />
                <div className='w-80'>
                   <h2 className='font-bold text-lg'>About Us</h2> 
                   <p>
                        The Anambra State Signage and Advertisement Agency ANSAA is the organisation by 
                        law,   empowered   to   regulate   the   use   of   Out-of-Home   signage,   
                        hoarding   and advertisement   in   Anambra   State   and   for   connected   
                        purposes.   The   Agency   was founded in 2010 following the passing and signing
                        of the Law establishing it by the Anambra State House of Assembly.
                        This law came into force on the 5th of August 2010.
                   </p>
                </div>
            </div>
        </>
    )
}