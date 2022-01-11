import React from 'react'
import ProfilePhoto from '../images/2.jpg'
import { FcLike } from 'react-icons/fc'
import { AiFillEye, AiTwotoneLike } from 'react-icons/ai'

function LiveSingleVideo() {
    return (
        <div className=' relative w-full pb-6'>
            <div className='absolute top-2 left-2 flex'>
                <div className=' bg-red-500 text-white flex justify-center items-center px-2 rounded-md'><span>Live</span></div>
                <div className='flex items-center'>
                    <AiFillEye className=' text-white ml-2' />
                    <span className=' text-white text-xs' >145</span>
                </div>
            </div>

            <div className=' w-full h-40 rounded-md flex justify-center bg-black'>
                <img src={ProfilePhoto} alt="" className=' h-full' />
            </div>
            <div className=' flex mt-2'>
                <div>
                    <img src={ProfilePhoto} alt="" className=' mr-2 h-12 w-12 rounded-full object-cover' />
                </div>
                <div>
                    <p className=' font-semibold mb-1'>Saykots's video</p>
                    <p className=' text-sm text-gray-500 mb-1'>Saykots Hossain</p>
                    <div className='flex'>
                        <FcLike />
                        <div className=' ml-1 flex justify-center items-center rounded-full bg-blue-600 h-4 w-4'>
                            <AiTwotoneLike className=' text-xs text-white ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveSingleVideo
