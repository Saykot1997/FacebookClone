import React from 'react'
import GroupLeft from '../Components/GroupLeft'
import Topbar from '../Components/Topbar'
import profilePhoto from "../images/2.jpg"
import Post from '../Components/Post'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

function Group() {
    return (
        <div>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <GroupLeft feed />
                <div className='w-[76.5%] bg-gray-100 flex justify-center px-8'>
                    <div className=' w-[80%] mt-4 flex justify-between'>

                        <div className=' basis-[57%] h-full overflow-y-scroll ProfileScrollbar'>
                            <div className=' p-4 bg-white shadow shadow-gray-300 w-full rounded-lg'>
                                <p className=' font-semibold'>New for you</p>
                                <div className=' flex items-center mt-2'>
                                    <img src={profilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover mr-3' />
                                    <div>
                                        <p className=' font-semibold'>Eleas Saykot <span className=' text-gray-500 text-sm'>post in</span> Friend hangout</p>
                                        <div className='flex items-center'>
                                            <div className=' h-2 w-2 rounded-full bg-blue-600 mr-2'></div>
                                            <p className=' text-blue-500 text-xs'>19 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-3'>
                                <h2 className=' to-gray-400 font-semibold -mb-2'>Recent activity</h2>
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                            </div>
                        </div>

                        <div className='basis-[41%] h-full'>
                            <div className='w-full bg-white rounded-lg shadow shadow-gray-300 p-3'>
                                <div className=' flex justify-between '>
                                    <p className=' font-semibold text-[17px]'>Suggested for you</p>
                                    <p className=' text-blue-500'>See more</p>
                                </div>
                                <p className=' text-gray-500'>Group you might be interested in.</p>

                                <div className=' px-5 py-3'>
                                    <div className=' relative w-full rounded-lg shadow shadow-gray-300'>
                                        <img src={profilePhoto} alt="" className=' rounded-t-lg w-full h-36 object-cover' />
                                        <div className='p-3'>
                                            <p className=' font-semibold text-lg'>Science</p>
                                            <p className=' text-gray-500 text-sm'>223k members 12+ post 1 day</p>
                                            <div className=' flex mt-3'>
                                                <div className=' flex mr-2'>
                                                    <img src={profilePhoto} alt="" className=' h-6 w-6 rounded-full object-cover' />
                                                    <img src={profilePhoto} alt="" className=' h-6 w-6 rounded-full object-cover' />
                                                    <img src={profilePhoto} alt="" className=' h-6 w-6 rounded-full object-cover' />
                                                </div>
                                                <p className=' text-sm text-gray-500'>Rifat Siyam and 3 more are members</p>
                                            </div>
                                            <div className=' w-full mt-2 py-1'>
                                                <button className=' w-full py-[6px] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md'>join group</button>
                                            </div>
                                        </div>
                                        <div className=' z-10 absolute top-1/2 -translate-y-1/2 -right-5 hover:bg-gray-100 h-12 w-12 bg-white cursor-pointer shadow shadow-gray-500 rounded-full flex justify-center items-center'>
                                            <MdOutlineArrowForwardIos className=' text-gray-600 text-xl ' />
                                        </div>
                                        <div className=' absolute top-2 cursor-pointer right-2 flex justify-center items-center h-9 w-9 rounded-full bg-black bg-opacity-50 '>
                                            <AiOutlineClose className=' text-white text-lg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group
