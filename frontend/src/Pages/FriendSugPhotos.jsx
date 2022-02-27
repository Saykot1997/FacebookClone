import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt';
import ProfilePhotoComponent from '../Components/ProfilePhotoComponent';
import ProfileTop from '../Components/ProfileTop';
import ProfileVideoComponent from '../Components/ProfileVideoComponent';
import SingleFriendSug from '../Components/SingleFriendSug';
import Topbar from '../Components/Topbar';
import { Host } from '../Data';

function FriendSugPhotos() {

    const [isScrolled, setScrolled] = useState(false);
    let navigate = useNavigate();
    const user = useSelector(state => state.User.User);
    const friendSugeesions = useSelector(state => state.Friends.SuggestedFriends);
    const location = useLocation();
    const friendId = location.pathname.split('/')[4];
    const [friendData, setFriendData] = useState(null);

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

    }, [user, location.pathname])

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
                            <p className=' font-bold text-[23px]'>Suggetions</p>
                        </div>
                    </div>

                    <div className=' px-2'>
                        <p className='text-[17px] font-semibold'>People may you know</p>

                        {
                            friendSugeesions.length > 0 && friendSugeesions.map((friend, index) => {

                                return (

                                    <SingleFriendSug friend={friend} key={index} />
                                )
                            })
                        }
                    </div>
                </div>

                {/* right part */}
                <div className='w-[77.5%] h-full bg-gray-100 overflow-y-scroll'>
                    <div>
                        <ProfileTop friendData={friendData} FriendSugeesions Photos />
                        <div className=' flex justify-center items-center mt-4 mx-6'>
                            <div className=' w-[80%]'>
                                <ProfilePhotoComponent FriendSugeesions />
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

export default FriendSugPhotos