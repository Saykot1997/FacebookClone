import React, { useContext } from 'react'
import profilePhoto from "../images/1.jpg";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { IsPostCreateOpen } from '../Context/PostCreate';

function CreatePost() {

    const { IsOpen, setIsOpen } = useContext(IsPostCreateOpen);

    const HidePostCreate = () => {
        setIsOpen(false)
    }

    return (
        <div className={IsOpen ? 'postCreateBox' : " hidden"}>
            <div className=' bg-white z-30 opacity-100 shadow-lg px-2 rounded-md shadow-gray-400 w-[500px]'>
                <div className=' py-2 px-3 flex items-center' >
                    <h3 className=' text-xl font-bold w-full text-center'>Create Post</h3>
                    <div onClick={HidePostCreate} className=' h-9 w-10 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer text-2xl hover:bg-gray-300'><span className=' mb-1'>x</span></div>
                </div>
                <div className=' my-1'>
                    <hr className=' bg-gray-300 h-[1px] w-full' />
                </div>

                <div className=' flex items-start p-3 w-ful'>
                    <img src={profilePhoto} alt="" className=' bg-red-800 h-11 w-11 rounded-full object-cover mr-2' />
                    <div className='flex items-start flex-col'>
                        <span className=' font-semibold text-sm'>Saykot Hossain</span>
                        <div className=' bg-gray-200 mt-1 py-1 px-2 rounded flex items-center'>
                            <FaUserFriends />
                            <span className=' text-xs font-semibold mx-1'>Friends</span>
                            <RiArrowDownSFill />
                        </div>
                    </div>
                </div>

                <div className=' w-full h-64'>
                    <textarea type="text" autoFocus="autofocus" placeholder="What's on your mind?" className='w-full h-full px-4 focus:outline-0 placeholder:text-2xl placeholder:text-gray-500' ></textarea>
                </div>
                <div className=' w-full my-3 px-2'>
                    <button className=' w-full py-2 text-center bg-blue-500 text-white font-bold rounded-lg '>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
