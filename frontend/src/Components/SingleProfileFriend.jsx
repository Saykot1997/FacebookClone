import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Host } from '../Data';
import ProfilePhoto from "../images/2.jpg"

function SingleProfileFriend({ friend, profile }) {

    const user = useSelector(state => state.User.User);
    const [mutalFriends, setMutalFriends] = useState();
    const [mutalFriendsLength, setMutalFriendsLength] = useState();

    useEffect(() => {

        if (friend) {

            const MutalFriend = () => {

                let mutal = [];
                let userFriends = user.friends;
                let friendFriends = friend.friends;

                if (user._id !== friend._id) {
                    for (let i = 0; i < userFriends.length; i++) {
                        for (let j = 0; j < friendFriends.length; j++) {
                            if (userFriends[i] === friendFriends[j]) {
                                mutal.push(userFriends[i])
                            }
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


    return (
        <div className=' w-full p-5 flex justify-between items-center shadow-sm shadow-gray-200'>
            <div className=' flex items-center'>
                <NavLink to="/friends/all/profile">
                    <img src={friend && friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} alt="" className=' h-20 w-20 mr-3 rounded-md object-cover cursor-pointer' />
                </NavLink>
                <div>
                    <NavLink to="/friends/all/profile" className=' font-semibold capitalize cursor-pointer'>{friend && friend.firstName + " " + friend.sureName}</NavLink>
                    <p className=' text-gray-500 text-sm cursor-pointer'>{mutalFriendsLength} mutal friends</p>
                </div>
            </div>
            {
                profile &&

                <div className=' h-9 w-9 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer'>
                    <BsThreeDots className=' to-gray-500 text-lg' />
                </div>
            }
        </div>
    )
}

export default SingleProfileFriend
