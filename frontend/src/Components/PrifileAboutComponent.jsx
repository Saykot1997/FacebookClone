import React from 'react'
import ProfileAboutLeft from './ProfileAboutLeft';
import { MdWork } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { BsTelephoneFill, BsThreeDots } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { IoHome, IoLocationSharp } from 'react-icons/io5';

function PrifileAboutComponent() {
    return (
        <div className=' flex w-full py-2 px-1 bg-white rounded-md shadow shadow-gray-300 mb-3'>
            <ProfileAboutLeft overview />
            <div className=' basis-[67%]'>

                <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                    <div className=' flex'>
                        <div>
                            <MdWork className=' mt-1 mr-2 text-2xl text-gray-500' />
                        </div>
                        <div>
                            <p>Work at <span className=' font-semibold'>US-Bangla Medical College Hospital</span></p>
                            <p className=' text-xs text-gray-500'>December 1, 2016 to present</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <BiWorld className=' text-gray-500 mr-3 text-lg' />
                        <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                            <BsThreeDots className=' text-xl' />
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                    <div className=' flex'>
                        <div>
                            <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                        </div>
                        <div>
                            <p>Studies English at Victoria University of Bangladesh</p>
                            <p className=' text-xs text-gray-500'>Started in 2018</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <BiWorld className=' text-gray-500 mr-3 text-lg' />
                        <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                            <BsThreeDots className=' text-xl' />
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                    <div className=' flex'>
                        <div>
                            <IoHome className=' mt-1 mr-2 text-2xl text-gray-500' />
                        </div>
                        <div>
                            <p>Lives in <span className=' font-semibold'>Narayanganj</span></p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <BiWorld className=' text-gray-500 mr-3 text-lg' />
                        <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                            <BsThreeDots className=' text-xl' />
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                    <div className=' flex'>
                        <div>
                            <IoLocationSharp className=' mt-1 mr-2 text-2xl text-gray-500' />
                        </div>
                        <div>
                            <p>From <span className=' font-semibold'>Dhaka, Bangladesh</span></p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <BiWorld className=' text-gray-500 mr-3 text-lg' />
                        <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                            <BsThreeDots className=' text-xl' />
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                    <div className=' flex'>
                        <div>
                            <BsTelephoneFill className=' mt-1 mr-2 text-2xl text-gray-500' />
                        </div>
                        <div>
                            <p>01234567891</p>
                            <p className=' text-xs text-gray-500'>Mobile</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <BiWorld className=' text-gray-500 mr-3 text-lg' />
                        <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                            <BsThreeDots className=' text-xl' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PrifileAboutComponent

