import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import coverPhoto from '../images/FBCoverPhoto.png';
import profilePhoto from '../images/userAvater.png';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Host } from "../Data"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { loadingSuccess } from '../Redux/UserSlice';

function ProfilePhotoComponent({ About }) {

    const User = useSelector((state) => state.User.User);
    const [yourPhoto, setYourPhoto] = useState(true);
    const [album, setAlbum] = useState(false);
    const [editMod, setEditMod] = useState(false);
    const [currantPhoto, setCurrantPhoto] = useState("");
    const dispatch = useDispatch();

    const activeEditMod = (photo) => {
        setEditMod(!editMod);
        setCurrantPhoto(photo);
    }

    const DeletePhoto = async (photo) => {

        try {

            const res = await axios.delete(`${Host}/api/user/photoDelete/${photo}`, {
                headers: {
                    Authorization: `Bearer ${User.token}`
                }
            });

            dispatch(loadingSuccess(res.data));

        } catch (error) {
            console.log(error);
        }
    }

    const SeeYourPhotos = () => {
        setYourPhoto(true);
        setAlbum(false);
    }
    const SeeAlbum = () => {
        setYourPhoto(false);
        setAlbum(true);
    }


    return (
        <div className=' w-full p-3 bg-white shadow shadow-gray-300 rounded-md mb-3'>
            <div className=' flex items-center justify-between px-2'>
                <h3 className=' font-bold text-xl'>Photos</h3>
                <div className='flex items-center'>
                    <p className=' text-blue-500 font-semibold  mr-3 py-1 hover:bg-gray-100 rounded-md px-2 cursor-pointer'>Add Photos/Video</p>
                    <div className=' h-10 w-12 rounded bg-gray-100 flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
                        <BsThreeDots className=' text-lg' />
                    </div>
                </div>
            </div>
            <div className='px-2'>
                <div className=' flex my-2'>
                    <span onClick={SeeYourPhotos} className={`p-4 ${yourPhoto ? "border-blue-500 border-b-4 text-blue-500" : " border-0 hover:bg-gray-100 text-gray-500 rounded-md"} font-semibold mr-1 cursor-pointer`}>Your Photos</span>
                    <span onClick={SeeAlbum} className={`p-4  ${album ? "border-b-4 border-blue-500 text-blue-500" : " border-0 hover:bg-gray-100 text-gray-500 rounded-md "} font-semibold mr-1 cursor-pointer`}>Albums</span>
                </div>

                {
                    yourPhoto &&

                    <div className=' grid grid-cols-5 gap-2 my-3'>

                        {

                            About && User.uploads.length > 10 && User.uploads.slice(0, 10).map((item, index) => {

                                return (
                                    <div key={index} className=' relative w-full h-36 rounded-md overflow-hidden'>
                                        <img src={`${Host}/images/${item}`} alt="" className=' w-full h-full object-cover' />
                                        <div onClick={() => activeEditMod(item)} className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                            <BiPencil className=' text-white text-lg' />
                                        </div>
                                        {
                                            editMod && currantPhoto === item &&
                                            <div onClick={() => DeletePhoto(item)} className=' absolute top-10 flex items-center justify-center right-2 shadow rounded-md h-8 w-14 bg-white'>
                                                <p className=' text-center hover:bg-gray-300 p-1 rounded-md'>Delete</p>
                                            </div>
                                        }

                                    </div>
                                )
                            })
                        }
                        {

                            About && User.uploads.length < 10 && User.uploads.map((item, index) => {

                                return (
                                    <div key={index} className=' relative w-full h-36 rounded-md overflow-hidden'>
                                        <img src={`${Host}/images/${item}`} alt="" className=' w-full h-full object-cover' />
                                        <div onClick={() => activeEditMod(item)} className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                            <BiPencil className=' text-white text-lg' />
                                        </div>

                                        {
                                            editMod && currantPhoto === item &&
                                            <div onClick={() => DeletePhoto(item)} className=' absolute top-10 flex items-center justify-center right-2 shadow rounded-md h-8 w-14 bg-white'>
                                                <p className=' text-center hover:bg-gray-300 p-1 rounded-md'>Delete</p>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                        {
                            !About && User.uploads.length > 0 && User.uploads.map((item, index) => {

                                return (
                                    <div key={index} className=' relative w-full h-36 rounded-md overflow-hidden'>
                                        <img src={`${Host}/images/${item}`} alt="" className=' w-full h-full object-cover' />
                                        <div onClick={() => activeEditMod(item)} className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                            <BiPencil className=' text-white text-lg' />
                                        </div>
                                        {
                                            editMod && currantPhoto === item &&
                                            <div onClick={() => DeletePhoto(item)} className=' absolute top-10 flex items-center justify-center right-2 shadow rounded-md h-8 w-14 bg-white'>
                                                <p className=' text-center hover:bg-gray-300 p-1 rounded-md'>Delete</p>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>
                }

                {
                    album &&

                    <div className='grid grid-cols-5 gap-2 my-3'>
                        <div>
                            <div className='relative w-full h-36 cursor-pointer flex justify-center items-center bg-gray-200 rounded-md overflow-hidden'>
                                <AiOutlinePlus className=' text-3xl font-semibold' />
                            </div>
                            <div className='mt-2'>
                                <p className=' font-semibold hover:underline cursor-pointer'>Create Album</p>
                            </div>
                        </div>
                        <div>
                            <div className='relative w-full h-36 rounded-md overflow-hidden'>
                                <NavLink to="/profile/PhotosOfProfile">
                                    <img src={User.profilePicture ? `${Host}/images/${User.profilePicture}` : profilePhoto} alt="" className=' w-full h-full object-cover' />
                                </NavLink>
                                <div className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                    <BsThreeDots className=' text-white text-lg' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <p className=' font-semibold hover:underline cursor-pointer'><NavLink to="/profile/PhotosOfProfile">Profile Picture</NavLink></p>
                                <p className=' text-sm text-gray-500 hover:underline cursor-pointer'>{User.allProfilePicture.length} Items</p>
                            </div>
                        </div>
                        <div>
                            <div className='relative w-full h-36 rounded-md overflow-hidden'>
                                <NavLink to="/profile/PhotosOfCover">
                                    <img src={User.coverPicture ? `${Host}/images/${User.coverPicture}` : coverPhoto} alt="" className=' w-full h-full object-cover' />
                                </NavLink>
                                <div className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                    <BsThreeDots className=' text-white text-lg' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <p className=' font-semibold hover:underline cursor-pointer'><NavLink to="/profile/PhotosOfCover">Cover Photos</NavLink></p>
                                <p className=' text-sm text-gray-500 hover:underline cursor-pointer'>{User.AllCoverPhotos.length} Items</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    About &&
                    <div className=' w-full my-3'>
                        <NavLink to="/profile/photos">
                            <button className=' w-full py-2 hover:bg-gray-300 bg-gray-200 rounded-lg font-semibold'>See All</button>
                        </NavLink>
                    </div>
                }

            </div>
        </div >
    )
}

export default ProfilePhotoComponent
