import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <form action="" className='text-buttonColor w-full p-4'>
            <div className='flex flex-col gap-2 mb-2'>
                <label htmlFor="email" className='text-[12px]'>Email/ASIN</label>
                <input type="email" id='email' placeholder='joe@gmail.com' className='h-[35px] bg-[#EDEFF5] indent-4 w-full' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='text-[12px]'>Password</label>
                <input type="email" id='password' placeholder='*********' className='h-[35px] bg-[#EDEFF5] indent-4 w-full' />
            </div>
            <div className='flex text-[11px] justify-between my-6'>
                <div className='flex gap-1'>
                    <input type="checkbox" id='remember'  />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <Link className='text-buttonColor'>Forgot Password?</Link>
            </div>
            <button className="bg-buttonColor text-white text-sm py-2 rounded-sm w-full">Login</button>
        </form>
    )
}