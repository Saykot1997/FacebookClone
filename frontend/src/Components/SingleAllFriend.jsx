import React, { useEffect, useState } from 'react'
import ProfilePhoto from "../images/userAvater.png"
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Host } from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loadingSuccess } from '../Redux/UserSlice';

function SingleAllFriend({ friend }) {

    const navigate = useNavigate()
    const [isHover, setIshover] = useState(false);
    const user = useSelector(state => state.User.User);
    const [mutalFriends, setMutalFriends] = useState();
    const [mutalFriendsLength, setMutalFriendsLength] = useState();
    const [editModeOpen, setEditModeOpen] = useState(false);
    const dispatch = useDispatch();

    const GoPeopleProfilePage = () => {
        navigate(`/friends/all/profile/${friend._id}`);
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
                            mutal.push(userFriends[i])
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


    const RemoveFriend = async (id) => {

        try {

            const res = await axios.delete(`${Host}/api/friend/removeFriend/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })

            console.log(res.data);
            setEditModeOpen(false);
            dispatch(loadingSuccess(res.data));


        } catch (error) {

            console.log(error);
        }
    }

    return (
        <div className=' relative flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded-lg my-1'>
            <div className='flex'>
                <img onClick={GoPeopleProfilePage} src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' w-14 h-14 rounded-full object-cover' />
                <div className=' ml-2'>
                    <p onClick={GoPeopleProfilePage} className=' capitalize font-semibold'>{friend && friend.firstName + " " + friend.sureName}</p>
                    {
                        mutalFriends && mutalFriends.length > 0 ?

                            <div className=' flex my-2' onMouseEnter={openMutalFriendBox} onMouseLeave={closeMutalFriendBox}>
                                <div className=' relative group text-xs text-gray-500 ml-1'>{mutalFriendsLength} Mutal Friend
                                    <div className={`mutualFrideBox ${isHover ? "visible" : "hidden"}`}>
                                        {
                                            mutalFriends && mutalFriends.length > 0 && mutalFriends.map((f, index) =>
                                                <p key={index} className='text-white text-xs'>{friend && f.firstName + " " + f.sureName}</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            :

                            null
                    }
                </div>
            </div>
            <div onClick={() => setEditModeOpen(!editModeOpen)} className='hover:bg-gray-300 rounded-full p-2 relative' >
                <BsThreeDots className=' text-gray-500 cursor-pointer' />
            </div>
            {
                editModeOpen &&
                <div onClick={() => RemoveFriend(friend._id)} className=' absolute -bottom-6 right-2 shadow-md bg-white'>
                    <button className=' py-[6px] px-3 hover:bg-gray-200 '>Remove Friend</button>
                </div>
            }
        </div>
    )
}

export default SingleAllFriend
