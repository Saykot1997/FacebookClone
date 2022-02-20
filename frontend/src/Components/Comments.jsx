import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import userAvater from '../images/userAvater.png';
import { Host } from '../Data'
import { format } from 'timeago.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PostUpdate } from '../Redux/PostSlice';
import { FcLike } from 'react-icons/fc';
import profilePhoto from "../images/2.jpg";

function Comments({ post }) {

    const dispatch = useDispatch();
    const [isShowEditBox, setIsShowEditBox] = useState(false);
    const User = useSelector(state => state.User.User);
    const [commentReplay, setCommentReplay] = useState('');
    const [openReplayBox, setOpenReplayBox] = useState(false);
    const [iscommentEditBox, setIsCommentEditBox] = useState('');
    // const [commentEdit, setCommentEdit] = useState('');
    const [editAbleComment, setEditAbleComment] = useState("");
    const [curentComment, setCurentComment] = useState("");



    const postLike = async (commentId) => {

        try {

            const res = await axios.get(`${Host}/api/post/commet/like/${commentId}/${post._id}`, {
                headers: {
                    'Authorization': `Bearer ${User.token}`
                }

            });

            dispatch(PostUpdate(res.data));

        } catch (err) {

            console.log(err.response.data);
        }

    }

    const showEditBox = (commentId) => {
        setIsShowEditBox(!isShowEditBox);
        setCurentComment(commentId);
    }

    const showCommentEdditBox = (commentData) => {
        setIsCommentEditBox(true);
        setEditAbleComment(commentData)
    }

    const deleteComment = async (commentId) => {

        try {

            const res = await axios.delete(`${Host}/api/post/comment/delete/${post._id}/${commentId}`, {
                headers: {
                    'Authorization': `Bearer ${User.token}`
                }

            });

            dispatch(PostUpdate(res.data));

        } catch (err) {

            console.log(err.response.data);
        }

    }

    const editComment = async (commentId) => {

        if (editAbleComment) {

            try {

                const res = await axios.put(`${Host}/api/post/comment/edit/${post._id}/${commentId}`, {
                    comment: editAbleComment
                }, {
                    headers: {
                        'Authorization': `Bearer ${User.token}`
                    }

                });

                dispatch(PostUpdate(res.data));
                setIsCommentEditBox(false);

            } catch (err) {

                console.log(err.response.data);
            }
        }
    }

    const PostReplayComment = async (e, commentId) => {
        e.preventDefault();
        if (commentReplay) {
            console.log(commentReplay);

            try {

                const res = await axios.post(`${Host}/api/post/comment/replay/${post._id}/${commentId}`, {
                    reply: commentReplay
                }, {
                    headers: {
                        'Authorization': `Bearer ${User.token}`
                    }

                });

                dispatch(PostUpdate(res.data));
                setOpenReplayBox(false);
                setCommentReplay('');


            } catch (err) {

                console.log(err.response.data);
            }
        }
    }


    return (
        <div>
            <p className=' font-semibold text-gray-500 mt-2 mb-1 hover:underline cursor-pointer'>View Previous Comments</p>
            <ul>
                {
                    post.comments.length > 0 && post.comments.map((comment, index) => {

                        return (
                            <div>
                                <li className={` mt-2 flex group `} key={index}>
                                    <div className='flex'>
                                        <div>
                                            <img src={post.userId.profilePicture ? `${Host}/images/${comment.user.profilePicture}` : userAvater} alt="" className=' h-8 w-8 rounded-full object-cover' />
                                        </div>
                                        <div className=' ml-2'>
                                            <div className='bg-gray-200 rounded-xl p-2 relative'>
                                                <p className=' font-semibold hover:underline cursor-pointer '>{comment.user.firstName + " " + comment.user.sureName}</p>

                                                {
                                                    iscommentEditBox && (curentComment === comment._id) ?
                                                        <div>
                                                            <textarea type="text" placeholder='Write your comments' value={editAbleComment} onChange={(e) => setEditAbleComment(e.target.value)} className=' rounded-md px-2 py-1 focus:outline-0' />
                                                        </div>
                                                        :
                                                        <p>{comment.comentData}</p>
                                                }
                                                {
                                                    comment.likes.length > 0 && !iscommentEditBox &&
                                                    <div className=' absolute text-sm -bottom-2 right-3 bg-white rounded-md shadow-md p-[2px] flex items-center'> <FcLike /> {comment.likes.length}</div>
                                                }
                                            </div>

                                            {
                                                iscommentEditBox && (curentComment === comment._id) ?
                                                    <div className=' flex mt-1'>
                                                        <button onClick={() => editComment(comment._id)} className=' bg-blue-400 py-[2px] px-2 rounded-md text-white font-semibold'>Save</button>
                                                        <button onClick={() => { setIsCommentEditBox(false); }} className=' bg-gray-300 ml-1 py-[2px] px-2 rounded-md text-black font-semibold'>Cencel</button>
                                                    </div>
                                                    :
                                                    <div>
                                                        <span onClick={() => postLike(comment._id)} className=' font-bold text-xs text-gray-600 mr-1 hover:underline cursor-pointer'>Like</span>
                                                        <span className='mr-1'>.</span>
                                                        <span onClick={() => { setOpenReplayBox(!openReplayBox); setCurentComment(comment._id) }} className=' font-bold text-xs text-gray-600 mr-1 hover:underline cursor-pointer'>Reply</span>
                                                        <span className='mr-1'>.</span>
                                                        <span className='text-xs text-gray-600 hover:underline cursor-pointer'>{format(comment.createdAt, 'en-US')}</span>
                                                    </div>
                                            }

                                            <form onSubmit={(e) => PostReplayComment(e, comment._id)} className={`${openReplayBox && (curentComment === comment._id) ? "visible" : "hidden"} flex items-center my-2`} >
                                                <img src={profilePhoto} alt="" className=' h-7 w-7 rounded-full object-cover mr-1' />
                                                <input onChange={(e) => { setCommentReplay(e.target.value) }} type="text" placeholder='Write a replay...' id='commentInput' className=' py-[6px] focus:outline-0 w-full px-3 bg-gray-100 rounded-2xl' />
                                            </form>
                                        </div>
                                    </div>
                                    {
                                        comment.user._id === User._id &&

                                        <div onClick={() => showEditBox(comment._id)} className=' hover:bg-gray-100 relative z-20 h-10 w-10 rounded-full p-3 cursor-pointer scale-0 group-hover:scale-100 '>
                                            <BsThreeDots />
                                            <div className={`${isShowEditBox && (curentComment === comment._id) ? "visible" : "hidden"} bg-white absolute top-full z-20 left-0 p-2 shadow-md shadow-gray-300 `}>
                                                <p onClick={() => deleteComment(comment._id)} className=' w-full px-2 py-2 hover:bg-gray-100 rounded-md'>Delete</p>
                                                <p onClick={() => { showCommentEdditBox(comment.comentData); setCurentComment(comment._id) }} className='w-full px-2 py-2 hover:bg-gray-100 rounded-md'>Edite</p>
                                            </div>
                                        </div>
                                    }

                                </li>
                                {
                                    comment.replaies.length > 0 && comment.replaies.map((replay, index) => {
                                        return (
                                            <li className={` mt-2 ml-12 flex group `} key={index}>
                                                <div className='flex'>
                                                    <div>
                                                        <img src={post.userId.profilePicture ? `${Host}/images/${replay.user.profilePicture}` : userAvater} alt="" className=' h-8 w-8 rounded-full object-cover' />
                                                    </div>
                                                    <div className=' ml-2'>
                                                        <div className='bg-gray-200 rounded-xl p-2 relative'>
                                                            <p className=' font-semibold hover:underline cursor-pointer '>{replay.user.firstName + " " + replay.user.sureName}</p>
                                                            <p>{replay.replayData}</p>
                                                        </div>
                                                        <div>
                                                            <span className=' font-bold text-xs text-gray-600 mr-1 hover:underline cursor-pointer'>Like</span>
                                                            <span className='mr-1'>.</span>
                                                            <span className=' font-bold text-xs text-gray-600 mr-1 hover:underline cursor-pointer'>Reply</span>
                                                            <span className='mr-1'>.</span>
                                                            <span className='text-xs text-gray-600 hover:underline cursor-pointer'>{format(replay.createdAt, 'en-US')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })

                                }
                            </div>
                        )

                    })
                }

            </ul>
        </div>
    )
}

export default Comments
