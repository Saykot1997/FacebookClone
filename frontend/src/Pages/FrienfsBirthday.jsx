import React from 'react'
import FriendLeft from '../Components/FriendLeft'
import Topbar from '../Components/Topbar'
import ProfilePhoto from "../images/2.jpg"
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import SingleBirthdayPeople from '../Components/SingleBirthdayPeople'

function FriendsBirthday() {
    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <div className=' h-full w-[23.5%] bg-white shadow-md shadow-gray-400 p-2'>
                    <FriendLeft Birthday />
                </div>
                <div className='w-[76.5%] h-full overflow-y-scroll'>
                    <div className=' w-full h-full flex justify-center overflow-x-scroll py-3'>
                        <div className=' w-[43%]'>

                            {/* content */}

                            <div className=' w-full rounded-md my-3 bg-white shadow shadow-gray-300 p-3'>
                                <p className=' text-xl font-bold'>Recent Birthdays</p>
                                <div className=' flex items-center mt-3 w-full '>
                                    <div className=' mr-2'>
                                        <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    </div>
                                    <div className=' w-full'>
                                        <p className=' font-semibold'>Jhon Doe</p>
                                        <div className=' w-full flex justify-between'>
                                            <p className=' text-xs text-gray-600'>December 28, 1998</p>
                                            <p className=' text-xs text-gray-600 '>25 years old</p>
                                        </div>
                                        <div className=' w-full mt-2 relative'>
                                            <input type="text" placeholder='Write on his timeline...' className=' w-full py-[6px] px-3 rounded-3xl bg-gray-100 placeholder:text-sm placeholder:text-gray-500 focus:outline-0' />
                                            <BsFillEmojiSmileFill className=' text-gray-400 absolute text-lg right-2 bottom-1/2 translate-y-1/2' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* content */}

                            {/* content */}

                            <div className='w-full rounded-md my-3 bg-white shadow shadow-gray-300 p-3'>

                                <p className=' text-lg font-bold'>Upcoming Birthday</p>

                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                                <SingleBirthdayPeople />
                            </div>

                            {/* content */}


                            {/* content */}

                            <div className='w-full rounded-md my-3 bg-white shadow shadow-gray-300 p-3'>

                                <p className=' font-semibold'>January</p>
                                <p>Rohim , Riyad and 12 peoples birthday</p>
                                <div className='p-3 grid grid-cols-6 gap-2'>
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                    <img src={ProfilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                                </div>
                            </div>
                            {/* content */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsBirthday
