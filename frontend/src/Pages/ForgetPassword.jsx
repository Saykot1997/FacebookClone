import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FacebookIcon } from '../Data'

function ForgetPassword() {

    const navigate = useNavigate()
    const sendEmail = () => {
        navigate('/createPassword');

    }
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className=' h-screen w-full'>
            <div className=' h-[60%] w-full'>
                <div className=' w-full h-14 p-1 flex justify-between bg-white fixed top-0 left-0 shadow shadow-gray-300'>
                    <NavLink to="/">
                        <img src={FacebookIcon} alt="" className=' h-12' />
                    </NavLink>
                    <div className=' flex items-center'>
                        <input type="text" placeholder='Email or phone' className='p-2 px-3 focus:outline-0 focus:ring-1 ring-blue-500 mr-3 border border-gray-300 rounded placeholder:text-gray-500' />
                        <input type="text" placeholder='Password' className='p-2 px-3 focus:outline-0 focus:ring-1 ring-blue-500 border border-gray-300 rounded placeholder:text-gray-500' />
                        <button className=' bg-blue-500 rounded-md py-2 mx-2 px-2  font-bold text-white'>Log In</button>
                        <NavLink to="/forgetPassword" className=" text-blue-500 mr-3 hover:underline cursor-pointer">Forgotten account?</NavLink>
                    </div>
                </div>
                <div className=' w-full mt-14 h-full flex justify-center items-center bg-gray-200'>
                    <div className=' bg-white shadow shadow-gray-300 rounded-md w-[500px] h-[290px]'>
                        <p className=' font-semibold text-[22px] py-4 px-5'>Find your account</p>
                        <hr className=' h-[1px] bg-gray-300 w-full ' />
                        <div className=' px-5 py-4'>
                            <p className=' leading-5'>Please enter your email address or mobile number to search for your account.</p>
                            <input type="text" className=' w-full p-3 border focus:outline-0 focus:ring-1 ring-blue-500 my-5 border-gray-300 rounded placeholder:text-gray-500' placeholder='Email address or phone number' />
                        </div>
                        <hr className=' h-[1px] bg-gray-300 w-full ' />
                        <div className=' flex justify-end px-5 pt-3'>
                            <button onClick={goBack} className=' bg-gray-300 py-[6px] px-4 font-semibold rounded-md mr-2'>Cencel</button>
                            <button onClick={sendEmail} className=' bg-blue-500 py-[6px] px-4 text-white font-bold rounded-md'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
