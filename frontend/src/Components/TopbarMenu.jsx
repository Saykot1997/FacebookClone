import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { IoCreate } from 'react-icons/io5'
import { MdEvent, MdGroups, MdOutlineWork, MdVideoCall } from 'react-icons/md'
import { RiFlag2Fill } from 'react-icons/ri'
import { GiTeePipe } from 'react-icons/gi'
import { BsFillHandbagFill, BsSearch } from 'react-icons/bs'
import { menuLinks } from "../Data";

function TopbarMenu() {
    return (
        <div className=' absolute top-11 -right-36 w-[610px] menubar bg-gray-50 rounded-lg px-5 py-2 shadow shadow-gray-500 z-50'>
            <h3 className=' font-bold text-2xl mb-2'>Menu</h3>
            <div className='flex justify-between menubarChild w-full'>
                <div className='basis-[62%] h-full '>
                    <div className=' w-full bg-white p-2 shadow shadow-gray-400 rounded-lg'>
                        <div className=' w-full relative p-2'>
                            <input type="text" placeholder='Search Menu' className=' bg-gray-100 pl-7 pr-3 py-1 placeholder:text-gray-600 rounded-2xl w-full' />
                            <BsSearch className=' absolute top-1/2 -translate-y-1/2 left-4 text-sm text-gray-500' />
                        </div>

                        <div className=' mt-4'>
                            <h2 className=' font-semibold'>Social</h2>
                            {
                                menuLinks.map((item, i) =>
                                    <div className=' flex justify-start p-2 hover:bg-gray-100 rounded-lg' key={i}>
                                        <img src={item.iconLink} alt="" className=' h-9' />
                                        <div className=' ml-3'>
                                            <p className=' font-semibold'>{item.name}</p>
                                            <p className=' text-xs text-gray-600'>{item.subTitle}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
                <div className=' basis-[35%] h-[93%] bg-white shadow shadow-gray-300 rounded-lg'>
                    <h4 className=' font-bold text-lg py-2 px-3'>Create</h4>
                    <div className='p-2'>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <IoCreate className=' text-2xl' />
                            </div>
                            <p className=' font-semibold'>Post</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <FaBookOpen className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Story</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <MdVideoCall className=' text-2xl' />
                            </div>
                            <p className=' font-semibold'>Room</p>
                        </div>

                        <hr className=' h-[1px] w-full bg-gray-500 my-2' />

                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <RiFlag2Fill className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Page</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <GiTeePipe className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Add</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <MdGroups className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Group</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <MdEvent className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Events</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <BsFillHandbagFill className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Marketplace Listing</p>
                        </div>
                        <div className=' flex items-center p-2 hover:bg-gray-100 rounded-md'>
                            <div className=' h-9 w-9 flex justify-center items-center mr-3 rounded-full bg-gray-200'>
                                <MdOutlineWork className=' text-xl' />
                            </div>
                            <p className=' font-semibold'>Jobs</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopbarMenu
