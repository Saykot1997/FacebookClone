import React from 'react'
import { RiSettings5Fill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";
import { NavLink } from "react-router-dom"
import { FaUserFriends } from "react-icons/fa";

function FriendLeft({ Birthday, Home }) {

    return (
        <div>
            <div className=' flex justify-between items-center px-2 '>
                <h1 className=' font-bold text-2xl'>Friends</h1>
                <div className=' h-9 w-9 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center'>
                    <RiSettings5Fill className=' text-2xl' />
                </div>
            </div>
            <div className='w-full mt-2'>
                <ul>
                    <NavLink to="/friends" className={`${Home ? "bg-gray-200" : ""} friendLinksItems`}>
                        <div className={`${Home ? " bg-blue-500 friendLinksIconItems" : "friendLinksIconItems bg-gray-300"} `}>
                            <FaUserFriends className={`${Home ? "text-white" : ""} text-lg`} />
                        </div>
                        <span className="friendLinksTitle">Home</span>
                    </NavLink>
                    <NavLink to="/friends/request" className={"friendLinksItems"}>
                        <div className=' w-full flex items-center'>
                            <div className='friendLinksIconItems bg-gray-300'>
                                <i className='requestFriendsIcon' />
                            </div>
                            <span className='friendLinksTitle'>Friend Requests</span>
                        </div>
                        <div>
                            <MdArrowForwardIos className='friendLinksTitleArrow' />
                        </div>
                    </NavLink>
                    <NavLink to="/friends/suggetion" className={"friendLinksItems"}>
                        <div className=' w-full flex items-center'>
                            <div className='friendLinksIconItems bg-gray-300'>
                                <i className='suggetionFriendsIcon' />
                            </div>
                            <span className='friendLinksTitle'>Suggetions</span>
                        </div>
                        <div>
                            <MdArrowForwardIos className='friendLinksTitleArrow' />
                        </div>
                    </NavLink>
                    <NavLink to="/friends/all" className={"friendLinksItems"}>
                        <div className=' w-full flex items-center'>
                            <div className='friendLinksIconItems bg-gray-300'>
                                <i className='allFriendsIcon' />
                            </div>
                            <span className='friendLinksTitle'>All Friends</span>
                        </div>

                        <div>
                            <MdArrowForwardIos className='friendLinksTitleArrow' />
                        </div>
                    </NavLink>
                    <NavLink to="/friends/birthday" className={`${Birthday ? " bg-gray-200" : ""} friendLinksItems`}>
                        <div className={`${Birthday ? " bg-blue-500 friendLinksIconItems" : "friendLinksIconItems bg-gray-300"} `}>
                            <AiFillGift className={`${Birthday ? "text-white" : ""} text-2xl`} />
                        </div>
                        <span className='friendLinksTitle'>Birthdays</span>
                    </NavLink>

                    <NavLink to="/friends/customList" className={"friendLinksItems"}>
                        <div className=' flex w-full items-center'>
                            <div className='friendLinksIconItems'>
                                <i className='allFriendsIcon' />
                            </div>
                            <span className='friendLinksTitle'>Custom Lists</span>
                        </div>
                        <div>
                            <MdArrowForwardIos className='friendLinksTitleArrow' />
                        </div>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default FriendLeft 
