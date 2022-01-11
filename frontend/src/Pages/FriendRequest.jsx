import React, { useState } from 'react'
import Topbar from '../Components/Topbar'
import Icon from "../images/FriendRequestPageIcon.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import SingleFriendRequest from '../Components/SingleFriendRequest';

function FriendRequest({ setPageType }) {

    const navigate = useNavigate();
    const [hasFriendRequest, setHasFriendRequest] = useState(true);
    const [isScrolled, setScrolled] = useState(false);
    const GotoFriendHomePage = () => {
        navigate('/friends');
    }
    const ShowScrool = (e) => {

        if (e.target.scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

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
                            hasFriendRequest ?
                                <div>
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                    <SingleFriendRequest />
                                </div>
                                :
                                <p className=' text-green-600 text-sm'>No Friend Request</p>
                        }
                    </div>
                </div>

                {/* right part */}

                <div className='w-[73.5%] h-full overflow-y-scroll'>
                    <div className=' w-full h-full flex justify-center items-center'>
                        <div className=' flex flex-col justify-center items-center'>
                            <img src={Icon} alt="" className=' h-28' />
                            {
                                hasFriendRequest ?

                                    <h1 className=' text-gray-600 text-xl font-bold'>Select People's name to preview their profie</h1>
                                    :
                                    <h1 className=' text-gray-600 text-xl font-bold'>When you have friend request or suggetions, you'll see them here.</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendRequest
