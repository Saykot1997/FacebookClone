import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import video from "../videos/1.mp4"

function LiveTopVideo() {
    return (
        <div className=' relative w-full bg-white shadow shadow-gray-300'>
            <div className=' absolute top-2 left-2 bg-red-500 text-white flex justify-center items-center px-2 rounded-md'><span>Live</span></div>
            <div className=' w-full my-2 bg-black'>
                <video src={video} loop muted controls autoPlay isMuted={false} className=' w-full h-96'></video>
            </div>
            <div className=' w-full flex justify-between items-center p-2'>
                <div className='flex'>
                    <div className='flex items-center text-gray-500 px-3 cursor-pointer py-1 hover:bg-gray-100 rounded-md'>
                        <AiOutlineLike className=' text-lg mr-1' />
                        <span className=' text-sm font-semibold'>Like</span>
                    </div>
                    <div className='flex items-center text-gray-500 px-3 cursor-pointer py-1 hover:bg-gray-100 rounded-md'>
                        <FaRegComment className=' text-lg mr-1' />
                        <span className=' text-sm font-semibold'>comment</span>
                    </div>
                    <div className='flex items-center text-gray-500 px-3 cursor-pointer py-1 hover:bg-gray-100 rounded-md'>
                        <RiShareForwardLine className=' text-lg mr-1' />
                        <span className=' text-sm font-semibold'>Share</span>
                    </div>
                </div>
                <div className='flex text-xs text-gray-600'>
                    <p className=' mr-2 hover:underline cursor-pointer'>2.4M</p>
                    <p className=' mr-2 hover:underline cursor-pointer'>9.2k Comments</p>
                    <p className='hover:underline cursor-pointer'>690K View</p>
                </div>
            </div>
        </div>
    )
}

export default LiveTopVideo
