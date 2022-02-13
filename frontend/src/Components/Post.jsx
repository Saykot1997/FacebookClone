import React, { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import Comments from './Comments';
import { Host } from "../Data"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PostDelete, PostUpdate } from "../Redux/PostSlice";
import { format } from 'timeago.js';
import userAvater from "../images/userAvater.png";
import PostEdit from './PostEdit';


function Post({ post }) {
    const [youLiked, setYouLiked] = useState(false);
    const [likeAnimation, setLikeAnimation] = useState(false);
    const User = useSelector(state => state.User.User);
    const [showEdditBox, setShowEdditBox] = useState(false);
    const dispatch = useDispatch();
    const commentInput = document.getElementById('commentInput');
    const [comment, setComment] = useState('');
    const [postEditBoxOpen, setPostEditBoxOpen] = useState(false);


    useEffect(() => {

        if (post.likes.length > 0) {

            post.likes.map(like => {
                if (like === User._id) {
                    setYouLiked(true)
                }
                else {
                    setYouLiked(false)
                }
            })

        } else {

            setYouLiked(false)
        }
    }, [post]);


    const ShowBox = () => {
        setShowEdditBox(!showEdditBox);

    }

    const DeletePost = async () => {

        try {

            await axios.delete(`${Host}/api/post/delete/${post._id}`, {
                headers: {
                    'Authorization': `Bearer ${User.token}`
                }
            })

            dispatch(PostDelete(post))

        } catch (error) {
            console.log(error.response.data)
        }
    }

    const EditPost = async () => {
        setPostEditBoxOpen(true);
    }

    const LikeThePost = async () => {
        setLikeAnimation(true);

        try {
            const res = await axios.get(`${Host}/api/post/like/${post._id}`, {
                headers: {
                    'Authorization': `Bearer ${User.token}`
                }
            })

            dispatch(PostUpdate(res.data))
            setTimeout(() => {
                setLikeAnimation(false);
            }, 1000)

        } catch (error) {

            setLikeAnimation(false);
            console.log(error.response.data)
        }
    }


    const commentFocus = () => {
        commentInput.focus();
        window.scrollTo(0, commentInput.offsetTop)
    }

    const PostComment = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${Host}/api/post/comment/${post._id}`, {
                comment
            }, {
                headers: {
                    'Authorization': `Bearer ${User.token}`
                }
            })

            setComment('');
            dispatch(PostUpdate(res.data))

        } catch (error) {

            console.log(error.response.data)
        }
    }


    return (

        <div className=' w-full my-5 cursor-pointer bg-white shadow rounded-lg'>
            <div className={`${postEditBoxOpen ? "visible" : "hidden"} h-screen w-screen z-[100] bg-white bg-opacity-60 overflow-hidden flex justify-center absolute top-0 left-0`}>
                <PostEdit Post={post} setPostEditBoxOpen={setPostEditBoxOpen} />
            </div>
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={post?.userId?.profilePicture ? `${Host}/uploads/images/${post.userId.profilePicture}` : `${userAvater}`} alt="" className=' h-8 w-8 rounded-full object-cover' />
                        <p className=' font-semibold mx-3 '>{post.userId.firstName + " " + post.userId.sureName}</p>
                        <p className=' text-sm'>{format(post.createdAt, 'en-US')}</p>
                    </div>
                    {
                        post.userId._id === User._id &&
                        <div onClick={ShowBox} className=' hover:bg-gray-100 z-20 relative rounded-full p-3 cursor-pointer'>
                            <BsThreeDots />
                            <div className={`${showEdditBox ? "visible" : "hidden"} absolute w-32 h-40 top-full shadow-md right-4 shadow-gray-600 bg-white py-2 px-1 rounded-md `}>
                                <p onClick={DeletePost} className=' hover:bg-gray-100 p-2 rounded-md'>Delete</p>
                                <p onClick={EditPost} className='hover:bg-gray-100 p-2 rounded-md'>Eddit</p>
                            </div>
                        </div>
                    }

                </div>
                <div className=' my-3'>
                    <p>{post.desc}</p>
                    {
                        post.image && <img src={`${Host}/images/${post.image}`} alt="" className='w-full max-h-72 object-contain ' />
                    }
                    {
                        post.video && <video src={`${Host}/videos/${post.video}`} controls className='w-full max-h-72 ' />
                    }
                </div>
                <div>
                    <div className='flex justify-between px-4 py-2 '>
                        {
                            post.likes.length > 0 && post.likes.length < 2 && youLiked && <p>You like this</p>
                        }
                        {
                            post.likes.length > 0 && !youLiked && <p className='hover:underline'>{post.likes.length} likes</p>
                        }
                        {
                            post.comments.length > 0 && <p className='hover:underline'>{post.comments.length} comments</p>
                        }
                    </div>
                    <hr className=' h-[1px] bg-gray-200 mt-1' />

                    <div className='flex justify-around py-2'>
                        <div onClick={LikeThePost} className='postItems'>
                            <AiOutlineLike className={`${youLiked ? " text-blue-400" : " text-gray-400"} ${likeAnimation ? " animate-spin" : ""} mr-2 text-xl transition-all duration-500 ease-in-out`} />
                            <span className=' text-gray-500 font-semibold'>Like</span>
                        </div>
                        <div onClick={commentFocus} className='postItems'>
                            <BiComment className='mr-2 text-xl text-gray-600' />
                            <span className=' text-gray-500 font-semibold'>Comment</span>
                        </div>
                        <div className='postItems'>
                            <RiShareForwardLine className='mr-2 text-xl text-gray-600' />
                            <span className=' text-gray-500 font-semibold'>Share</span>
                        </div>
                    </div>
                    <hr className=' h-[1px] bg-gray-200' />
                    <Comments post={post} />

                    <form onSubmit={PostComment} className='flex w-full items-center mt-2'>
                        <img src={post.userId.profilePicture ? `${Host}/uploads/images/${post.userId.profilePicture}` : `${userAvater}`} alt="" className=' h-8 w-8 rounded-full object-cover' />
                        <input onChange={(e) => { setComment(e.target.value) }} value={comment} id='commentInput' type="text" placeholder="Write your comments" className="inputText" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post
