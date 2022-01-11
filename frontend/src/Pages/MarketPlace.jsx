import React from 'react'
import MarketPlaceLeft from '../Components/MarketPlaceLeft'
import Topbar from '../Components/Topbar'
import Photo from "../images/Phone.jpg"

function MarketPlace() {


    return (
        <div>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <MarketPlaceLeft Home />
                <div className='w-[76.5%] bg-gray-100 h-full px-8 overflow-y-scroll'>
                    <div className=' w-full h-full'>
                        <div className=' h-36 w-full p-3 bg-blue-600 rounded-b-md text-white'>
                            <h2 className=' text-lg font-semibold'>Covid 19 : Buyers and Sellers</h2>
                            <p>Please flow local guidline about physical distanching and stying home</p>
                            <button className=' bg-white py-1 px-3 text-black rounded-md mt-3 font-semibold'>Lern More</button>
                        </div>
                        <div className=' w-full flex justify-between mt-5 mb-8'>
                            <h3 className=' font-bold text-xl'>Today's picks</h3>
                            <p className=' text-blue-500'>Dhaka . 60 km</p>
                        </div>
                        <div className=' w-full grid grid-cols-4 gap-2'>
                            <div className=' pb-4'>
                                <img src={Photo} alt="" className=' w-full h-[260px] shadow  object-cover rounded-lg' />
                                <p className=' font-semibold'>$12</p>
                                <p>Redmi note 8</p>
                                <p className=' text-gray-600 text-sm'>Dhaka</p>
                            </div>
                            <div className=' pb-4'>
                                <img src={Photo} alt="" className=' w-full h-[260px] shadow  object-cover rounded-lg' />
                                <p className=' font-semibold'>$12</p>
                                <p>Redmi note 8</p>
                                <p className=' text-gray-600 text-sm'>Dhaka</p>
                            </div>
                            <div className=' pb-4'>
                                <img src={Photo} alt="" className=' w-full h-[260px] shadow  object-cover rounded-lg' />
                                <p className=' font-semibold'>$12</p>
                                <p>Redmi note 8</p>
                                <p className=' text-gray-600 text-sm'>Dhaka</p>
                            </div>
                            <div className=' pb-4'>
                                <img src={Photo} alt="" className=' w-full h-[260px] shadow  object-cover rounded-lg' />
                                <p className=' font-semibold'>$12</p>
                                <p>Redmi note 8</p>
                                <p className=' text-gray-600 text-sm'>Dhaka</p>
                            </div>
                            <div className=' pb-4'>
                                <img src={Photo} alt="" className=' w-full h-[260px] shadow  object-cover rounded-lg' />
                                <p className=' font-semibold'>$12</p>
                                <p>Redmi note 8</p>
                                <p className=' text-gray-600 text-sm'>Dhaka</p>
                            </div>
                            <div className=' pb-4'>
                                <img src={Photo} alt="" className=' w-full h-[260px] shadow  object-cover rounded-lg' />
                                <p className=' font-semibold'>$12</p>
                                <p>Redmi note 8</p>
                                <p className=' text-gray-600 text-sm'>Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace
