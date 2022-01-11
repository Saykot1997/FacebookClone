import React from 'react'
import MarketPlaceLeft from '../Components/MarketPlaceLeft'
import Topbar from '../Components/Topbar'

function MarketPlaceIndex() {
    return (
        <div>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <MarketPlaceLeft Index />
                <div className='w-[76.5%] h-full flex justify-center overflow-y-scroll'>
                    <div className=' w-[70%] h-full mt-1'>
                        <h1>MarketPlace Index</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlaceIndex
