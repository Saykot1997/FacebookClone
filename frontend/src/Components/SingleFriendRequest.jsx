import React, { useState } from 'react'
import profilePhoto from "../images/2.jpg"
import profilePhoto2 from "../images/1.jpg"
import { useNavigate } from 'react-router-dom';

function SingleFriendRequest({ Topbar }) {

    const navigate = useNavigate()
    const [isHover, setIshover] = useState(false)

    const GoPeopleProfilePage = () => {
        navigate('/friends/request/profile');
    }

    const openMutalFriendBox = () => {
        setIshover(true)
    }
    const closeMutalFriendBox = () => {
        setIshover(false)
    }

    return (
        <div onClick={GoPeopleProfilePage} className={`flex justify-between px-2  cursor-pointer ${Topbar ? "py-1" : "hover:bg-gray-100 py-3 my-1"} rounded-lg`}>
            <div className=' h-14 w-1/5'>
                <img src={profilePhoto} alt="" className=' w-14 h-14 rounded-full object-cover' />
            </div>
            <div className=' ml-2 w-4/5'>
                {
                    Topbar ? <p className=' text-sm text-gray-500'><span className=' font-semibold text-base text-black'>Saykot Hossain</span> send you a friend request</p> : <p className=' font-semibold'>Saykot</p>
                }
                {
                    Topbar && <p className=' text-xs font-bold text-blue-400 mb-2'>12 hours ago</p>
                }

                <div onMouseEnter={openMutalFriendBox} onMouseLeave={closeMutalFriendBox} className=' flex my-2'>
                    <img src={profilePhoto2} alt="" className=' h-5 w-5 rounded-full object-cover' />
                    <div className=' relative  text-xs text-gray-500 ml-1' >1 Mutal Friend
                        <div className={`mutualFrideBox ${isHover ? "visible" : "hidden"}`}>
                            <span className=' text-white text-xs'>Jhon Doe</span>
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between'>
                    <button className=' w-1/2 bg-blue-500 mr-1 py-[6px] rounded-md text-white font-semibold'>Confirm</button>
                    <button className=' w-1/2 bg-gray-300 ml-1 py-[6px] rounded-md font-semibold'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SingleFriendRequest

