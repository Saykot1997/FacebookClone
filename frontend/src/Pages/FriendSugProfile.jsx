import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Friends from '../Components/Friends';
import Intro from '../Components/Intro';
import LiveEvents from '../Components/LiveEvents';
import Photos from '../Components/Photos';
import Post from '../Components/Post';
import ProfileTop from '../Components/ProfileTop';
import Share from '../Components/Share';
import SingleFriendSug from '../Components/SingleFriendSug';
import Topbar from '../Components/Topbar';

function FriendSugProfile() {
    const [isScrolled, setScrolled] = useState(false);
    const [isHover, setHover] = useState(false);
    const navigate = useNavigate();

    const GotoFriendHomePage = () => {
        navigate('/friends/suggetion');
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

                {/* Left part */}

                <div id='scrolling_div' onScroll={(e) => { ShowScrool(e) }} className=' h-full w-[23.5%] bg-white shadow-md   shadow-gray-400 overflow-y-scroll friendSuggetionsScrollbar z-20'>

                    <div className={isScrolled ? ' flex items-center p-3 sticky top-0 border-b border-gray-300 z-10 bg-white ' : "flex items-center p-3 sticky top-0 z-10 bg-white"}>
                        <div className=' mr-5'>
                            < AiOutlineArrowLeft onClick={GotoFriendHomePage} className=' text-lg text-gray-700 cursor-pointer' />
                        </div>
                        <div>
                            <p onClick={GotoFriendHomePage} className=' text-sm text-gray-400 hover:underline cursor-pointer'>Friends</p>
                            <p className=' font-bold text-[23px]'>Suggetions</p>
                        </div>
                    </div>

                    <div className=' px-2'>
                        <p className='text-[17px] font-semibold'>People may you know</p>
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                        <SingleFriendSug />
                    </div>
                </div>

                {/* right part  */}

                <div className='w-[77.5%] h-full bg-gray-100 overflow-y-scroll'>

                    <div className=''>
                        <ProfileTop FriendSuggetions isHover={isHover} setHover={setHover} />
                        <div className=' flex justify-center items-center mt-4 mx-6'>
                            <div className=' w-[80%] flex justify-between'>
                                <div className='h-screen sticky left-0 top-4 overflow-y-scroll ProfileScrollbar w-2/5 mb-5 mr-2'>
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

export default FriendSugProfile
