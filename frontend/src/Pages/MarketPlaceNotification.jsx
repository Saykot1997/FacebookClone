import React from 'react'
import MarketPlaceLeft from '../Components/MarketPlaceLeft'
import Topbar from '../Components/Topbar'

function MarketPlaceNotification() {

    return (
        <div>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <MarketPlaceLeft Notification />
                <div className='w-[76.5%] bg-gray-100 h-full flex justify-center overflow-y-scroll'>
                    <div className=' w-[70%] flex justify-center h-full mt-1'>
                        <div className='w-[80%] h-16 mt-3 flex items-center bg-white p-3 rounded-lg'>
                            <h1 className='font-bold text-2xl'>Notifications</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlaceNotification
