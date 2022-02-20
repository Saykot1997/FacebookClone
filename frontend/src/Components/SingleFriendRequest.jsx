import React, { useEffect, useState } from 'react'
import ProfilePhoto from "../images/userAvater.png"
import { useNavigate } from 'react-router-dom';
import { Host } from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loadingSuccess } from '../Redux/UserSlice';
import { FriendsRequestsFatchSuccess } from '../Redux/FriendsSlice';

function SingleFriendRequest({ Topbar, friend }) {

    const navigate = useNavigate()
    const [isHover, setIshover] = useState(false);
    const user = useSelector(state => state.User.User);
    const [mutalFriends, setMutalFriends] = useState();
    const [mutalFriendsLength, setMutalFriendsLength] = useState();
    const dispatch = useDispatch();
    const request = useSelector(state => state.Friends.FriendsRequests);

    const acceptFriendRequest = async (id) => {

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
    }

    const GoPeopleProfilePage = () => {
        navigate('/friends/request/profile');
    }

    const openMutalFriendBox = () => {
        setIshover(true)
    }
    const closeMutalFriendBox = () => {
        setIshover(false)
    }

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
                setMutalFriendsLength(mutal.length);
            }
            MutalFriend()

            axios.get(`${Host}/api/friend/getMutalFriends/${friend._id}`, {

                headers: {
                    Authorization: `Bearer ${user.token}`
                }

            }).then(res => {

                setMutalFriends(res.data);

            }).catch(err => {

                console.log(err);
            })
        }

    }, [user, friend]);

    const RemoveFriendRequest = async (id) => {

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
    }


    return (
        <div className={`flex justify-between px-2  cursor-pointer ${Topbar ? "py-1" : "hover:bg-gray-100 py-3 my-1"} rounded-lg`}>
            <div onClick={GoPeopleProfilePage} className=' h-14 w-1/5'>
                <img src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' w-14 h-14 rounded-full object-cover' />
            </div>
            <div className=' ml-2 w-4/5'>
                {
                    Topbar ? <p className=' text-sm text-gray-500'><span className=' font-semibold text-base text-black capitalize'>{friend && friend.firstName + " " + friend.sureName}</span> send you a friend request</p> : <p className=' font-semibold capitalize'>{friend && friend.firstName + " " + friend.sureName}</p>
                }
                {
                    Topbar && <p className=' text-xs font-bold text-blue-400 mb-2'>12 hours ago</p>
                }

                <div onMouseEnter={openMutalFriendBox} onMouseLeave={closeMutalFriendBox} className=' flex my-2'>
                    {
                        mutalFriends && mutalFriends.length > 0 && mutalFriends.map((friend, index) =>

                            <img key={index} src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-5 w-5 rounded-full object-cover' />
                        )
                    }
                    {
                        mutalFriends && mutalFriends.length > 0 && mutalFriends.length > 2 && mutalFriends.slice(0, 2).map((friend, index) =>

                            <img key={index} src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-5 w-5 rounded-full object-cover' />
                        )
                    }
                    {
                        mutalFriends && mutalFriends.length > 0 &&
                        <div className=' relative  text-xs text-gray-500 ml-1' >{mutalFriendsLength} Mutal Friend
                            <div className={`mutualFrideBox ${isHover ? "visible" : "hidden"}`}>
                                {
                                    mutalFriends.length > 0 && mutalFriends.map((f, index) =>
                                        <p key={index} className='text-white text-xs'>{friend && f.firstName + " " + f.sureName}</p>
                                    )
                                }
                            </div>
                        </div>
                    }

                </div>
                <div className=' w-full flex justify-between'>

                    <button onClick={() => acceptFriendRequest(friend && friend._id)} className=' w-1/2 bg-blue-500 mr-1 py-[6px] rounded-md text-white font-semibold'>Confirm</button>
                    <button onClick={() => RemoveFriendRequest(friend && friend._id)} className=' w-1/2 bg-gray-300 ml-1 py-[6px] rounded-md font-semibold'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SingleFriendRequest

