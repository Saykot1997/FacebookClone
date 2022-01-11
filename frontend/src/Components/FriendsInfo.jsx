import React from 'react'
import profilePhoto from "../images/2.jpg"
import { BsThreeDots } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { ImUserCheck } from 'react-icons/im';
import { MdWork } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';

function FriendsInfo({ isHover, friends }) {
    return (

        <div className={`${isHover ? " visible" : " hidden"} absolute ${friends ? " -bottom-36" : " top-9"} z-10 h-auto w-80 bg-white py-3 px-4 shadow-md shadow-gray-300 rounded-md`}>
            <div className='flex'>
                <div className=' w-[25%]'>
                    <img src={profilePhoto} alt="" className=' w-16 h-16 rounded-full object-cover' />
                </div>
                <div className=' w-[70%]'>
                    <p className=' font-bold text-xl'>Saykot</p>
                    <div className='flex items-center my-3'>
                        <HiUsers className=' text-xl text-gray-500 mr-2' />
                        <p className=' text-sm'>14 Mutal Friends</p>
                    </div>
                    <div className=' flex items-center mb-3'>
                        <MdWork className=' text-xl text-gray-500 mr-2' />
                        <p className=' text-sm'>Work at US-Bangla Hospital</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-2'>
                <button className=' w-[40%] py-1 bg-gray-200 font-semibold rounded-lg flex items-center justify-center mr-2'><ImUserCheck className=' mr-1' />Friends</button>
                <button className=' w-[40%] py-1 bg-blue-500 font-semibold rounded-lg flex items-center justify-center text-white mr-2'><BsMessenger className=' mr-1' />Message</button>
                <button className=' w-[20%] py-1 bg-gray-200 rounded-lg flex justify-center items-center'><BsThreeDots />
                </button>
            </div>
        </div>


    )
}

export default FriendsInfo
