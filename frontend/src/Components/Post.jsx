import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import profile from '../images/2.jpg';
import postPhoto from '../images/post-1.jpg';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import Comments from './Comments';

function Post() {

    return (
        <div className=' w-full my-5 cursor-pointer bg-white shadow rounded-lg'>
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={profile} alt="" className=' h-8 w-8 rounded-full object-cover' />
                        <p className=' font-semibold mx-3 '>Jhone Doe</p>
                        <p className=' text-sm'>5 munites age</p>
                    </div>
                    <div className=' hover:bg-gray-100 rounded-full p-3 cursor-pointer'>
                        <BsThreeDots />
                    </div>
                </div>
                <div className=' my-3'>
                    <p>This is the post</p>
                    <img src={postPhoto} alt="" className=' object-contain' />
                </div>
                <div>
                    <div className='flex justify-between px-4 py-2 '>
                        <p className='hover:underline'>Saykot and 20 others likes</p>
                        <p className='hover:underline'>12 Comments</p>
                    </div>
                    <hr className=' h-[1px] bg-gray-200 mt-1' />

                    <div className='flex justify-around py-2'>
                        <div className='postItems'>
                            <AiOutlineLike className='mr-2 text-xl text-gray-600' />
                            <span className=' text-gray-500 font-semibold'>Like</span>
                        </div>
                        <div className='postItems'>
                            <BiComment className='mr-2 text-xl text-gray-600' />
                            <span className=' text-gray-500 font-semibold'>Comment</span>
                        </div>
                        <div className='postItems'>
                            <RiShareForwardLine className='mr-2 text-xl text-gray-600' />
                            <span className=' text-gray-500 font-semibold'>Comment</span>
                        </div>
                    </div>
                    <hr className=' h-[1px] bg-gray-200' />
                    <Comments />
                </div>

            </div>
        </div>
    )
}

export default Post
