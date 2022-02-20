import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { MdGroup } from 'react-icons/md';
import { BsPlayBtn } from 'react-icons/bs';
import { AiOutlineShop } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { FaFacebookMessenger } from 'react-icons/fa';
import { GoBell } from 'react-icons/go';
import { BsCaretDownFill } from 'react-icons/bs';
import ProfilePhoto from "../images/userAvater.png"
import FBIcon from "../images/icon.png";
import { NavLink } from "react-router-dom";
import TopbarAccounts from './TopbarAccounts';
import TopbarNotifications from './TopbarNotifications';
import TopbarMassenger from './TopbarMassenger';
import TopbarMenu from './TopbarMenu';
import { useSelector } from 'react-redux';
import { Host } from '../Data';


function Topbar({ Profile }) {

    const user = useSelector((state) => state.User.User);
    const [showAccounts, setShowAccounts] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessenger, setShowMessenger] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const friendRequests = useSelector((state) => state.Friends.FriendsRequests);


    const ShowAccounts = () => {

        if (!showAccounts) {
            setShowAccounts(true);
            setShowNotifications(false);
            setShowMessenger(false);
            setShowMenu(false);
        } else {
            setShowAccounts(false)
        }
    }

    const ShowNotifications = () => {

        if (!showNotifications) {
            setShowAccounts(false);
            setShowNotifications(true);
            setShowMessenger(false);
            setShowMenu(false);
        } else {
            setShowNotifications(false)
        }
    }
    const ShowMessenger = () => {

        if (!showMessenger) {
            setShowAccounts(false);
            setShowNotifications(false);
            setShowMessenger(true);
            setShowMenu(false);
        } else {
            setShowMessenger(false)
        }

    }

    const ShowMenu = () => {

        if (!showMenu) {
            setShowMenu(true);
            setShowAccounts(false);
            setShowNotifications(false);
            setShowMessenger(false);

        } else {
            setShowMenu(false)
        }
    }

    return (
        <div className=' flex h-14 w-full sticky top-0 bg-white shadow-md items-center pr-5 z-50'>
            <div className="basis-4/12 h-full py-2 px-4 flex items-center">
                <NavLink to='/' className=' h-full'><img src={FBIcon} alt="" className=' h-full mr-2 ' /></NavLink>
                <div className=' relative'>
                    <input type="text" placeholder='Search Facebook' className='rounded-3xl focus:outline-0 focus:pl-4 bg-gray-100 pl-2 py-2 pr-12 placeholder:pl-6 text-[15px] text-black' />
                    <AiOutlineSearch className='absolute left-2 top-3 text-xl text-gray-600' />
                </div>
            </div>
            <div className=" basis-4/12 h-full grid grid-cols-5 items-center">
                <NavLink to='/' className={({ isActive }) => isActive ? " text-blue-500 h-full border-b-4 border-blue-500" : " relative group h-full text-gray-500"}>
                    <div className="h-full p-1">
                        <div className='w-full h-full hover:bg-gray-200 flex items-center justify-center rounded-lg ' >
                            <AiFillHome className=' text-[28px]' />
                        </div>
                        <div className='TopHoverBox'><span className=' text-white text-xs'>Home</span></div>
                    </div>
                </NavLink>
                <NavLink to='/friends' className={({ isActive }) => isActive ? " text-blue-500 h-full border-b-4 border-blue-500" : " relative group h-full text-gray-500"}>
                    <div className='h-full p-1'>
                        <div className='topbarItems relative'>
                            <MdGroup className=' text-[28px]' />
                            {
                                friendRequests.length > 0 &&
                                <div className=' w-6 h-6 rounded-full bg-red-500 text-white absolute top-1 right-4 flex justify-center items-center'>{friendRequests.length}</div>
                            }
                        </div>
                        <div className='TopHoverBox'>
                            <span className=' text-white text-xs'>Friends</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/watch' className={({ isActive }) => isActive ? " text-blue-500 h-full border-b-4 border-blue-500" : " relative group h-full text-gray-500"}>
                    <div className=' h-full p-1'>
                        <div className='topbarItems'>
                            <BsPlayBtn className=' text-[28px]' />
                        </div>
                        <div className='TopHoverBox'><span className=' text-white text-xs'>Videos</span></div>

                    </div>
                </NavLink>
                <NavLink to='/marketplace' className={({ isActive }) => isActive ? " text-blue-500 h-full border-b-4 border-blue-500" : " relative group h-full text-gray-500"}>
                    <div className=' h-full p-1'>
                        <div className='topbarItems'>
                            <AiOutlineShop className=' text-[28px]' />
                        </div>
                        <div className='TopHoverBox'><span className=' text-white text-xs'>Marketplace</span></div>
                    </div>
                </NavLink>
                <NavLink to='/group' className={({ isActive }) => isActive ? " text-blue-500 h-full border-b-4 border-blue-500" : " relative group h-full text-gray-500"}>
                    <div className=' h-full p-1'>
                        <div className='topbarItems'>
                            <MdGroups className=' text-[28px]' />
                        </div>
                        <div className="TopHoverBox"><span className=' text-white text-xs'>Group</span></div>
                    </div>
                </NavLink>
            </div>
            <div className="basis-4/12 h-full flex items-center justify-end">
                <NavLink to="/profile" className='h-full flex items-center'>
                    <div className={`${Profile ? " bg-blue-100 hover:bg-blue-200" : ""} flex items-center mr-3 px-1 hover:bg-gray-100 rounded-2xl`}>
                        <img src={user.profilePicture ? `${Host}/images/${user.profilePicture}` : ProfilePhoto} alt="" className=' mr-1 h-8 w-8 rounded-full object-cover' />
                        <p className={`${Profile ? "text-blue-600" : "text-black"} pr-1 font-semibold capitalize `}>{user.firstName}</p>
                    </div>
                </NavLink>
                <div className={`group TopRightBox ${showMenu ? " bg-blue-100" : " bg-gray-200"}`} onClick={ShowMenu}>
                    <CgMenuGridO className={`${showMenu ? "text-blue-500" : ""} text-2xl`} />
                    {
                        !showMenu && <div className='TopRightHoverBox left-0'><span className=' text-white text-xs'>Menu</span></div>
                    }
                    {
                        showMenu && <TopbarMenu />
                    }
                </div>
                <div className={`group TopRightBox ${showMessenger ? " bg-blue-100" : " bg-gray-200"}`} onClick={ShowMessenger}>
                    <FaFacebookMessenger className={`${showMessenger ? "text-blue-500" : ""} text-lg`} />
                    {
                        !showMessenger && <div className='TopRightHoverBox left-0'><span className=' text-white text-xs'>Messanger</span></div>
                    }
                    {
                        showMessenger && <TopbarMassenger />
                    }
                </div>
                <div className={`group TopRightBox ${showNotifications ? " bg-blue-100" : " bg-gray-200"}`} onClick={ShowNotifications}>
                    <GoBell className={`${showNotifications ? "text-blue-500" : ""} text-lg`} />
                    {
                        friendRequests.length > 0 &&
                        <div className=' w-6 h-6 rounded-full bg-red-500 text-white absolute -top-2 -right-2 flex justify-center items-center'>{friendRequests.length}</div>
                    }
                    {
                        !showNotifications && <div className='TopRightHoverBox left-0'><span className=' text-white text-xs'>Notifications</span></div>
                    }
                    {
                        showNotifications && <TopbarNotifications />
                    }
                </div>
                <div className={`group TopRightBox ${showAccounts ? " bg-blue-100" : " bg-gray-200"}`} onClick={ShowAccounts}>
                    <BsCaretDownFill className={`${showAccounts ? "text-blue-500" : ""} text-lg`} />
                    {
                        !showAccounts && <div className='TopRightHoverBox -left-3'><span className=' text-white text-xs'>Accounts</span></div>
                    }
                    {
                        showAccounts && <TopbarAccounts />
                    }
                </div>
            </div>
        </div>
    )
}

export default Topbar
