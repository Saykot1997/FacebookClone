import React, { useState } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { CloseCreatePost } from "../Redux/CreatePostSlice";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Host } from "../Data";
import { PostCreateSuccess, PostCreateFailure } from "../Redux/PostSlice"
import userAvater from "../images/userAvater.png";


function CreatePost() {

    const dispatch = useDispatch();
    const createPostWithoutImage = useSelector(state => state.CreatePost.createPostWithoutImage);
    const User = useSelector(state => state.User.User);
    const [post, setPost] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const HidePostCreate = () => {
        dispatch(CloseCreatePost())
        setPost('');
        setErrMessage('');
    }

    const BrotcustPost = async () => {

        if (post === '') {

            setErrMessage('Please write something');

        } else {

            try {

                const res = await axios.post(`${Host}/api/post/create`, { post: post }, {
                    headers: {
                        'Authorization': `Bearer ${User.token}`
                    }
                });

                dispatch(PostCreateSuccess(res.data));
                HidePostCreate()

            } catch (error) {

                dispatch(PostCreateFailure(error.response.data));
                setErrMessage("Something went wrong");
            }

        }

    }


    return (
        <div className={`${createPostWithoutImage ? "postCreateBox" : "hidden"} `}>
            <div className=' bg-white z-30 opacity-100 shadow-lg px-2 rounded-md shadow-gray-400 w-[500px]'>
                <div className=' py-2 px-3 flex items-center' >
                    <h3 className=' text-xl font-bold w-full text-center'>Create Post</h3>
                    <div onClick={HidePostCreate} className=' h-9 w-10 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer text-2xl hover:bg-gray-300'><span className=' mb-1'>x</span></div>
                </div>
                <div className=' my-1'>
                    <hr className=' bg-gray-300 h-[1px] w-full' />
                </div>

                <div className=' flex items-start p-3 w-ful'>
                    <img src={User.profilePicture ? `${Host}/images/${User.profilePicture}` : `${userAvater}`} alt="" className=' bg-red-800 h-11 w-11 rounded-full object-cover mr-2' />
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
                    <textarea onFocus={() => setErrMessage('')} value={post} onChange={(e) => setPost(e.target.value)} type="text" autoFocus="autofocus" placeholder={`What's on your mind?, ${User.firstName} `} className='w-full h-full px-4 focus:outline-0 placeholder:text-2xl placeholder:text-gray-500' ></textarea>
                </div>
                <div className=' w-full my-3 px-2'>
                    <button onClick={BrotcustPost} className=' w-full py-2 text-center bg-blue-500 text-white font-bold rounded-lg '>Post</button>
                    <p className=' my-2 text-sm text-red-400 text-center'>{errMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
