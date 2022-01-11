import React from 'react'

function LiveEvents() {
    return (
        <div className=' w-full bg-white shadow rounded-lg pt-3 px-4 pb-5 mt-3'>
            <div className=' flex justify-between'>
                <h2 className=' font-bold text-lg items-center hover:underline cursor-pointer'>Live Events</h2>
                <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All</span>
            </div>
            <div className=' flex mt-1'>
                <div className=' w-1/2 h-56 cursor-pointer hover:bg-gray-100 border border-gray-200 rounded-l-md mr-1 p-2 flex justify-center items-center'>
                    <div>
                        <p className=' text-center font-semibold'>Started School at Victoria University of Bangladesh</p>
                        <p className=' text-center text-gray-800 text-sm'>February 1, 2018</p>
                    </div>
                </div>
                <div className=' w-1/2 h-56 cursor-pointer hover:bg-gray-100 border border-gray-200 rounded-l-md mr-1 p-2 flex justify-center items-center'>
                    <div>
                        <p className=' text-center font-semibold'>Started School at Victoria University of Bangladesh</p>
                        <p className=' text-center text-gray-800 text-sm'>February 1, 2018</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LiveEvents
