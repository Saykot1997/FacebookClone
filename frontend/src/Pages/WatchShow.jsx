import React from 'react'
import Topbar from '../Components/Topbar'
import WatchLeft from '../Components/WatchLeft'
import profilePhoto from "../images/2.jpg"

function WatchShow() {
    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <WatchLeft Show />
                <div className='w-[76.5%] h-full py-4 px-7 overflow-y-scroll'>
                    <div className='w-full'>
                        <div>
                            <p className=' font-bold text-lg'>Facebook Originals</p>
                        </div>
                        <div className=' w-full mt-3 grid grid-cols-6 gap-2'>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                            <div className=' h-48 rounded-md overflow-hidden cursor-pointer'>
                                <img src={profilePhoto} alt="" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchShow
