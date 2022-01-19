import React, { useState } from 'react'
import profilePhoto from "../images/1.jpg";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Host } from "../Data";
import axios from 'axios';
import { PostUpdate } from "../Redux/PostSlice"
import { useEffect } from 'react';


function PostEdit({ Post, setPostEditBoxOpen }) {

    const dispatch = useDispatch();
    const User = useSelector(state => state.User.User);
    const [postImage, setPostImage] = useState(Post.image);
    const [postDesc, setPostDesc] = useState(Post.desc);
    const [postVideo, setPostVideo] = useState(Post.video);
    const [errMessage, setErrMessage] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        setPostImage(Post.image);
        setPostDesc(Post.desc);
        setPostVideo(Post.video);
    }, [Post]);

    const HidePostCreate = () => {
        setPostDesc(Post.desc);
        setImage(null);
        setVideo(null);
        setPostEditBoxOpen(false);
        setErrMessage('');
    }


    const chackFile = (file) => {

        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {

            setImage(file);
            setVideo(null);

        } else if (file.type === 'video/mp4' || file.type === 'video/webm' || file.type === 'video/ogg' || file.type === 'video/avi' || file.type === 'video/flv' || file.type === 'video/wmv') {

            setVideo(file);
            setImage(null);
        }
    }

    const updatePost = async () => {

        if (postDesc === '') {

            setErrMessage('You can not keep empty post');

        } else {

            const formData = new FormData();
            formData.append('desc', postDesc);
            image && formData.append('file', image);
            video && formData.append('file', video);

            try {

                const res = await axios.post(`${Host}/api/post/update/${Post._id}`, formData, {
                    headers: {
                        'Authorization': `Bearer ${User.token}`
                    }
                });

                dispatch(PostUpdate(res.data));
                HidePostCreate()

            } catch (error) {
                console.log(error.response.data)
                setErrMessage("Something went wrong");
            }

        }

    }

    return (
        <div className=' bg-white h-[70%] mt-32 opacity-100 shadow-xl px-2 rounded-md shadow-gray-400 w-[500px]'>
            <div className=' py-2 px-3 flex items-center' >
                <h3 className=' text-xl font-bold w-full text-center'>Edite Post</h3>
                <div onClick={HidePostCreate} className=' h-9 w-10 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer text-2xl hover:bg-gray-300'><span className=' mb-1'>x</span></div>
            </div>
            <div className=' my-1'>
                <hr className=' bg-gray-300 h-[1px] w-full' />
            </div>

            <div className=' flex items-start p-3 w-ful'>
                <img src={profilePhoto} alt="" className=' bg-red-800 h-11 w-11 rounded-full object-cover mr-2' />
                <div className='flex items-start flex-col'>
                    <span className=' font-semibold text-sm'>{User.firstName + " " + User.sureName}</span>
                    <div className=' bg-gray-200 mt-1 py-1 px-2 rounded flex items-center'>
                        <FaUserFriends />
                        <span className=' text-xs font-semibold mx-1'>Friends</span>
                        <RiArrowDownSFill />
                    </div>
                </div>
            </div>

            <div className=' h-64 p-3 overflow-y-scroll scrollbar'>
                <div className=' w-full h-1/4'>
                    <textarea type="text" onFocus={() => setErrMessage('')} onChange={(e) => { setPostDesc(e.target.value) }} value={postDesc} autoFocus="autofocus" placeholder={` Whats on your mind?, ${User.firstName}`} className='w-full h-full px-4 focus:outline-0 placeholder:text-gray-500' ></textarea>
                </div>
                <div className=' min-h-3/4 rounded-md border border-gray-300 p-2 relative '>
                    <div className=' bg-gray-50 rounded-md shadow-md p-2 flex justify-center items-center absolute top-5 left-5 z-50'>
                        <label htmlFor='File' className=' font-semibold text-black'>Add Photo/Video</label>
                        <input onChange={(e) => { chackFile(e.target.files[0]) }} type="file" id='File' className=' hidden' />
                    </div>
                    {
                        (!image && !video && !postVideo) && postImage &&
                        <div className=' w-full overflow-hidden rounded-md flex justify-center items-center'>
                            <img src={`${Host}/images/${postImage}`} alt="" className=' w-full h-full object-contain' />
                        </div>
                    }
                    {
                        (!image && !video && !postImage) && postVideo &&
                        <div className=' w-full h-full rounded-md flex justify-center items-center'>
                            <video controls src={`${Host}/videos/${Post.video}`} alt="" className=' w-full h-full' />
                        </div>
                    }

                    {
                        image && !video && (postImage || postVideo) &&
                        <div className='w-full overflow-hidden rounded-md flex justify-center items-center'>
                            <img src={URL.createObjectURL(image)} alt="" className=' w-full' />
                        </div>
                    }
                    {
                        video && !image && (postImage || postVideo) &&
                        <div className='w-full overflow-hidden rounded-md flex justify-center items-center'>

                            <video controls src={URL.createObjectURL(video)} className=' w-full '></video>
                        </div>
                    }

                </div>
            </div>
            <div className=' w-full my-3 px-2'>
                <button onClick={updatePost} className=' w-full py-2 text-center bg-blue-500 text-white font-bold rounded-lg '>Save</button>
                {
                    errMessage && <p className=' my-2 text-sm text-red-400 text-center'>{errMessage}</p>
                }
            </div>

        </div>

    )
}

export default PostEdit


