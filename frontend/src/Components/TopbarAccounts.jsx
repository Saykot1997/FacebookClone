import React from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { BsFillDoorOpenFill, BsFillInfoSquareFill } from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import ProfilePhoto from "../images/2.jpg"
import { useDispatch } from 'react-redux'
import { Logout } from '../Redux/UserSlice'

function TopbarAccounts() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const LogoutFunc = () => {

        dispatch(Logout());
        navigate('/login');
    }

    return (
        <div className=' absolute top-11 right-0 w-[360px] bg-white rounded-md p-3 shadow-lg shadow-gray-400 z-50 '>
            <div className='flex items-center p-2 hover:bg-gray-100 rounded-md'>
                <img src={ProfilePhoto} alt="" className=' h-14 w-14 mr-3 rounded-full object-cover shadow' />
                <div className=' '>
                    <p className=' font-semibold'>Saykot Hossain</p>
                    <p className=' text-sm text-gray-500'>See your profile</p>
                </div>
            </div>
            <hr className=' h-[2px] w-full my-2 bg-gray-300 ' />
            <div className=' flex items-center my-2 p-2 hover:bg-gray-100 rounded-md'>
                <div className=' h-10 w-10 mr-2 rounded-full bg-gray-200 flex justify-center items-center'>
                    <BsFillInfoSquareFill className=' text-lg' />
                </div>
                <div>
                    <p className=' font-semibold text-black'>Give feedback</p>
                    <p className=' text-xs text-gray-500'>Help us improve the new Facebook</p>
                </div>
            </div>

            <hr className=' h-[1px] w-full my-2 bg-gray-600 ' />

            <div className=' flex items-center justify-between p-2 hover:bg-gray-100 rounded-md'>
                <div className=' flex items-center'>
                    <div className=' h-10 w-10 mr-2 rounded-full bg-gray-200 flex justify-center items-center'>
                        <RiSettings5Fill className=' text-2xl' />
                    </div>
                    <p className=' font-semibold text-black'>Setting & privecy</p>
                </div>
                <div>
                    <MdOutlineArrowForwardIos className=' text-xl text-gray-500' />
                </div>
            </div>
            <div className=' flex items-center justify-between p-2 hover:bg-gray-100 rounded-md'>
                <div className=' flex items-center'>
                    <div className=' h-10 w-10 mr-2 rounded-full bg-gray-200 flex justify-center items-center'>
                        <AiFillQuestionCircle className=' text-2xl' />
                    </div>
                    <p className=' font-semibold text-black'>Help & Support</p>
                </div>
                <div>
                    <MdOutlineArrowForwardIos className=' text-xl text-gray-500' />
                </div>
            </div>
            <div className=' flex items-center justify-between p-2 hover:bg-gray-100 rounded-md'>
                <div className=' flex items-center'>
                    <div className=' h-10 w-10 mr-2 rounded-full bg-gray-200 flex justify-center items-center'>
                        <IoMdMoon className=' text-2xl' />
                    </div>
                    <p className=' font-semibold text-black'>Display & Assembly</p>
                </div>
                <div>
                    <MdOutlineArrowForwardIos className=' text-xl text-gray-500' />
                </div>
            </div>
            <div onClick={LogoutFunc} className=' flex items-center justify-between p-2 hover:bg-gray-100 rounded-md'>
                <div className=' flex items-center'>
                    <div className=' h-10 w-10 mr-2 rounded-full bg-gray-200 flex justify-center items-center'>
                        <BsFillDoorOpenFill className=' text-2xl' />
                    </div>
                    <p className=' font-semibold text-black'>Log Out</p>
                </div>
            </div>
            <div className=' px-3 py-1'>
                <p className=' text-gray-500 text-xs'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·  Meta © 2022</p>
            </div>
        </div>
    )
}

export default TopbarAccounts
