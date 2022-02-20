import React, { useEffect, useState } from 'react'
import ProfilePhoto from "../images/userAvater.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Host } from '../Data';
import { SuggestedFriendsFatchSuccess } from '../Redux/FriendsSlice';
import { loadingSuccess } from '../Redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

function SingleFriendSug({ friend }) {

    const user = useSelector(state => state.User.User);
    const friendSugeesions = useSelector(state => state.Friends.SuggestedFriends);
    const [mutalFriends, setMutalFriends] = useState();
    const [mutalFriendsLength, setMutalFriendsLength] = useState();
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


    const navigate = useNavigate()

    const GoPeopleProfilePage = () => {
        navigate('/friends/suggetion/profile');
    }

    const [isHover, setIshover] = useState(false)

    const openMutalFriendBox = () => {
        setIshover(true)
    }
    const closeMutalFriendBox = () => {
        setIshover(false)
    }

    const AddFriend = async (id) => {

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

    const RemoveFriend = (id) => {

        console.log(id);

        dispatch(SuggestedFriendsFatchSuccess(friendSugeesions.filter(friend => friend._id !== id)));
    }


    return (
        <div className='flex justify-between px-2 py-3 cursor-pointer hover:bg-gray-100 rounded-lg my-1'>
            <div onClick={GoPeopleProfilePage} className=' h-14 w-1/5'>
                <img src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' w-14 h-14 rounded-full object-cover' />
            </div>
            <div className=' ml-2 w-4/5'>
                <p onClick={GoPeopleProfilePage} className=' font-semibold capitalize'>{friend && friend.firstName + " " + friend.sureName}</p>
                <div className=' flex my-2' onMouseEnter={openMutalFriendBox} onMouseLeave={closeMutalFriendBox}>
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

                    <div className=' relative group text-xs text-gray-500 ml-1'>{friend && mutalFriendsLength && mutalFriendsLength} Mutal Friend
                        <div className={`mutualFrideBox ${isHover ? "visible" : "hidden"}`}>
                            {
                                mutalFriends && mutalFriends.length > 0 && mutalFriends.map((f, index) =>
                                    <p key={index} className='text-white text-xs'>{friend && f.firstName + " " + f.sureName}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between'>
                    <button onClick={() => AddFriend(friend && friend._id)} className=' w-1/2 bg-blue-500 mr-1 py-[6px] rounded-md text-white font-semibold'>Add Friend</button>
                    <button onClick={() => RemoveFriend(friend && friend._id)} className=' w-1/2 bg-gray-300 ml-1 py-[6px] rounded-md font-semibold'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SingleFriendSug
