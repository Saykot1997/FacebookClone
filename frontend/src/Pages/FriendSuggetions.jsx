import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Topbar from '../Components/Topbar';
import Icon from "../images/FriendRequestPageIcon.svg";
import SingleFriendSug from '../Components/SingleFriendSug';
import { useNavigate } from 'react-router-dom';


function FriendSuggetions() {

    const [isScrolled, setScrolled] = useState(false);
    let navigate = useNavigate();

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
                    </div>
                </div>

                {/* right part  */}

                <div className='w-[77.5%] h-full bg-gray-100 overflow-y-scroll'>
                    <div className=' w-full h-full flex justify-center items-center'>
                        <div className=' flex flex-col justify-center items-center'>
                            <img src={Icon} alt="" className=' h-28' />
                            <h1 className=' text-gray-600 text-xl font-bold'>Select people's name to preview their profiles.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendSuggetions
