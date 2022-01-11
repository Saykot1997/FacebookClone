import React from 'react'
import Topbar from '../Components/Topbar'
import WatchLeft from '../Components/WatchLeft'
import emptyVideoPhoto from "../images/watchlist-empty.png"

function WatchLatestVideo() {
    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <WatchLeft LatestVideo />
                <div className='w-[76.5%] h-full overflow-y-scroll'>
                    <div className=' w-full h-[16%] bg-white shadow shadow-gray-300' >
                        <div className=' pl-32 pt-6'>
                            <p className=' text-gray-500'>{"Watch > Latest"}</p>
                            <p className=' text-2xl font-bold mt-1'>Latest Videos</p>
                        </div>
                    </div>
                    <div>
                        <h2 className=' text-xl font-bold pt-10 ml-80'>Latest Videos</h2>
                        <div className=' w-full flex justify-center items-center'>
                            <img src={emptyVideoPhoto} alt="" />
                            <span className=' text-gray-400 font-bold'>No Videos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchLatestVideo
