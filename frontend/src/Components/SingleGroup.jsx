import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import profilePhoto from "../images/2.jpg"

function SingleGroup() {
    return (
        <div className=' relative w-full rounded-lg shadow shadow-gray-400'>
            <img src={profilePhoto} alt="" className=' rounded-t-lg w-full h-44 object-cover' />
            <div className='p-3'>
                <p className=' font-semibold text-lg'>Science</p>
                <p className=' text-gray-500 text-sm'>223k members 12+ post 1 day</p>
                <div className=' flex mt-3'>
                    <div className=' flex mr-2'>
                        <img src={profilePhoto} alt="" className=' h-6 w-6 rounded-full object-cover' />
                        <img src={profilePhoto} alt="" className=' h-6 w-6 rounded-full object-cover' />
                        <img src={profilePhoto} alt="" className=' h-6 w-6 rounded-full object-cover' />
                    </div>
                    <p className=' text-sm text-gray-500'>Rifat Siyam and 3 more are members</p>
                </div>
                <div className=' w-full mt-5 py-1'>
                    <button className=' w-full py-[6px] bg-gray-200 hover:bg-gray-300 font-semibold rounded-md'>Join group</button>
                </div>
            </div>
            <div className=' absolute top-2 cursor-pointer right-2 flex justify-center items-center h-9 w-9 rounded-full bg-black bg-opacity-50 '>
                <AiOutlineClose className=' text-white text-lg' />
            </div>
        </div>
    )
}

export default SingleGroup
