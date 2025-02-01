import React from 'react'
import { Outlet,NavLink,Link } from 'react-router-dom'

export default function RegLogLayout() {
    return(
        <div className="bg-[url('/images/Form.png')] w-[100vw] h-[100%] sm:h-[100vh] bg-cover flex flex-wrap justify-center items-center p-4 gap-6">
            <div className='text-white '>
                <h1 className=' w-[260px] md:w-[350px] font-[600] sm:font-[700] text-[15px] sm:text-1xl lg:text-2xl leading-[20px] sm:leading-[21px]'>Welcome to Anambra Signage & Advertisement Agency(ANSAA)</h1>
                <p className='font-[500] text-[10px] sm:text-sm my-2'>...your progress partner in business</p>
                <button className='bg-red-700 p-2  text-white text-[10px] sm:text-sm rounded-sm'>Apply for Signage Permit</button>
            </div>
            <form className='bg-white w-[350px] h-[370px] md:h-[380px] rounded-sm flex flex-col items-center p-4'>
                <img src="images/log.png" alt="logo" className='w-20' />
                <div>
                    <ul className='flex justify-around w-full text-center'>  
                        <li className='w-[160px]'> 
                            <NavLink  
                                to="/reg"
                                className={({ isActive }) =>  
                                    `block border-b-2 ${isActive ? 'border-red-600 text-red-600' : ''}`  
                                }  
                                end
                            >  
                                Register  
                            </NavLink>  
                        </li>  
                        <li className='w-[160px]'> 
                            <NavLink  
                                to="login"  
                                className={({ isActive }) =>  
                                    `block border-b-2 ${isActive ? 'border-red-600 text-red-600' : ''}`  
                                }   
                            >  
                                Login  
                            </NavLink>  
                        </li>  
                    </ul>
                    <Link to="/" className='text-[9px] underline text-buttonColor'>Back Home</Link>
                </div>
                <Outlet />
            </form>
        </div>
    )
}

