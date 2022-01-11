import React from 'react';
import { MdWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineWifi } from 'react-icons/ai';

function Intro() {
    return (
        <div className=' w-full bg-white shadow rounded-lg p-3 pb-1'>
            <h3 className=' font-bold text-lg'>Intro</h3>
            <p className=' mt-2 text-center text-gray-700'>I am just a ordiniary boy</p>
            <button className=' bg-gray-200 mt-3 rounded-md font-semibold text-sm hover:bg-gray-300 w-full py-2'>Edit Bio</button>
            <div className='flex my-4 px-1 text-gray-700'>
                <MdWork className=' text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>Works at <span className=' hover:underline font-semibold'>US-Bangla Madical Collage Hospotal</span></p>
            </div>
            <div className='flex my-4 px-1 text-gray-700'>
                <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>Studied at Bulta High School and Collage</p>
            </div>
            <div className='flex my-4 px-1 text-gray-700'>
                <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>Studies at Victoria University of Bangladesh</p>
            </div>
            <div className='flex my-4 px-1 text-gray-700'>
                <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>Went to <span className=' hover:underline font-semibold'>Parabo Ideal High School</span></p>
            </div>
            <div className='flex my-4 px-1 text-gray-700'>
                <ImHome3 className=' text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>Live in <span className=' hover:underline font-semibold'>Narayangonj</span></p>
            </div>
            <div className='flex my-4 px-1 text-gray-700'>
                <MdLocationPin className=' text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>From <span className=' hover:underline font-semibold'>Dhaka , Bangladesh</span></p>
            </div>
            <div className='flex my-4 px-1 text-gray-700'>
                <AiOutlineWifi className=' rotate-[52deg] text-2xl text-gray-400 mr-2 ' />
                <p className=' text-sm'>Followed by <span className=' hover:underline font-semibold'>128 peoples</span></p>
            </div>
            <div className=' group relative w-full rounded-lg bg-gray-200 py-1 flex justify-center overflow-hidden cursor-pointer my-3'>
                <button className=' font-semibold text-sm py-1'>Edite Details</button>
                <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
            </div>
            <div className=' group relative w-full rounded-lg bg-gray-200 py-1 flex justify-center overflow-hidden cursor-pointer my-3'>
                <button className=' font-semibold text-sm py-1'>Add Hobbies</button>
                <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
            </div>
            <div className=' group relative w-full rounded-lg bg-gray-200 py-1 flex justify-center overflow-hidden cursor-pointer my-3'>
                <button className=' font-semibold text-sm py-1'>Add Featured</button>
                <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
            </div>
        </div>
    )
}

export default Intro
