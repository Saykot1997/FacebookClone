import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Host } from '../Data';
import ProfilePhoto from "../images/userAvater.png"
import FriendsInfo from './FriendsInfo';

function Friends({ AllFriends, Profile, friendData }) {

    const user = useSelector(state => state.User.User);
    const [isHover, setHover] = useState(false);
    const allFriends = useSelector((state) => state.Friends.AllFriends)
    const [hoveredFriend, setHoveredFriend] = useState(null);
    const [allFriendsOfFriend, setAllFriendsOfFriend] = useState([]);
    // console.log(friendData);

    useEffect(() => {

        if (friendData) {

            const getAllFriends = async () => {

                try {

                    const res = await axios.get(`${Host}/api/friend/getAllFriendsOfFriend/${friendData._id}`, {
                        headers: {
                            'Authorization': 'Bearer ' + user.token
                        }
                    })

                    setAllFriendsOfFriend(res.data);
                    // console.log(res.data);

                } catch (error) {

                    console.log(error);
                }
            }
            getAllFriends()
        }
    }, [friendData]);

    const showPeople = (friend) => {
        setHover(true);
        setHoveredFriend(friend);
    }
    const hidePeople = () => {
        setHover(false);
    }

    return (
        <div className=' w-full bg-white shadow rounded-lg p-3 mt-3'>
            <div className=' flex justify-between'>
                <h2 className=' font-bold text-lg items-center hover:underline cursor-pointer'>Friends</h2>
                {
                    Profile &&
                    <NavLink to={`/profile/friends`}>
                        <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Friends</span>
                    </NavLink>
                }
                {
                    AllFriends &&
                    <NavLink to={`/friends/all/friends/${friendData && friendData._id}`}>
                        <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Friends</span>
                    </NavLink>
                }
            </div>
            <div className=' grid grid-cols-3 gap-3 mt-2'>

                {
                    Profile && allFriends.length > 0 && allFriends.length > 9 && allFriends.slice(0, 9).map((friend, i) => {

                        return (
                            <div key={i} onMouseEnter={() => showPeople(friend)} onMouseLeave={hidePeople} className=' relative'>
                                <div className=' h-24 rounded-md overflow-hidden cursor-pointer'>
                                    <img src={friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-full w-full object-cover' />
                                </div>
                                {
                                    hoveredFriend && hoveredFriend._id === friend._id &&

                                    <FriendsInfo isHover={isHover} friends hoveredFriend={hoveredFriend} />
                                }
                                <p className=' font-semibold text-base capitalize'>{friend.firstName + " " + friend.sureName}</p>
                            </div>
                        )
                    })
                }
                {
                    Profile && allFriends.length > 0 && allFriends.length < 9 && allFriends.map((friend, i) => {

                        return (
                            <div key={i} onMouseEnter={() => showPeople(friend)} onMouseLeave={hidePeople} className=' relative'>
                                <div className=' h-24 rounded-md overflow-hidden cursor-pointer'>
                                    <img src={friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-full w-full object-cover' />
                                </div>
                                {
                                    hoveredFriend && hoveredFriend._id === friend._id &&

                                    <FriendsInfo isHover={isHover} friends hoveredFriend={hoveredFriend} />
                                }
                                <p className=' font-semibold text-base capitalize'>{friend.firstName + " " + friend.sureName}</p>
                            </div>
                        )
                    })
                }
                {
                    !Profile && friendData && allFriendsOfFriend.length > 0 && allFriendsOfFriend.length > 9 && allFriendsOfFriend.slice(0, 9).map((friend, i) => {

                        return (
                            <div key={i} onMouseEnter={() => showPeople(friend)} onMouseLeave={hidePeople} className=' relative'>
                                <div className=' h-24 rounded-md overflow-hidden cursor-pointer'>
                                    <img src={friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-full w-full object-cover' />
                                </div>
                                {
                                    hoveredFriend && hoveredFriend._id === friend._id &&

                                    <FriendsInfo isHover={isHover} friends hoveredFriend={hoveredFriend} />
                                }
                                <p className=' font-semibold text-base capitalize'>{friend.firstName + " " + friend.sureName}</p>
                            </div>
                        )
                    })
                }
                {
                    !Profile && friendData && allFriendsOfFriend.length > 0 && allFriendsOfFriend.length < 9 && allFriendsOfFriend.map((friend, i) => {

                        return (
                            <div key={i} onMouseEnter={() => showPeople(friend)} onMouseLeave={hidePeople} className=' relative'>
                                <div className=' h-24 rounded-md overflow-hidden cursor-pointer'>
                                    <img src={friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-full w-full object-cover' />
                                </div>
                                {
                                    hoveredFriend && hoveredFriend._id === friend._id &&

                                    <FriendsInfo isHover={isHover} friends hoveredFriend={hoveredFriend} />
                                }
                                <p className=' font-semibold text-base capitalize'>{friend.firstName + " " + friend.sureName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Friends
