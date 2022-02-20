import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Friends from '../Components/Friends';
import Intro from '../Components/Intro';
import LiveEvents from '../Components/LiveEvents';
import Photos from '../Components/Photos';
import Post from '../Components/Post';
import ProfileTop from '../Components/ProfileTop';
import Share from '../Components/Share';
import SingleAllFriend from '../Components/SingleAllFriend';
import Topbar from '../Components/Topbar';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { Host } from '../Data';

function AllFriendSecProfile() {

    const [isScrolled, setScrolled] = useState(false);
    let navigate = useNavigate();
    const user = useSelector(state => state.User.User);
    const allFriend = useSelector(state => state.Friends.AllFriends);
    const dispatch = useDispatch();
    const location = useLocation();
    const friendId = location.pathname.split('/')[4];
    const [friendData, setFriendData] = useState(null);


    const GotoFriendHomePage = () => {
        navigate('/friends/all');
    }

    const ShowScrool = (e) => {

        if (e.target.scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {

        try {

            const getFriendData = async () => {
                const res = await axios.get(`${Host}/api/friend/getSingleFriend/${friendId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                })

                setFriendData(res.data);
            }

            getFriendData()

        } catch (error) {

            console.log(error);
        }

    }, []);


    // console.log(friendData);

    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>

                {/* left part */}
                <div id='scrolling_div' onScroll={(e) => { ShowScrool(e) }} className=' h-full w-[23.5%] bg-white shadow-md   shadow-gray-400 overflow-y-scroll friendSuggetionsScrollbar z-20'>

                    <div className={isScrolled ? ' flex items-center p-3 sticky top-0 border-b border-gray-300 z-10 bg-white ' : "flex items-center p-3 sticky top-0 z-10 bg-white"}>
                        <div className=' mr-5'>
                            < AiOutlineArrowLeft onClick={GotoFriendHomePage} className=' text-lg text-gray-700 cursor-pointer' />
                        </div>
                        <div>
                            <p onClick={GotoFriendHomePage} className=' text-sm text-gray-400 hover:underline cursor-pointer'>Friends</p>
                            <p className=' font-bold text-[23px]'>All Friends</p>
                        </div>
                    </div>
                    <div className=' px-3 mb-3'>
                        <div className={`${isScrolled ? "hidden" : "visible"} pb-3 border-b border-gray-300`}>
                            <input type="text" placeholder='Search Friends' className=' bg-gray-100 rounded-3xl w-full py-[6px] px-3' />
                        </div>
                    </div>
                    <div className=' px-2'>
                        <p className='text-[17px] font-semibold ml-2'>{allFriend.length} Friends</p>
                        {
                            allFriend.length > 0 && allFriend.map((friend, index) => {
                                return (

                                    <SingleAllFriend friend={friend} key={index} />
                                )
                            })
                        }
                    </div>
                </div>

                {/* right part */}
                <div className='w-[77.5%] h-full bg-gray-100 overflow-y-scroll'>
                    <div>
                        <ProfileTop friendData={friendData} AllFriends />
                        <div className=' flex justify-center items-center mt-4 mx-6'>
                            <div className=' w-[80%] flex justify-between'>
                                <div className='h-screen sticky left-0 top-4 overflow-scroll ProfileScrollbar w-2/5 mb-2 mr-2'>
                                    <Intro />
                                    <Photos />
                                    <Friends />
                                    <LiveEvents />
                                </div>
                                <div className=' w-3/5 ml-2'>
                                    <Share />
                                    {/* <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllFriendSecProfile

