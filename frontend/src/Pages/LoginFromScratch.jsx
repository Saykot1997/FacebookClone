import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Register from '../Components/Register';
import { FacebookIcon } from "../Data"

function LoginFromScratch() {

    const [createAccount, setCreateAccount] = useState(false);

    const ShowCreateAccountPage = () => {
        setCreateAccount(true);
    }

    return (
        <div className=' h-screen w-full relative'>
            <div className=' h-[82%] w-full flex justify-center items-center bg-gray-100'>
                <div className=' w-[29%] h-full'>
                    <div className=' flex flex-col justify-center items-center mt-10'>
                        <div className=' flex justify-center items-center'>
                            <img src={FacebookIcon} alt="" className=' w-[230px]' />
                        </div>
                        <div className=' w-[395px] bg-white shadow-md shadow-gray-400 rounded-md p-4'>
                            <p className=' text-center text-lg mb-4'>Log in to Facebook</p>
                            <input type="text" placeholder='Email address or phone number' className=' p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded mb-2' />
                            <input type="password" placeholder='Password' className=' p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded my-2' />
                            <button className=' w-full py-3 bg-blue-500 text-white font-bold text-lg rounded-md my-2 hover:bg-blue-600'>Log In</button>
                            <NavLink to="/forgetPassword" className=' text-center block text-blue-500 cursor-pointer hover:underline'>Forgotten password?</NavLink>
                            <hr className=' h-[1px] bg-gray-500 w-full my-4' />
                            <div className=' w-full flex justify-center items-center'>
                                <button onClick={ShowCreateAccountPage} className=' w-[55%] py-3 mt-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold'>Create New Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Register createAccount={createAccount} setCreateAccount={setCreateAccount} />
        </div>

    )
}

export default LoginFromScratch
