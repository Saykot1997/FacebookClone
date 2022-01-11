import React, { useContext } from 'react'
import profilePic from "../images/1.jpg";
import { MdOutlinePermMedia } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { IsPostCreateOpen } from '../Context/PostCreate';
import CreatePost from './CreatePost';

function Share() {

    const { setIsOpen } = useContext(IsPostCreateOpen);

    const ShowPostCreate = () => {
        setIsOpen(true)
    }

    return (
        <div className=' bg-white w-full shadow shadow-slate-300 p-2 rounded-xl'>
            <div className='flex w-full items-center'>
                <img src={profilePic} alt="" className='h-14 w-14 rounded-full object-cover mr-3 cursor-pointer' />
                <input type="text" placeholder="What's on your mind Jhon" className="inputText" onFocus={ShowPostCreate} />
                <CreatePost />
            </div>
            <div className=' px-6 pt-4 rounded-lg'>
                <hr className=' h-[1px] bg-black opacity-20 rounded-lg' />
            </div>

            <div className='flex items-center justify-between p-1'>
                <div className='shareItems'>
                    <RiVideoAddFill className='mr-1 text-orange-600 text-lg' />
                    <span className=' font-semibold text-sm'>Live Video</span>
                </div>
                <div className='shareItems'>
                    <MdOutlinePermMedia className='mr-1 text-green-600 text-lg' />
                    <span className=' font-semibold text-sm'>Photo or Video</span>
                </div>
                <div className='shareItems'>
                    <BsFillEmojiSmileFill className='mr-1 text-yellow-600 text-lg' />
                    <span className=' font-semibold text-sm'>Feelings</span>
                </div>
            </div>
        </div>
    )
}

export default Share
