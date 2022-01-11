import React from 'react'
import profile from '../images/2.jpg';
import profilePic from '../images/1.jpg';
import { BsThreeDots } from 'react-icons/bs';

function Comments() {
    return (
        <div>
            <p className=' font-semibold text-gray-500 mt-2 mb-1 hover:underline cursor-pointer'>View Previous Comments</p>
            <ul>
                <li className=' mt-2 flex group'>
                    <div className='flex'>
                        <div>
                            <img src={profile} alt="" className=' h-8 w-8 rounded-full object-cover' />
                        </div>
                        <div className=' ml-2'>
                            <div className='bg-gray-200 rounded-xl p-2'>
                                <p className=' font-semibold mx-3 hover:underline cursor-pointer '>Jhone Doe</p>
                                <p>This is coments</p>
                            </div>
                            <span className=' font-bold text-xs text-gray-600 mr-1 hover:underline cursor-pointer'>Like</span>
                            <span className='mr-1'>.</span>
                            <span className=' font-bold text-xs text-gray-600 mr-1 hover:underline cursor-pointer'>Reply</span>
                            <span className='mr-1'>.</span>
                            <span className='text-xs text-gray-600 hover:underline cursor-pointer'>4d</span>
                        </div>
                    </div>
                    <div className=' hover:bg-gray-100 h-10 w-10 rounded-full p-3 cursor-pointer scale-0 group-hover:scale-100 '>
                        <BsThreeDots />
                    </div>
                </li>
                <li className=' mt-2'>
                    <div className='flex w-full items-center'>
                        <img src={profilePic} alt="" className='h-8 w-8 rounded-full object-cover mr-3 cursor-pointer' />
                        <input type="text" placeholder="Write your comments" className="inputText" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Comments
