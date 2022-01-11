import React from 'react';
import profilePic from '../images/1.jpg';

function OnlineFriend() {
    return (
        <div className='flex items-center cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-200'>
            <div className=' h-10 w-10 relative mr-3'>
                <img src={profilePic} alt="" className=' h-full w-full object-cover rounded-full' />
                <div className=' absolute bottom-2 -right-1 h-3 w-3 rounded-full bg-green-700 border-2 border-white'></div>
            </div>
            <p className=' font-semibold'>Jhon Doe</p>
        </div>
    )
}

export default OnlineFriend
