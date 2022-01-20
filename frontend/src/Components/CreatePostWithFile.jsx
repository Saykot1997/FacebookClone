import React, { useState } from 'react'
import profilePhoto from "../images/1.jpg";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { CloseCreatePostImage } from "../Redux/CreatePostSlice";
import { PostCreateSuccess, PostCreateFailure, Loading } from "../Redux/PostSlice"
import { useDispatch, useSelector } from 'react-redux';
import { Host } from "../Data";
import axios from 'axios';


function CreatePostWithFile() {

    const dispatch = useDispatch();
    const createPostWithImage = useSelector(state => state.CreatePost.createPostWithImage)
    const isLoading = useSelector(state => state.Post.isLoading)
    const User = useSelector(state => state.User.User);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState('');
    const [video, setVideo] = useState(null);
    const [errMessage, setErrMessage] = useState('');

    const HidePostCreate = () => {
        dispatch(CloseCreatePostImage());
        setPost('');
        setImage(null);
        setVideo(null);
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

    const BrotcustPost = async () => {

        if (post === '' && image === null && video === null) {

            setErrMessage('Please write something or select image or video');

        } else if (post === '' && (image !== null || video !== null)) {

            setErrMessage('Please write something');

        } else {

            dispatch(Loading());
            const formData = new FormData();
            formData.append('post', post);
            image && formData.append('file', image);
            video && formData.append('file', video);

            try {

                const res = await axios.post(`${Host}/api/post/create`, formData, {
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
        <div className={`${createPostWithImage ? "postCreateBox" : "hidden"} `}>
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
                <div className=' h-64 p-3 overflow-y-scroll scrollbar'>
                    <div className=' w-full'>
                        <textarea type="text" onFocus={() => setErrMessage('')} onChange={(e) => { setPost(e.target.value) }} value={post} autoFocus="autofocus" placeholder={` Whats on your mind?, ${User.firstName}`} className='w-full h-full px-4 focus:outline-0 placeholder:text-gray-500' ></textarea>
                    </div>
                    <div className=' min-h-3/4 rounded-md border border-gray-300 p-2 relative '>
                        {
                            (!image && !video) &&
                            <div className=' w-full h-44 rounded-md  hover:bg-gray-200 bg-gray-100 flex justify-center items-center'>
                                <label htmlFor="File" className=' font-semibold text-center cursor-pointer flex justify-center items-center w-full h-full '>Add Photos/Videos</label>
                                <input onChange={(e) => { chackFile(e.target.files[0]) }} type="file" id='File' className=' hidden' />
                            </div>
                        }

                        {
                            image &&
                            <div className=' absolute top-0 left-0 rounded-md overflow-hidden w-full flex justify-center items-center'>
                                <img src={URL.createObjectURL(image)} alt="" className=' w-full' />
                            </div>
                        }
                        {
                            video &&
                            <div className=' absolute top-0 left-0 rounded-md overflow-hidden w-full  flex justify-center items-center'>
                                <video controls src={URL.createObjectURL(video)} className=' w-full '></video>
                            </div>
                        }

                    </div>
                </div>
                <div className=' w-full my-3 px-2'>
                    <button onClick={BrotcustPost} disabled={isLoading} className={`${isLoading ? "cursor-not-allowed" : ""} w-full py-2 text-center bg-blue-500 text-white font-bold rounded-lg`}>Post</button>
                    <p className=' my-2 text-sm text-red-400 text-center'>{errMessage}</p>
                </div>

            </div>
        </div>
    )
}

export default CreatePostWithFile

