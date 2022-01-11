import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

function ProfileVideoComponent() {
    return (
        <div className=' w-full p-3 bg-white shadow shadow-gray-300 rounded-md mb-3'>
            <div className=' flex items-center justify-between px-2'>
                <h3 className=' font-bold text-xl'>Videos</h3>
                <div className='flex items-center'>
                    <div className=' h-10 w-12 rounded bg-gray-100 flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
                        <BsThreeDots className=' text-lg' />
                    </div>
                </div>
            </div>
            <div className=' text-center'>
                <p className=' text-gray-500 text-2xl my-7 font-bold'>No activity to show</p>
            </div>
        </div>
    )
}

export default ProfileVideoComponent
