import React from 'react'
import CreatePost from './CreatePost'
import { MdOutlinePermMedia } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { OpenCreatePost, OpenCreatePostImage } from '../Redux/CreatePostSlice';
import CreatePostWithFile from './CreatePostWithFile';
import { Host } from "../Data";
import userAvater from "../images/userAvater.png";
import { NavLink } from 'react-router-dom';

function Share() {

    const dispatch = useDispatch();
    const User = useSelector(state => state.User.User);

    const OpenCreateBox = () => {
        dispatch(OpenCreatePost());
    }

    const OpenPostCreateBox = () => {
        dispatch(OpenCreatePostImage());
    }

    return (
        <div className=' bg-white w-full shadow shadow-slate-300 p-2 rounded-xl'>
            <div className='flex w-full items-center'>
                <img src={User.profilePicture ? `${Host}/images/${User.profilePicture}` : `${userAvater}`} alt="" className='h-12 w-12 rounded-full object-cover mr-3 cursor-pointer' />
                <input type="text" placeholder={`What's on your mind ${User.firstName}`} className="inputText" onFocus={OpenCreateBox} />
                <CreatePost />
                <CreatePostWithFile />
            </div>
            <div className=' px-6 pt-4 rounded-lg'>
                <hr className=' h-[1px] bg-black opacity-20 rounded-lg' />
            </div>

            <div className='flex items-center justify-between p-1'>
                <div className='shareItems'>
                    <RiVideoAddFill className='mr-1 text-orange-600 text-lg' />
                    <span className=' font-semibold text-sm'>Live Video</span>
                </div>
                <div onClick={OpenPostCreateBox} className='shareItems'>
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
