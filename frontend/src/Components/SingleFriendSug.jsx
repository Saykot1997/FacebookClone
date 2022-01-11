import React, { useState } from 'react'
import profilePhoto from "../images/2.jpg"
import profilePhoto2 from "../images/1.jpg"
import { useNavigate } from 'react-router-dom';

function SingleFriendSug() {

    const navigate = useNavigate()

    const GoPeopleProfilePage = () => {
        navigate('/friends/suggetion/profile');
    }

    const [isHover, setIshover] = useState(false)

    const openMutalFriendBox = () => {
        setIshover(true)
    }
    const closeMutalFriendBox = () => {
        setIshover(false)
    }

    return (
        <div onClick={GoPeopleProfilePage} className='flex justify-between px-2 py-3 cursor-pointer hover:bg-gray-100 rounded-lg my-1'>
            <div className=' h-14 w-1/5'>
                <img src={profilePhoto} alt="" className=' w-14 h-14 rounded-full object-cover' />
            </div>
            <div className=' ml-2 w-4/5'>
                <p className=' font-semibold'>Saykot</p>
                <div className=' flex my-2' onMouseEnter={openMutalFriendBox} onMouseLeave={closeMutalFriendBox}>
                    <img src={profilePhoto2} alt="" className=' h-5 w-5 rounded-full object-cover' />
                    <div className=' relative group text-xs text-gray-500 ml-1'>1 Mutal Friend
                        <div className={`mutualFrideBox ${isHover ? "visible" : "hidden"}`}>
                            <span className=' text-white text-xs'>Jhon Doe</span>
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between'>
                    <button className=' w-1/2 bg-blue-500 mr-1 py-[6px] rounded-md text-white font-semibold'>Add Friend</button>
                    <button className=' w-1/2 bg-gray-300 ml-1 py-[6px] rounded-md font-semibold'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SingleFriendSug
