import React, { useEffect, useState } from 'react'
import Topbar from '../Components/Topbar'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import SingleFriendRequest from '../Components/SingleFriendRequest';
import ProfileTop from '../Components/ProfileTop';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Host } from '../Data';
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt';
import ProfileVideoComponent from '../Components/ProfileVideoComponent';

function FriendRequestVideos() {

    const user = useSelector(state => state.User.User);
    const location = useLocation();
    const friendId = location.pathname.split('/')[4];
    const [friendData, setFriendData] = useState(null);
    const friendRequests = useSelector(state => state.Friends.FriendsRequests);
    const navigate = useNavigate();
    const [isScrolled, setScrolled] = useState(false);

    const GotoFriendHomePage = () => {
        navigate('/friends/request');
    }
    const ShowScrool = (e) => {

        if (e.target.scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }


    useEffect(() => {

        const getFriendData = async () => {

            try {

                const res = await axios.get(`${Host}/api/friend/getSingleFriend/${friendId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                })

                setFriendData(res.data);

            } catch (error) {

                console.log(error)
            }
        }
        getFriendData()

    }, [user, location.pathname]);

    return (

        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>

                {/* left part */}

                <div onScroll={(e) => { ShowScrool(e) }} className=' h-full w-[23.5%] bg-white shadow-md   shadow-gray-400 overflow-y-scroll friendSuggetionsScrollbar z-20'>
                    <div className={isScrolled ? ' flex items-center p-3 sticky top-0 border-b border-gray-300 z-10 bg-white ' : "flex items-center p-3 sticky top-0 z-10 bg-white"}>
                        <div className=' mr-5'>
                            < AiOutlineArrowLeft onClick={GotoFriendHomePage} className=' text-lg text-gray-700 cursor-pointer' />
                        </div>
                        <div>
                            <p onClick={GotoFriendHomePage} className=' text-sm text-gray-400 hover:underline cursor-pointer'>Friends</p>
                            <p className=' font-bold text-[23px]'>Friends Requests</p>
                        </div>

                    </div>
                    <div className='px-2'>
                        <p className=' my-1 font-semibold text-[17px]'>Friend Requests</p>
                        <p className=' text-sm text-blue-500 cursor-pointer'>View sent requests</p>
                        {
                            friendRequests.length > 0 ?
                                <div>

                                    {
                                        friendRequests.map((friendRequest, index) => {
                                            return (

                                                <SingleFriendRequest friend={friendRequest} key={index} />
                                            )
                                        })
                                    }

                                </div>
                                :
                                <p className=' text-green-600 text-sm'>No Friend Request</p>
                        }
                    </div>
                </div>

                {/* right part */}
                <div className='w-[77.5%] h-full bg-gray-100 overflow-y-scroll'>
                    <div>
                        <ProfileTop friendData={friendData} FriendRequest Videos />
                        <div className=' flex justify-center items-center mt-4 mx-6'>
                            <div className=' w-[80%]'>
                                <ProfileVideoComponent />
                                <ProfileCheckIncomponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendRequestVideos
