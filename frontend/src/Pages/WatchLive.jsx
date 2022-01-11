import React from 'react'
import LiveSingleVideo from '../Components/LiveSingleVideo'
import LiveTopVideo from '../Components/LiveTopVideo'
import Topbar from '../Components/Topbar'
import WatchLeft from '../Components/WatchLeft'

function WatchLive() {
    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <WatchLeft Live />
                <div className='w-[73.5%] h-full pb-5 overflow-y-scroll'>
                    <div className=' w-full flex justify-center'>
                        <div className='w-[80%] h-full'>
                            <LiveTopVideo />
                            <div className=' w-full bg-white p-2 rounded-md shadow shadow-gray-300 mt-4'>
                                <p className=' font-bold mb-3 text-lg'>Live video for you</p>
                                <div className='w-full grid grid-cols-3 gap-1'>
                                    <LiveSingleVideo />
                                    <LiveSingleVideo />
                                    <LiveSingleVideo />
                                    <LiveSingleVideo />
                                    <LiveSingleVideo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchLive
