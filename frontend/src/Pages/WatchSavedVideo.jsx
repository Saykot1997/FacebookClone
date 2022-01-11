import React from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import Topbar from '../Components/Topbar'
import WatchLeft from '../Components/WatchLeft'
import Photo from "../images/1.jpg"
import videoPhoto from "../images/2.jpg"

function WatchSavedVideo() {
    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <WatchLeft Saved />
                <div className='w-[76.5%] h-full overflow-y-scroll'>
                    <div className=' w-full h-[16%] bg-white shadow shadow-gray-300' >
                        <div className=' pl-32 pt-6'>
                            <p className=' text-gray-500'>{"Watch > Saved"}</p>
                            <p className=' text-2xl font-bold mt-1'>Saved Videos</p>
                        </div>
                    </div>

                    <div className=' w-full flex justify-center mt-20'>
                        <div className=' w-[80%] h-[200px] p-4 flex items-center bg-white shadow shadow-gray-300 rounded-md'>
                            <div className=' w-[30%] h-full rounded-md overflow-hidden'>
                                <img src={videoPhoto} alt="" className=' w-full h-full object-cover' />
                            </div>
                            <div className=' w-[70%] ml-5'>
                                <div className='flex items-center'>
                                    <img src={Photo} alt="" className=' w-10 h-10 rounded-full object-cover mr-2' />
                                    <div>
                                        <p className=' font-semibold'>Saykot Hossain</p>
                                        <p className=' text-gray-500 text-sm'>30 days ago</p>
                                    </div>
                                </div>
                                <p className=' font-semibold text-lg my-1'>Hello this is a test text of the video</p>
                                <div className='flex items-center'>
                                    <FcLike className=' cursor-pointer' />
                                    <div className=' ml-1 flex justify-center items-center rounded-full bg-blue-600 h-4 w-4'>
                                        <AiTwotoneLike className=' cursor-pointer text-xs text-white ' />
                                    </div>
                                    <p className=' text-gray-500 text-sm ml-1'><span>32k</span> . <span>380 comments</span> . <span>176k</span> views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchSavedVideo
