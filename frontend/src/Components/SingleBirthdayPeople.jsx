import React, { useState } from 'react'
import ProfilePhoto from "../images/2.jpg"
import FriendsInfo from './FriendsInfo'

function SingleBirthdayPeople() {

    const [isHover, setHover] = useState(false);

    const showPeople = () => {
        setHover(true);
    }
    const hidePeople = () => {
        setHover(false);
    }


    return (

        <div className=' flex w-full justify-between items-center my-6'>
            <div className=' flex items-center'>
                <div className=' mr-2 relative'>
                    <img src={ProfilePhoto} onMouseEnter={showPeople} onMouseLeave={hidePeople} alt="" className=' h-14 w-14 rounded-full object-cover' />
                    <FriendsInfo isHover={isHover} />
                </div>
                <div>
                    <p className=' font-semibold'>Jhon Doe</p>
                    <p className='text-xs text-gray-600'>January 12 , 1997</p>
                </div>
            </div>
            <div>
                <p className='text-xs text-gray-600'>25 years</p>
            </div>
        </div>
    )
}

export default SingleBirthdayPeople
