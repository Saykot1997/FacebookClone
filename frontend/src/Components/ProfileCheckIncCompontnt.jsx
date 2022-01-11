import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { IoHome } from 'react-icons/io5'

function ProfileCheckIncomponent() {
    return (
        <div className=' w-full p-3 bg-white shadow shadow-gray-300 rounded-md'>
            <div className=' flex items-center justify-between px-2'>
                <h3 className=' font-bold text-xl'>Check-Inc</h3>
                <div className='flex items-center'>
                    <div className=' h-10 w-12 rounded bg-gray-100 flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
                        <BsThreeDots className=' text-lg' />
                    </div>
                </div>
            </div>
            <div className=' my-5 w-full'>
                <span className='text-blue-500 border-b-4 p-4 border-blue-500'>Recent</span>
            </div>
            <div className=' w-1/2 shadow-sm shadow-gray-300 p-3 flex items-center'>
                <div className=' h-20 w-20 rounded-md bg-gray-300 mr-2 flex items-center justify-center'>
                    <IoHome className=' text-3xl text-white' />
                </div>
                <div>
                    <p className=' font-bold '>Home</p>
                    <p className=' to-gray-400 text-sm'>Visited on May 3,2021</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCheckIncomponent
