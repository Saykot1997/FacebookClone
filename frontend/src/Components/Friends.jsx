import React, { useState } from 'react';
import photo2 from "../images/2.jpg"
import FriendsInfo from './FriendsInfo';

function Friends() {

    const [isHover, setHover] = useState(false);

    const showPeople = () => {
        setHover(true);
    }
    const hidePeople = () => {
        setHover(false);
    }

    return (
        <div className=' w-full bg-white shadow rounded-lg p-3 mt-3'>
            <div className=' flex justify-between'>
                <h2 className=' font-bold text-lg items-center hover:underline cursor-pointer'>Friends</h2>
                <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Friends</span>
            </div>
            <div className=' grid grid-cols-3 gap-3 mt-2'>
                <div onMouseEnter={showPeople} onMouseLeave={hidePeople} className=' relative'>
                    <div className=' h-24 rounded-md overflow-hidden cursor-pointer'>
                        <img src={photo2} alt="" className=' h-full w-full object-cover' />
                        <FriendsInfo isHover={isHover} friends />
                    </div>
                    <p className=' font-semibold text-base'>Jhon Doe</p>
                </div>
            </div>
        </div>
    )
}

export default Friends
