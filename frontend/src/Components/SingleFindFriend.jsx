import React, { useState } from 'react'
import ProfilePhoto from "../images/userAvater.png"
import { Host } from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { loadingSuccess } from '../Redux/UserSlice';
import { FriendsRequestsFatchSuccess, SuggestedFriendsFatchSuccess } from '../Redux/FriendsSlice';
import { NavLink } from 'react-router-dom';

function SingleFindFriend({ RequestedFriend, friend }) {

    const user = useSelector(state => state.User.User);
    const request = useSelector(state => state.Friends.FriendsRequests);
    const friendSugeesions = useSelector(state => state.Friends.SuggestedFriends);
    const [mutalFriends, setMutalFriends] = useState();
    const dispatch = useDispatch();

    useEffect(() => {

        if (friend) {

            const MutalFriend = () => {
                let mutal = [];
                let userFriends = user.friends;
                let friendFriends = friend.friends;

                for (let i = 0; i < userFriends.length; i++) {
                    for (let j = 0; j < friendFriends.length; j++) {
                        if (userFriends[i] === friendFriends[j]) {
                            mutal.push(userFriends[i]);
                        }
                    }
                }

                setMutalFriends(mutal.length);
            }
            MutalFriend()
        }

    }, [user, friend]);

    const AddFriend = async (id, RequestedFriend) => {

        if (RequestedFriend) {
            try {

                const res = await axios.post(`${Host}/api/friend/acceptFriendRequest`, { friendId: id }, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                dispatch(FriendsRequestsFatchSuccess(request.filter(item => item._id !== id)));
                dispatch(loadingSuccess(res.data));

            } catch (error) {

                console.log(error);
            }

        } else {

            try {

                const res = await axios.post(`${Host}/api/friend/friendRequest`, { friendId: id }, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                dispatch(SuggestedFriendsFatchSuccess(friendSugeesions.filter(friend => friend._id !== id)));
                dispatch(loadingSuccess(res.data));

            } catch (error) {

                console.log(error);
            }
        }
    }


    const RemoveFriend = async (id, RequestedFriend) => {

        if (RequestedFriend) {

            try {

                const res = await axios.delete(`${Host}/api/friend/removeFriendRequest/${id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                dispatch(FriendsRequestsFatchSuccess(request.filter(item => item._id !== id)));
                dispatch(loadingSuccess(res.data));

            } catch (error) {

                console.log(error);
            }

        } else {

            dispatch(SuggestedFriendsFatchSuccess(friendSugeesions.filter(friend => friend._id !== id)));
        }
    }



    return (

        <div className=' h-[360px] bg-white shadow shadow-gray-400 rounded-lg overflow-hidden'>
            <div className=' h-3/5 w-full'>
                {
                    RequestedFriend ?
                        <NavLink to={`/friends/request/profile/${friend && friend._id}`} >
                            <img src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-full w-full object-cover' />
                        </NavLink>
                        :
                        <NavLink to={`/friends/suggetion/profile/${friend && friend._id}`}>
                            <img src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-full w-full object-cover' />
                        </NavLink>

                }
            </div>
            <div className=' w-full h-2/5'>
                {
                    RequestedFriend ?
                        <NavLink to={`/friends/request/profile/${friend && friend._id}`} >
                            <p className=' font-semibold my-2 mx-3 hover:underline cursor-pointer capitalize'>{friend && friend.firstName + " " + friend.sureName}</p>
                        </NavLink>
                        :
                        <NavLink to={`/friends/suggetion/profile/${friend && friend._id}`}>
                            <p className=' font-semibold my-2 mx-3 hover:underline cursor-pointer capitalize'>{friend && friend.firstName + " " + friend.sureName}</p>
                        </NavLink>

                }

                <div className=' flex items-center ml-2'>
                    <div className=' flex'>
                        <img src={ProfilePhoto} alt="" className=' h-5 w-5 rounded-full object-cover' />
                        <img src={ProfilePhoto} alt="" className='-ml-[2px] h-5 w-5 rounded-full object-cover' />
                    </div>
                    <span className=' ml-1 text-gray-600 text-sm'>{friend && mutalFriends && mutalFriends} Mutal Friends</span>
                </div>
                <div className='w-full p-2'>
                    <button onClick={() => AddFriend(friend && friend._id, RequestedFriend && "RequestedFriend")} className=' bg-blue-100 w-full rounded-lg py-1 font-semibold mb-1 text-blue-500 hover:bg-blue-200'>{RequestedFriend ? "Confirm" : "Add Friend"}</button>
                    <button onClick={() => RemoveFriend(friend && friend._id, RequestedFriend && "RequestedFriend")} className='bg-gray-100 w-full rounded-lg py-1 font-semibold hover:bg-gray-200'>{RequestedFriend ? "Delete" : "Remove"}</button>
                </div>
            </div>
        </div>
    )

}

export default SingleFindFriend
