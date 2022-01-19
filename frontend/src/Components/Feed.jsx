import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import Share from './Share';
import Story from './Story';
import { Host } from '../Data';
import { AllPostFatchSuccess, AllPostFatchFailure } from "../Redux/PostSlice"

export default function Feed() {

    const dispatch = useDispatch();
    const User = useSelector(state => state.User.User);
    const Posts = useSelector(state => state.Post.Post);

    const reverseArray = (array) => {

        let reversedArray = [];

        for (let i = array.length - 1; i >= 0; i--) {

            reversedArray.push(array[i]);

        }

        return reversedArray;

    }

    useEffect(() => {

        try {
            const getPost = async () => {

                const res = await axios.get(`${Host}/api/post/feed/all`, {
                    headers: {
                        'Authorization': `Bearer ${User.token}`
                    }
                });

                dispatch(AllPostFatchSuccess(res.data));
            }

            getPost();

        } catch (error) {

            dispatch(AllPostFatchFailure(error.response.data));
        }

    }, [dispatch, User])


    return (
        <div className=' basis-[42%]'>
            <div className=' p-5 w-full'>
                <Story />
                <Share />
                {
                    Posts.length > 0 ?
                        reverseArray(Posts).map((post, index) => {
                            return <Post key={index} post={post} />
                        })
                        :
                        <div className='flex justify-center bg-white mt-5 w-full h-44 rounded-md shadow shadow-gray-300'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <p className=' text-lg font-semibold '>No Posts to show</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
