import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { ImPlay } from 'react-icons/im'
import { MdVideoCameraBack } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { GiClapperboard } from 'react-icons/gi'
import { BsFillBookmarkPlusFill, BsFillPlayCircleFill } from 'react-icons/bs'
import { BiRocket } from 'react-icons/bi'

function WatchLeft({ Home, Live, Show, Saved, Explore, LatestVideo }) {
    return (
        <div className=' z-10 h-full w-[23.5%] bg-white shadow-md shadow-gray-400 p-2'>
            <div className=' flex justify-between items-center p-1'>
                <p className=' text-2xl font-bold'>Watch</p>
                <div className=' h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center'>
                    <RiSettings5Fill className=' text-2xl' />
                </div>
            </div>
            <div className=' w-full mt-2 relative'>
                <input type="text" placeholder='Search Videos' className=' w-full bg-gray-100 rounded-3xl px-7 focus:outline-0 py-[6px] placeholder:text-gray-800  ' />
                <AiOutlineSearch className=' absolute bottom-1/2 translate-y-1/2 left-2 ' />
            </div>

            <div className=' w-full mt-2'>
                <ul className=' w-full p-1'>
                    <NavLink to="/watch" className={`${Home ? " bg-gray-100" : ""} w-full flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 `}>
                        <div className={`${Home ? " bg-blue-500 text-white" : ""} h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center mr-2`}>
                            <ImPlay className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Home</span>
                    </NavLink>
                    <NavLink to="/watch/live" className={`${Live ? " bg-gray-100" : ""} w-full flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 `}>
                        <div className={`${Live ? " bg-red-500 text-white" : ""} h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center mr-2`}>
                            <MdVideoCameraBack className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Live</span>
                    </NavLink>
                    <NavLink to="/watch/show" className={`${Show ? " bg-gray-100" : ""} w-full flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 `}>
                        <div className={`${Show ? " bg-green-500 text-white" : ""} h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center mr-2`}>
                            <GiClapperboard className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Show</span>
                    </NavLink>
                    <NavLink to="/watch" className={`${Explore ? " bg-gray-100" : ""} w-full flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 `}>
                        <div className={`${Explore ? " bg-indigo-500 text-white" : ""} h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center mr-2`}>
                            <BiRocket className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Explore</span>
                    </NavLink>
                    <NavLink to="/watch/saved" className={`${Saved ? " bg-gray-100" : ""} w-full flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 `}>
                        <div className={`${Saved ? " bg-yellow-500 text-white" : ""} h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center mr-2`}>
                            <BsFillBookmarkPlusFill className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Saved Video</span>
                    </NavLink>
                </ul>
            </div>
            <div className=' mt-3'>
                <hr className=' h-[1px] w-full bg-gray-700' />
            </div>
            <div className=' w-full'>
                <div className=' w-full flex justify-between p-2'>
                    <p className=' font-semibold text-lg'>Your Wishlists</p>
                    <p className=' text-blue-500 cursor-pointer'>Manege</p>
                </div>
                <NavLink to="/watch/latestVideo" className={`${LatestVideo ? " bg-gray-100" : ""} w-full flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 `}>
                    <BsFillPlayCircleFill className=' text-4xl mr-3 text-sky-300' />
                    <span className=' font-semibold'>Latest Video</span>
                </NavLink>
            </div>
        </div>
    )
}

export default WatchLeft
