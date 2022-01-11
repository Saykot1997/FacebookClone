import React, { useState } from 'react'
import profilePhoto from "../images/2.jpg"
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function SingleAllFriend() {

    const navigate = useNavigate();

    const GoPeopleProfilePage = () => {
        navigate('/friends/all/profile');
    }

    const [isHover, setIshover] = useState(false)

    const openMutalFriendBox = () => {
        setIshover(true)
    }
    const closeMutalFriendBox = () => {
        setIshover(false)
    }

    return (
        <div onClick={GoPeopleProfilePage} className='flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded-lg my-1'>
            <div className='flex'>
                <img src={profilePhoto} alt="" className=' w-14 h-14 rounded-full object-cover' />
                <div className=' ml-2'>
                    <p className=' font-semibold'>Saykot</p>
                    <div className=' flex my-2' onMouseEnter={openMutalFriendBox} onMouseLeave={closeMutalFriendBox}>
                        <div className=' relative group text-xs text-gray-500 ml-1'>1 Mutal Friend
                            <div className={`mutualFrideBox ${isHover ? "visible" : "hidden"}`}>
                                <span className=' text-white text-xs'>Jhon Doe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-300 rounded-full p-2' >
                <BsThreeDots className=' text-gray-500 cursor-pointer' />
            </div>
        </div>
    )
}

export default SingleAllFriend
