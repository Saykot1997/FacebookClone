import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';
import { MdFeaturedPlayList } from 'react-icons/md';
import { RiCompassDiscoverFill, RiSettings5Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import profilePhoto from "../images/2.jpg"

function GroupLeft({ feed, notifications, discover }) {


    const [isScrolled, setScrolled] = useState(false);

    const ShowScrool = (e) => {

        if (e.target.scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    return (
        <div onScroll={(e) => { ShowScrool(e) }} className=' h-full w-[23.5%] bg-white shadow-md shadow-gray-400 overflow-y-scroll friendSuggetionsScrollbar z-20'>
            <div className={`${isScrolled ? "border-b border-gray-300" : ""} p-3 sticky top-0 z-10 bg-white`}>
                <div className=' flex justify-between items-center'>
                    <p className=' text-2xl font-bold'>Groups</p>
                    <div className=' h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center'>
                        <RiSettings5Fill className=' text-2xl' />
                    </div>
                </div>
                <div className=' w-full mt-2 relative'>
                    <input type="text" placeholder='Search Groups' className=' w-full bg-gray-100 rounded-3xl px-7 focus:outline-0 py-[6px] placeholder:text-gray-800  ' />
                    <AiOutlineSearch className=' absolute bottom-1/2 translate-y-1/2 left-2 ' />
                </div>
            </div>

            <div className=' w-full'>
                <ul className=' w-full p-2'>

                    <NavLink to="/group" className={`${feed ? " bg-gray-100" : ""} groupLeftItems`}>
                        <div className={`${feed ? " bg-blue-500" : " bg-gray-200"} groupLeftIconBox`}>
                            <MdFeaturedPlayList className={`${feed ? " text-white" : ""} text-xl`} />
                        </div>
                        <span className=' font-semibold '>Your Feed</span>
                    </NavLink>

                    <NavLink to="/group/discover" className={`${discover ? " bg-gray-100" : ""} groupLeftItems`}>
                        <div className={`${discover ? " bg-blue-500" : " bg-gray-200"} groupLeftIconBox`}>
                            <RiCompassDiscoverFill className={`${discover ? " text-white" : ""} text-2xl`} />
                        </div>
                        <span className=' font-semibold'>Discover</span>
                    </NavLink>

                    <NavLink to="/group/notifications" className={`${notifications ? " bg-gray-100" : ""} groupLeftItems`}>
                        <div className={`${notifications ? " bg-blue-500" : " bg-gray-200"} groupLeftIconBox`}>
                            <BsFillBellFill className={`${notifications ? " text-white" : ""} text-xl`} />
                        </div>
                        <span className=' font-semibold'>Notifications</span>
                    </NavLink>

                    <div className=' w-full py-[6px] rounded-md cursor-pointer font-semibold bg-blue-100 mt-1 text-blue-500 flex justify-center items-center'>
                        <span>+ Create new group</span>
                    </div>
                    <hr className=' h-[1px] w-full bg-gray-500 mt-3' />
                </ul>
            </div>
            <div className='px-2'>
                <h3 className=' font-semibold text-lg px-2 my-1'>Groups you've joined</h3>

                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>

                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full rounded-lg hover:bg-gray-100 cursor-pointer py-2 px-2 flex items-center'>
                    <div className=' h-16 w-16 rounded-md mr-3 overflow-hidden'>
                        <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
                    </div>
                    <div>
                        <p className=' font-semibold'>Friends Hangout</p>
                        <div className='flex items-center'>
                            <div className=' w-2 h-2 rounded-full bg-blue-600 mr-2'></div>
                            <p className=' text-gray-400 text-xs'>1 post for you</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default GroupLeft
