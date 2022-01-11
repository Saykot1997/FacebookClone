import React, { useState } from 'react'
import { AiFillCar, AiFillHeart, AiOutlineSearch, AiOutlineShop } from 'react-icons/ai'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { GiBeachBag, GiPriceTag, GiSittingDog } from 'react-icons/gi'
import { BsFillBellFill } from 'react-icons/bs'
import { FaGamepad, FaHome } from 'react-icons/fa'
import { GoDeviceMobile } from 'react-icons/go'

function MarketPlaceLeft({ Home, Notification, Index, Selling, Buying }) {


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
                <div className=' flex justify-between items-center p-1'>
                    <p className=' text-2xl font-bold'>Marketplace</p>
                    <div className=' h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center'>
                        <RiSettings5Fill className=' text-2xl' />
                    </div>
                </div>
                <div className=' w-full mt-2 relative'>
                    <input type="text" placeholder='Search Marketplace' className=' w-full bg-gray-100 rounded-3xl px-7 focus:outline-0 py-[6px] placeholder:text-gray-800  ' />
                    <AiOutlineSearch className=' absolute bottom-1/2 translate-y-1/2 left-2 ' />
                </div>
            </div>

            <div className=' w-full'>
                <ul className=' w-full p-1'>
                    <NavLink to="/marketplace" className={`${Home ? " bg-gray-100" : ""} marketplaceLinksItem `}>
                        <div className={`${Home ? " bg-blue-500 text-white" : "bg-gray-200"} marketplaceLinksDiv`}>
                            <AiOutlineShop className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Brouse All</span>
                    </NavLink>
                    <NavLink to="/marketplace/notifications" className={`${Notification ? " bg-gray-100" : ""} marketplaceLinksItem  `}>
                        <div className={`${Notification ? " bg-blue-500 text-white" : "bg-gray-200"} marketplaceLinksDiv`}>
                            <BsFillBellFill className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Notifications</span>
                    </NavLink>
                    <NavLink to="/marketplace/index" className={`${Index ? " bg-gray-100" : ""} marketplaceLinksItem  `}>
                        <div className={`${Index ? " bg-blue-500 text-white" : "bg-gray-200"} marketplaceLinksDiv`}>
                            <MdOutlineBedroomParent className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Inbox</span>
                    </NavLink>
                    <NavLink to="/marketplace/buying" className={`${Buying ? " bg-gray-100" : ""} marketplaceLinksItem  `}>
                        <div className={`${Buying ? " bg-blue-500 text-white" : "bg-gray-200"} marketplaceLinksDiv`}>
                            <GiBeachBag className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Buying</span>
                    </NavLink>
                    <NavLink to="/marketplace/selling" className={`${Selling ? " bg-gray-100" : ""} marketplaceLinksItem  `}>
                        <div className={`${Selling ? " bg-blue-500 text-white" : "bg-gray-200"} marketplaceLinksDiv`}>
                            <GiPriceTag className=' text-xl' />
                        </div>
                        <span className=' font-semibold'>Selling</span>
                    </NavLink>
                    <div className=' w-full py-[6px] rounded-md cursor-pointer font-semibold bg-blue-100 mt-1 text-blue-500 flex justify-center items-center'>
                        <span>+ Create new listing</span>
                    </div>
                </ul>
            </div>
            <div className=' border-y px-2 py-3 mt-2'>
                <h3 className=' font-semibold '>Filters</h3>
                <p className=' text-blue-500 mt-1 font-semibold'>Dhaka, Bangladesh within 60 kilomiters</p>
            </div>
            <div className=' px-3 py-2'>
                <p className=' font-semibold'>Category</p>

                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <AiFillCar className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Vehicals</span>
                </div>
                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <FaHome className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Property Rental</span>
                </div>
                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <GiPriceTag className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Classifieds</span>
                </div>
                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <GoDeviceMobile className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Electronics</span>
                </div>
                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <AiFillHeart className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Family</span>
                </div>
                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <FaGamepad className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Toys & Games</span>
                </div>
                <div className='flex items-center rounded-md py-2 px-1 hover:bg-gray-100 cursor-pointer'>
                    <div className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
                        <GiSittingDog className=' text-2xl' />
                    </div>
                    <span className=' font-semibold ml-3'>Pet Supplies</span>
                </div>

            </div>
        </div>
    )
}

export default MarketPlaceLeft
