import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ProfilePhoto from "../images/2.jpg"

function SingleProfileFriend() {
    return (
        <div className=' w-full p-5 flex justify-between items-center shadow-sm shadow-gray-200'>
            <div className=' flex items-center'>
                <img src={ProfilePhoto} alt="" className=' h-20 w-20 mr-3 rounded-md object-cover' />
                <div>
                    <p className=' font-semibold'>Saykot Hossain</p>
                    <p className=' text-gray-500 text-sm'>3 mutal friends</p>
                </div>
            </div>
            <div className=' h-9 w-9 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer'>
                <BsThreeDots className=' to-gray-500 text-lg' />
            </div>
        </div>
    )
}

export default SingleProfileFriend
