import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import coverPhoto from '../images/FBCoverPhoto.png';
import profilePhoto from '../images/userAvater.png';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Host } from "../Data"

function ProfilePhotoComponent({ About }) {

    const [uploadPhotos, setUploadPhotos] = useState([]);
    const [coverPhotos, setCoverPhotos] = useState([]);
    const [profilePhotos, setProfilePhotos] = useState([])
    const User = useSelector((state) => state.User.User);
    const [yourPhoto, setYourPhoto] = useState(true);
    const [album, setAlbum] = useState(false);

    useEffect(() => {

        try {

            const getPhotos = async () => {

                const res = await axios.get(`${Host}/api/user/allPhotos`, {
                    headers: {
                        "Authorization": `Bearer ${User.token}`
                    }
                });
                setUploadPhotos(res.data.uploads);
                setCoverPhotos(res.data.coverPhotos);
                setProfilePhotos(res.data.profilePictures)
            }

            getPhotos();

        } catch (error) {

            console.log(error)
        }

    }, [User])

    const SeeYourPhotos = () => {
        setYourPhoto(true);
        setAlbum(false);
    }
    const SeeAlbum = () => {
        setYourPhoto(false);
        setAlbum(true);
    }

    // console.log({ coverPhotos: coverPhotos })
    // console.log({ profilePhotos: profilePhotos })
    // console.log({ uploads: uploadPhotos })


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

                            About && uploadPhotos.length > 10 && uploadPhotos.slice(0, 10).map((item, index) => {

                                return (
                                    <div className=' relative w-full h-36 rounded-md overflow-hidden'>
                                        <img src={`${Host}/images/${item}`} alt="" className=' w-full h-full object-cover' />
                                        <div className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                            <BiPencil className=' text-white text-lg' />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            !About && uploadPhotos.length > 0 && uploadPhotos.map((item, index) => {

                                return (
                                    <div className=' relative w-full h-36 rounded-md overflow-hidden'>
                                        <img src={`${Host}/images/${item}`} alt="" className=' w-full h-full object-cover' />
                                        <div className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                            <BiPencil className=' text-white text-lg' />
                                        </div>
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
                                <img src={User.profilePicture ? `${Host}/images/${User.profilePicture}` : profilePhoto} alt="" className=' w-full h-full object-cover' />
                                <div className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                    <BsThreeDots className=' text-white text-lg' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <p className=' font-semibold hover:underline cursor-pointer'>Profile Picture</p>
                                <p className=' text-sm text-gray-500 hover:underline cursor-pointer'>8 Items</p>
                            </div>
                        </div>
                        <div>
                            <div className='relative w-full h-36 rounded-md overflow-hidden'>
                                <img src={User.coverPicture ? `${Host}/images/${User.coverPicture}` : coverPhoto} alt="" className=' w-full h-full object-cover' />
                                <div className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                    <BsThreeDots className=' text-white text-lg' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <p className=' font-semibold hover:underline cursor-pointer'>Cover Photos</p>
                                <p className=' text-sm text-gray-500 hover:underline cursor-pointer'>12 Items</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    About &&
                    <div className=' w-full my-3'>
                        <button className=' w-full py-2 hover:bg-gray-300 bg-gray-200 rounded-lg font-semibold'>See All</button>
                    </div>
                }

            </div>
        </div >
    )
}

export default ProfilePhotoComponent
