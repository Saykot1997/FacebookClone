import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Host } from '../Data';
import SingleProfileFriend from './SingleProfileFriend'

function ProfileFriend({ About, Profile, profile, AllFriends }) {

    const allFriends = useSelector(state => state.Friends.AllFriends);
    const user = useSelector(state => state.User.User);
    const location = useLocation();
    const friendId = location.pathname.split('/')[4];
    const [friendAllFriend, setFriendAllFriend] = useState([]);


    useEffect(() => {

        const getFriendData = async () => {

            try {

                const res = await axios.get(`${Host}/api/friend/getAllFriendsOfFriend/${friendId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                })

                setFriendAllFriend(res.data);

            } catch (error) {

                console.log(error)
            }
        }
        getFriendData()

    }, [user, location.pathname])

    return (
        <div className=' w-full p-3 bg-white shadow shadow-gray-300 rounded-md mb-3'>
            <div className=' flex items-center justify-between px-2'>
                <h3 className=' font-bold text-xl'>Friends</h3>
                <div className='flex items-center'>
                    {
                        !About &&

                        <div className=' mr-3 relative'>
                            <input type="text" placeholder='Search' className=' py-[6px] pl-8 focus:outline-0 rounded-2xl bg-gray-100' />
                            <BiSearchAlt2 className=' absolute top-1/2 left-3 -translate-y-1/2  text-gray-500 text-lg' />
                        </div>
                    }

                    <p className=' text-blue-500 font-semibold  mr-3 py-1 hover:bg-gray-100 rounded-md px-2 cursor-pointer'>Friend Requests</p>
                    <p className=' text-blue-500 font-semibold  mr-3 py-1 hover:bg-gray-100 rounded-md px-2 cursor-pointer'>Find Friend</p>
                    <div className=' h-10 w-12 rounded bg-gray-100 flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
                        <BsThreeDots className=' text-lg' />
                    </div>
                </div>
            </div>
            <div className=' flex mt-2'>
                <div className=' relative p-3 rounded-md hover:bg-gray-100 cursor-pointer'>
                    <span className=' text-blue-500 font-semibold'>All Friends</span>
                    <div className=' absolute w-full h-[3px] bg-blue-500 -bottom-2 left-0'></div>
                </div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>Recent Added</div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>Birthday</div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>Work</div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>Collage</div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>School</div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>Curent City</div>
                <div className=' p-3 rounded-md text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer'>More</div>
            </div>

            {
                About ?

                    <div className=' w-full'>
                        <div className=' p-2 mt-5 w-full grid grid-cols-2 gap-1'>
                            {
                                Profile && allFriends.length > 0 && allFriends.length > 6 &&

                                allFriends.slice(0, 6).map((friend, i) => {
                                    return (

                                        <SingleProfileFriend key={i} friend={friend} profile={profile} />
                                    )
                                })
                            }

                            {
                                Profile && allFriends.length > 0 && allFriends.length < 6 &&

                                allFriends.map((friend, i) => {
                                    return (

                                        <SingleProfileFriend key={i} friend={friend} profile={profile} />
                                    )
                                })
                            }
                            {/* friends friend */}
                            {
                                !Profile && friendAllFriend.length > 0 && friendAllFriend.length > 6 &&

                                friendAllFriend.slice(0, 6).map((friend, i) => {
                                    return (

                                        <SingleProfileFriend key={i} friend={friend} profile={profile} />
                                    )
                                })
                            }

                            {
                                !Profile && friendAllFriend.length > 0 && friendAllFriend.length < 6 &&

                                friendAllFriend.map((friend, i) => {
                                    return (

                                        <SingleProfileFriend key={i} friend={friend} profile={profile} />
                                    )
                                })
                            }

                        </div>
                        <div className=' w-full'>
                            {
                                Profile &&

                                <NavLink to="/profile/friends">
                                    <button className=' w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md'>See All</button>
                                </NavLink>
                            }
                            {
                                AllFriends &&

                                <NavLink to={`/friends/all/friends/${friendId}`}>
                                    <button className=' w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md'>See All</button>
                                </NavLink>
                            }
                        </div>
                    </div>

                    :

                    <div className=' p-2 mt-5 w-full grid grid-cols-2 gap-1'>
                        {
                            Profile && allFriends.length > 0 && allFriends.map((friend, index) => {
                                return (

                                    <SingleProfileFriend key={index} friend={friend} />
                                )
                            })
                        }
                        {/* friends friend */}
                        {
                            !Profile && friendAllFriend.length > 0 && friendAllFriend.map((friend, index) => {
                                return (

                                    <SingleProfileFriend key={index} friend={friend} />
                                )
                            })
                        }
                    </div>
            }

        </div>
    )
}

export default ProfileFriend
