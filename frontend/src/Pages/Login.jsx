import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { FacebookIcon } from "../Data";
import profilePhoto from "../images/2.jpg"
import { NavLink } from "react-router-dom"
import Register from '../Components/Register';


function Login() {

    const [createAccount, setCreateAccount] = useState(false);

    const ShowCreateAccountPage = () => {
        setCreateAccount(true);
    }

    return (
        <div className=' w-full h-screen flex justify-center bg-gray-100'>
            <div className=' w-[67%] flex justify-between'>
                <div className=' w-[40%] mt-20'>
                    <img src={FacebookIcon} alt="" className=' w-[200px]' />
                    <div className=' ml-4'>
                        <h3 className='text-3xl'>Rcent logins</h3>
                        <h3 className=' text-gray-600'>Pic your picture or add your account.</h3>
                    </div>
                    <div className=' flex items-center mt-5  ml-4'>
                        <div className=' cursor-pointer h-[200px] w-40 shadow shadow-gray-300 rounded-md overflow-hidden  hover:shadow-lg hover:shadow-gray-300'>
                            <img src={profilePhoto} alt="" className=' w-full h-4/5 object-cover' />
                            <div className=' w-full bg-white h-full pt-1'>
                                <p className=' text-center text-lg text-gray-700'>Saykot</p>
                            </div>
                        </div>
                        <div className=' cursor-pointer h-[200px] w-40 ml-5 shadow shadow-gray-300 rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-300'>
                            <div className='w-full h-4/5 flex justify-center items-center'>
                                <div className=' w-11 h-11 bg-blue-500 flex justify-center items-center rounded-full'>
                                    <AiOutlinePlus className=' text-3xl text-white font-[900]' />
                                </div>
                            </div>
                            <div className=' w-full bg-white h-full pt-1'>
                                <p className=' text-center text-lg text-blue-500'>Add Account</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[40% mt-20'>
                    <div className=' w-[395px] h-[345px] bg-white shadow-md shadow-gray-400 rounded-md mt-14 mr-10 p-4'>
                        <input type="text" placeholder='Email address or phone number' className=' p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded mb-2' />
                        <input type="password" placeholder='Password' className=' p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded my-2' />
                        <button className=' w-full py-3 bg-blue-500 text-white font-bold text-lg rounded-md my-2 hover:bg-blue-600'>Log In</button>
                        <NavLink to="/forgetPassword" className=' text-center bl text-blue-500 cursor-pointer hover:underline'>Forgotten password?</NavLink>
                        <hr className=' h-[1px] bg-gray-500 w-full my-4' />
                        <div className=' w-full flex justify-center items-center'>
                            <button onClick={ShowCreateAccountPage} className=' w-[55%] py-3 mt-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold'>Create New Account</button>
                        </div>
                    </div>
                    <p className=' text-sm text-center mt-7'><span className=' font-semibold'>Create a Page</span> for a celebrity, brand or business.</p>
                </div>
            </div>
            <Register createAccount={createAccount} setCreateAccount={setCreateAccount} />
        </div>
    )
}

export default Login
