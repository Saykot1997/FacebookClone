import React, { useEffect } from 'react'
import ProfileAboutLeft from './ProfileAboutLeft';
import { MdWork } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { BsTelephoneFill, BsThreeDots } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { IoHome, IoLocationSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loadingSuccess } from '../Redux/UserSlice';
import { Host } from '../Data';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProfileAboutComponent({ Profile }) {

    const user = useSelector(state => state.User.User);
    const [work, setWork] = useState(user.work);
    const [priparySchool, setPriparySchool] = useState(user.priparySchool);
    const [highSchool, setHighSchool] = useState(user.highSchool);
    const [college, setCollege] = useState(user.college);
    const [university, setUniversity] = useState(user.university);
    const [city, setCity] = useState(user.city);
    const [cuntry, setCuntry] = useState(user.cuntry);
    const [phone, setPhone] = useState(user.mobileNumber);
    const [editDtailsMode, setEditDtailsMode] = useState(false);
    const [friendData, setFriendData] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const friendId = location.pathname.split('/')[4];


    useEffect(() => {

        if (friendId) {
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
        }

    }, [user, location.pathname])

    const updateBiography = async () => {

        if (!work && !priparySchool && !highSchool && !college && !university && !city && !cuntry && !phone) {

            alert("Please fill all the fields");

        } else {


            const biography = {
                work,
                priparySchool,
                highSchool,
                college,
                university,
                city,
                cuntry,
                mobileNumber: phone
            }

            try {

                const res = await axios.post(`${Host}/api/user/updateBiography`, biography, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });

                dispatch(loadingSuccess(res.data));
                setEditDtailsMode(false);

            } catch (error) {

                console.log(error);
            }
        }
    };

    const editItem = () => {
        setEditDtailsMode(true);
    }

    const cencleEditdetail = () => {

        setEditDtailsMode(false);
        setWork(user.work);
        setPriparySchool(user.priparySchool);
        setHighSchool(user.highSchool);
        setCollege(user.college);
        setUniversity(user.university);
        setCity(user.city);
        setCuntry(user.cuntry);
        setPhone(user.mobileNumber);
    }

    return (
        <div className=' flex w-full py-2 px-1 bg-white rounded-md shadow shadow-gray-300 mb-3'>
            <ProfileAboutLeft overview />
            <div className=' basis-[67%]'>
                {
                    editDtailsMode ?
                        <div>
                            {/* work */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <MdWork className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder='where do you work' value={work} onChange={(e) => setWork(e.target.value)} />
                                </div>
                            </div>
                            {/* primary school */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="what's your primary School" value={priparySchool} onChange={(e) => setPriparySchool(e.target.value)} />
                                </div>
                            </div>
                            {/* high school */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="what's your high school" value={highSchool} onChange={(e) => setHighSchool(e.target.value)} />
                                </div>
                            </div>
                            {/* college */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="what's your collage" value={college} onChange={(e) => setCollege(e.target.value)} />
                                </div>
                            </div>
                            {/* university */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="what's your university" value={university} onChange={(e) => setUniversity(e.target.value)} />
                                </div>
                            </div>
                            {/* city */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <IoHome className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="What's your city" value={city} onChange={(e) => setCity(e.target.value)} />
                                </div>
                            </div>
                            {/* cuntry */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <IoLocationSharp className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="what's your cuntry" value={cuntry} onChange={(e) => setCuntry(e.target.value)} />
                                </div>
                            </div>
                            {/* phone */}
                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                <div className=' flex w-full'>
                                    <div>
                                        <BsTelephoneFill className=' mt-1 mr-2 text-2xl text-gray-500' />
                                    </div>
                                    <input className='w-full bg-gray-300 p-[6px] rounded-md ' placeholder="what's your mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            {
                                Profile &&
                                <div className=' w-full flex justify-end'>
                                    <button onClick={updateBiography} className=' py-[6px] px-3 bg-blue-500 mr-2 rounded-md text-white hover:bg-blue-600'>Save</button>
                                    <button onClick={cencleEditdetail} className=' py-[6px] px-3 bg-gray-300 mr-2 rounded-md hover:bg-gray-400'>Cencle</button>
                                </div>
                            }
                        </div>

                        :

                        <div>
                            {
                                !friendData ?
                                    <div>
                                        {/* work */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <MdWork className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    user.work ?
                                                        <div>
                                                            <p>Work at <span className=' font-semibold capitalize'>{user.work}</span></p>
                                                            <p className=' text-xs text-gray-500'>December 1, 2016 to present</p>
                                                        </div>
                                                        :
                                                        <p>Where do you work?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* primary school */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    user.priparySchool ?
                                                        <div>
                                                            <p className=' capitalize'>{user.priparySchool}</p>
                                                            <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                        </div>
                                                        :
                                                        <p>What's your primary school?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* high school */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    user.highSchool ?
                                                        <div>
                                                            <p className=' capitalize'>{user.highSchool}</p>
                                                            <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                        </div>
                                                        :
                                                        <p>What's your high school?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* collage */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    college ?
                                                        <div>
                                                            <p className=' capitalize'>{college}</p>
                                                            <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                        </div>
                                                        :
                                                        <p>What's your college?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* university */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    user.university ?

                                                        <div>
                                                            <p className=' capitalize'>{user.university}</p>
                                                            <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                        </div>
                                                        :
                                                        <p>What's your university?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* city */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <IoHome className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    city ?
                                                        <div>
                                                            <p>Lives in <span className=' font-semibold capitalize'>{user.city}</span></p>
                                                        </div>
                                                        :
                                                        <p>What's your city?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* country */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <IoLocationSharp className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    cuntry ?
                                                        <div>
                                                            <p>From <span className=' font-semibold capitalize'>{user.cuntry}</span></p>
                                                        </div>
                                                        :
                                                        <p>What's your country?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* phone */}
                                        <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                            <div className=' flex w-full'>
                                                <div>
                                                    <BsTelephoneFill className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                </div>
                                                {
                                                    user.mobileNumber ?
                                                        <div>
                                                            <p>{user.mobileNumber}</p>
                                                            <p className=' text-xs text-gray-500'>Mobile</p>
                                                        </div>
                                                        :
                                                        <p>What's your phone number?</p>
                                                }
                                            </div>
                                            <div className='flex items-center'>
                                                <BiWorld className=' text-gray-500 mr-3 text-lg' />
                                                <div onClick={editItem} className=' h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300'>
                                                    <BsThreeDots className=' text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    :

                                    <div>
                                        {/* work */}
                                        {
                                            friendData.work &&

                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <MdWork className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p>Work at <span className=' font-semibold capitalize'>{friendData.work}</span></p>
                                                        <p className=' text-xs text-gray-500'>December 1, 2016 to present</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* primary school */}

                                        {
                                            friendData.priparySchool &&

                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p className=' capitalize'>{friendData.priparySchool}</p>
                                                        <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* high school */}
                                        {
                                            friendData.highSchool &&

                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p className=' capitalize'>{friendData.highSchool}</p>
                                                        <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* collage */}
                                        {
                                            friendData.collage &&
                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>

                                                    <div>
                                                        <p className=' capitalize'>{friendData.collage}</p>
                                                        <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* university */}

                                        {
                                            friendData.university &&
                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <FaGraduationCap className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p className=' capitalize'>{friendData.university}</p>
                                                        <p className=' text-xs text-gray-500'>Started in 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* city */}
                                        {
                                            friendData.city &&

                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <IoHome className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p>Lives in <span className=' font-semibold capitalize'>{friendData.city}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* country */}
                                        {

                                            friendData.cuntry &&
                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <IoLocationSharp className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p>From <span className=' font-semibold capitalize'>{friendData.cuntry}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {/* phone */}
                                        {
                                            friendData.mobileNumber &&

                                            <div className=' w-full flex justify-between items-center ml-3 pb-4 pt-2 pr-8'>
                                                <div className=' flex w-full'>
                                                    <div>
                                                        <BsTelephoneFill className=' mt-1 mr-2 text-2xl text-gray-500' />
                                                    </div>
                                                    <div>
                                                        <p>{friendData.mobileNumber}</p>
                                                        <p className=' text-xs text-gray-500'>Mobile</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                            }
                        </div>
                }

            </div>
        </div>
    )
}

export default ProfileAboutComponent