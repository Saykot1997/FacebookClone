import React from 'react';
import photo2 from "../images/2.jpg"

function Photos() {
    return (
        <div className=' w-full bg-white shadow rounded-lg p-3 mt-3'>

            <div className=' flex justify-between'>
                <h2 className=' font-bold text-lg items-center hover:underline cursor-pointer'>Photos</h2>
                <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Photos</span>

            </div>

            <div className=' grid grid-cols-3 gap-2 rounded-lg mt-2 overflow-hidden'>
                <div className='h-24 cursor-pointer'>
                    <img src={photo2} alt="" className=' h-full w-full object-cover' />
                </div>
                <div className='h-24 cursor-pointer'>
                    <img src={photo2} alt="" className=' h-full w-full object-cover' />
                </div>
                <div className='h-24 cursor-pointer'>
                    <img src={photo2} alt="" className=' h-full w-full object-cover' />
                </div>
                <div className='h-24 cursor-pointer'>
                    <img src={photo2} alt="" className=' h-full w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Photos
