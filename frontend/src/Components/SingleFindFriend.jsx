import React from 'react'
import profilePhoto from "../images/2.jpg";
import profilePhoto1 from "../images/1.jpg";

function SingleFindFriend({ Request }) {
    return (
        <div className=' h-[360px] bg-white shadow shadow-gray-400 rounded-lg overflow-hidden'>
            <div className=' h-3/5 w-full'>
                <img src={profilePhoto} alt="" className=' h-full w-full object-cover' />
            </div>
            <div className=' w-full h-2/5'>
                <p className=' font-semibold my-2 mx-3 hover:underline cursor-pointer'>Saykot Hossain</p>
                <div className=' flex items-center ml-2'>
                    <div className=' flex'>
                        <img src={profilePhoto1} alt="" className=' h-5 w-5 rounded-full object-cover' />
                        <img src={profilePhoto} alt="" className='-ml-[2px] h-5 w-5 rounded-full object-cover' />
                    </div>
                    <span className=' ml-1 text-gray-600 text-sm'>3 Mutal Friends</span>
                </div>
                <div className='w-full p-2'>
                    <button className=' bg-blue-100 w-full rounded-lg py-1 font-semibold mb-1 text-blue-500 hover:bg-blue-200'>{Request ? "Confirm" : "Add Friend"}</button>
                    <button className='bg-gray-100 w-full rounded-lg py-1 font-semibold hover:bg-gray-200'>{Request ? "Delete" : "Remove"}</button>
                </div>
            </div>
        </div>
    )
}

export default SingleFindFriend
