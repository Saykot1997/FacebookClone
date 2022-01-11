import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FacebookIcon } from "../Data"

function CreatePassword() {

    const [hidePassword, setHidePassword] = useState(true);
    const navigate = useNavigate();

    const HidePassword = () => {
        setHidePassword(!hidePassword);
    }
    const SendCreatePasswordRequest = () => {
        navigate('/');
    }
    const GoBack = () => {
        navigate(-1);
    }

    return (
        <div className=' h-screen w-full'>
            <div className=' h-[60%] w-full'>
                <div className=' w-full h-14 p-1 bg-white fixed top-0 left-0 shadow shadow-gray-300'>
                    <NavLink to="/">
                        <img src={FacebookIcon} alt="" className=' h-12' />
                    </NavLink>
                </div>
                <div className=' w-full mt-14 h-full flex justify-center items-center bg-gray-200'>
                    <div className=' bg-white shadow shadow-gray-300 rounded-md w-[500px] py-4'>
                        <p className=' font-semibold text-[22px] py-4 px-5'>Chose a new password</p>
                        <hr className=' h-[1px] bg-gray-300 w-full ' />
                        <div className=' px-5 py-4'>
                            <p className=' leading-5'>Create a new password that is at last 6 disite long. A strong password has a combination of letters, digits and pancuation mark.</p>
                            <div className=' flex items-center'>
                                <div className=' relative w-full mr-2'>
                                    <input type={`${hidePassword ? "password" : "text"}`} className=' w-full p-3 border focus:outline-0 focus:ring-1 ring-blue-500 my-5 border-gray-300 rounded placeholder:text-gray-500' placeholder='New password' />
                                    <span onClick={HidePassword} className=' text-blue-500 font-semibold absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'>{hidePassword ? "Show" : "Hide"}</span>
                                </div>
                                <div className=' bg-gray-200 rounded p-3 px-4 cursor-pointer'>
                                    <span>?</span>
                                </div>
                            </div>
                        </div>
                        <hr className=' h-[1px] bg-gray-300 w-full ' />
                        <div className=' flex justify-end px-5 pt-3'>
                            <button onClick={GoBack} className=' bg-gray-300 py-[6px] px-4 font-semibold rounded-md mr-2'>Skip</button>
                            <button onClick={SendCreatePasswordRequest} className=' bg-blue-500 py-[6px] px-4 text-white font-bold rounded-md'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePassword
