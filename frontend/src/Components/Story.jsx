import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import ProfilePhoto from "../images/1.jpg";
import photo from "../images/2.jpg"

export default function Story() {
    return (
        <div className=' w-ful mb-4 relative'>
            <div className='flex justify-between w-full h-52'>

                {/* single story start */}

                <div className='group basis-[18.8%] h-full cursor-pointer bg-white shadow rounded-xl relative'>
                    <div className=' h-3/4 w-full overflow-hidden rounded-t-xl relative'>
                        <img src={ProfilePhoto} alt="" className=' transition-all duration-500 group-hover:scale-105 w-full h-full object-cover' />
                        <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-10 '></div>
                    </div>
                    <div className=' h-1/4 w-full flex flex-col justify-end items-center relative'>
                        <span className=' inline-block text-[13px] text-gray-800 font-semibold pb-2'>Create Story</span>
                        <div className=' absolute h-10 w-10 bg-blue-500 -top-5 left-2/4 translate-x-[-50%] flex items-center justify-center rounded-full font-semibold text-white text-2xl border-4 border-white'> <span className=' -mt-1'>+</span></div>
                    </div>
                    <div className=' opacity-0 group-hover:opacity-10 absolute h-full w-full bg-black rounded-xl top-0 left-0'></div>
                </div>

                {/* single story end */}

                {/* single story start */}

                <div className='group basis-[18.8%] h-full cursor-pointer bg-white shadow rounded-xl overflow-hidden relative'>
                    <div className=' z-10 absolute h-10 w-10 rounded-full top-2 left-1 border-4 border-blue-500 '>
                        <img src={ProfilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                    </div>
                    <img src={photo} alt="" className=' h-full w-full object-cover' />
                    <div className=' absolute w-full bottom-3 left-0 z-10 text-white text-center text-sm font-semibold'>
                        <p className=''>Jone Doe</p>
                    </div>
                    <div className=' absolute h-full w-full bg-black opacity-20 top-0 left-0'></div>
                    <div className=' opacity-0 group-hover:opacity-10 absolute h-full w-full bg-black rounded-xl top-0 left-0'></div>
                </div>

                {/* single story end */}
                {/* single story start */}

                <div className='group basis-[18.8%] h-full cursor-pointer bg-white shadow rounded-xl overflow-hidden relative'>
                    <div className=' z-10 absolute h-10 w-10 rounded-full top-2 left-1 border-4 border-blue-500 '>
                        <img src={ProfilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                    </div>
                    <img src={photo} alt="" className=' h-full w-full object-cover' />
                    <div className=' absolute w-full bottom-3 left-0 z-10 text-white text-center text-sm font-semibold'>
                        <p className=''>Jone Doe</p>
                    </div>
                    <div className=' absolute h-full w-full bg-black opacity-20 top-0 left-0'></div>
                    <div className=' opacity-0 group-hover:opacity-10 absolute h-full w-full bg-black rounded-xl top-0 left-0'></div>
                </div>

                {/* single story end */}
                {/* single story start */}

                <div className='group basis-[18.8%] h-full cursor-pointer bg-white shadow rounded-xl overflow-hidden relative'>
                    <div className=' z-10 absolute h-10 w-10 rounded-full top-2 left-1 border-4 border-blue-500 '>
                        <img src={ProfilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                    </div>
                    <img src={photo} alt="" className=' h-full w-full object-cover' />
                    <div className=' absolute w-full bottom-3 left-0 z-10 text-white text-center text-sm font-semibold'>
                        <p className=''>Jone Doe</p>
                    </div>
                    <div className=' absolute h-full w-full bg-black opacity-20 top-0 left-0'></div>
                    <div className=' opacity-0 group-hover:opacity-10 absolute h-full w-full bg-black rounded-xl top-0 left-0'></div>
                </div>

                {/* single story end */}
                {/* single story start */}

                <div className='group basis-[18.8%] h-full cursor-pointer bg-white shadow rounded-xl overflow-hidden relative'>
                    <div className=' z-10 absolute h-10 w-10 rounded-full top-2 left-1 border-4 border-blue-500 '>
                        <img src={ProfilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                    </div>
                    <img src={photo} alt="" className=' h-full w-full object-cover' />
                    <div className=' absolute w-full bottom-3 left-0 z-10 text-white text-center text-sm font-semibold'>
                        <p className=''>Jone Doe</p>
                    </div>
                    <div className=' absolute h-full w-full bg-black opacity-20 top-0 left-0'></div>
                    <div className=' opacity-0 group-hover:opacity-10 absolute h-full w-full bg-black rounded-xl top-0 left-0'></div>
                </div>

                {/* single story end */}

            </div>
            <div className=' absolute top-1/2 -right-5 shadow-md shadow-gray-500 cursor-pointer h-9 w-9 bg-white hover:bg-gray-200 rounded-full flex justify-center items-center -translate-y-1/2'>
                <BiRightArrowAlt className=' text-xl text-gray-600' />
            </div>
        </div>
    )
}
