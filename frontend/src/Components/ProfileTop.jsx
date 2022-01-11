import coverPhoto from '../images/cover-photo.jpg';
import profilePhoto from '../images/1.jpg';
import { BsFillCameraFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { ImUserPlus } from 'react-icons/im';
import { useState } from 'react';
import FriendsInfo from './FriendsInfo';
import { NavLink } from "react-router-dom"

function ProfileTop({ FriendSuggetions, Profile, About, Friends, Photos, Videos, ChecksInc }) {
    const [isHover, setHover] = useState(false);

    const showPeople = () => {
        setHover(true);
    }
    const hidePeople = () => {
        setHover(false);
    }

    const IsUserProfile = Profile || About || Friends || Photos || Videos || ChecksInc

    console.log(IsUserProfile);

    return (
        <div className=' min-h-[570px] w-full bg-white shadow flex justify-center'>
            <div className={FriendSuggetions ? " w-[80%] h-full" : 'w-[62%] h-full'}>
                <div className=' h-[350px] w-full rounded-lg overflow-hidden relative'>
                    <img src={coverPhoto} alt="" className=' w-full h-full object-cover' />
                    <div className=' cursor-pointer flex items-center absolute right-3 bottom-5 bg-white rounded-md px-2 py-2 group'>
                        <BsFillCameraFill className=' mr-1 text-lg' />
                        <button className='font-semibold text-sm'>Edit Profile Photo</button>
                        <div className=' absolute top-0 left-0 h-full w-full bg-slate-800 opacity-0 group-hover:opacity-10 '></div>
                    </div>
                </div>
                <div className='flex w-full h-36 px-5'>
                    <div className=' basis-[24%] relative'>
                        <div className=' group cursor-pointer absolute -top-9 left-5 h-44 w-44 rounded-full border-4 border-white shadow'>
                            <img src={profilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                            <div className=' absolute right-0 bottom-2 rounded-full h-9 w-9 bg-gray-100 z-10 flex justify-center items-center overflow-hidden hover:bg-gray-200'>
                                <BsFillCameraFill className=' text-lg' />
                            </div>
                            <div className=' absolute top-0 left-0 h-full w-full rounded-full bg-slate-500 opacity-0 group-hover:opacity-10 '></div>
                        </div>
                    </div>
                    <div className=' basis-[30%] self-end'>
                        <h4 className=' font-bold text-3xl'>Jhon Doe</h4>
                        <p className={`text-gray-600 font-semibold ${FriendSuggetions ? "" : "hover:underline cursor-pointer"} my-1`}>{FriendSuggetions ? <div> <span>145 friends</span>   <span>14 mutal</span></div> : "145 Friends"}</p>
                        <div className='flex relative'>
                            <img src={profilePhoto} onMouseEnter={showPeople} onMouseLeave={hidePeople} alt="" className=' h-8 w-8 rounded-full object-cover cursor-pointer' />
                            <FriendsInfo isHover={isHover} />
                        </div>
                    </div>
                    <div className=' basis-[40%] self-end justify-self-end flex justify-end  '>
                        <div className=' group relative rounded-md bg-blue-500 px-2 py-2 flex justify-center items-center cursor-pointer'>
                            <div className=' bg-white text-blue-500 font-bold h-4 w-4 flex justify-center items-center mr-1 rounded-full'> {FriendSuggetions ? <ImUserPlus /> : <span className=' mb-1'>+</span>}</div>
                            <button className=' text-white text-sm font-semibold'>{FriendSuggetions ? "Add Friend" : "Add To Story"}</button>
                            <div className=' absolute h-full w-full bg-black opacity-0 top-0 left-0 group-hover:opacity-10'></div>
                        </div>
                        <div className='rounded-md bg-gray-200 hover:bg-gray-300 px-2 py-2 ml-2 flex justify-center items-center cursor-pointer'>
                            <div className='flex justify-center items-center mr-1'> {FriendSuggetions ? <FaFacebookMessenger /> : <MdModeEditOutline />}</div>
                            <button className=' text-sm font-semibold'>{FriendSuggetions ? "Message" : "Edit Profile"}</button>
                        </div>

                    </div>
                </div>

                <div className=' px-5'>
                    <hr className=' h-[1px] bg-black opacity-90 mt-5 ' />
                    <div className=' flex justify-between py-1'>
                        <div className='flex'>
                            <NavLink to='/profile' className='profileItems '>
                                <span className={`${Profile ? " text-blue-500" : " text-gray-500 font-semibold"} inline-block`}>Post</span>
                                {
                                    Profile && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                }
                            </NavLink>
                            <NavLink to="/profile/about" className='profileItems '>
                                <span className={`${About ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>About</span>
                                {
                                    About && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                }
                            </NavLink>
                            <NavLink to="/profile/friends" className='profileItems '>
                                <span className={`${Friends ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Friends</span>
                                {
                                    Friends && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                }
                            </NavLink>
                            <NavLink to="/profile/photos" className='profileItems '>
                                <span className={`${Photos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Photos</span>
                                {
                                    Photos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                }
                            </NavLink>
                            <NavLink to="/profile/videos" className='profileItems '>
                                <span className={`${Videos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Videos</span>
                                {
                                    Videos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                }
                            </NavLink>
                            <NavLink to="/profile/checkInc" className='profileItems '>
                                <span className={`${ChecksInc ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Checks-Inc</span>
                                {
                                    ChecksInc && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                }
                            </NavLink>
                            <div className=' profileItems text-gray-500 font-semibold'>More</div>
                        </div>
                        <div className=' relative group  h-7 w-9 rounded-md overflow-hidden mt-2 cursor-pointer  bg-gray-300  flex justify-center items-center'>
                            <span className=' text-lg font-bold mb-3'>...</span>
                            <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileTop
