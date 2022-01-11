import React from 'react'
import GroupLeft from '../Components/GroupLeft'
import Topbar from '../Components/Topbar'
import profilePhoto from "../images/2.jpg"

function GroupNotifications() {
    return (
        <div>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <GroupLeft notifications />
                <div className='w-[76.5%] bg-gray-100 flex justify-center h-full overflow-y-scroll'>
                    <div className=' w-[50%] h-32 mt-10 p-3 bg-white rounded-md'>
                        <p className=' font-bold text-xl'>Earlier</p>
                        <div className=' flex items-center mt-3 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100'>
                            <img src={profilePhoto} alt="" className=' h-14 w-14 rounded-full object-cover' />
                            <div className=' ml-2'>
                                <p className=' font-bold'>Saykot Hossain <span className=' font-normal'>post in</span> Friends Hangout</p>
                                <div className=' flex items-center'>
                                    <div className=' h-2 w-2 rounded-full bg-blue-500'></div>
                                    <p className=' text-blue-500 text-sm ml-2'>12 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupNotifications
