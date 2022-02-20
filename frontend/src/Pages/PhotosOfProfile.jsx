import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineSetting } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import ProfileTop from '../Components/ProfileTop'
import Topbar from '../Components/Topbar'
import { FaRegComment } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Host } from '../Data'
import { BiPencil } from 'react-icons/bi'
import { loadingSuccess } from '../Redux/UserSlice'
import axios from 'axios'

function PhotosOfProfile() {

    const User = useSelector((state) => state.User.User);
    const [editMod, setEditMod] = useState(false);
    const [currantPhoto, setCurrantPhoto] = useState("");
    const dispatch = useDispatch()

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

    return (
        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop Photos />
            <div className=' p-4 flex justify-center'>
                <div className='w-[60%]'>
                    {/* top component start */}
                    <div className=' w-full bg-white py-3 px-5 shadow shadow-gray-300 rounded-md'>
                        <div className=' w-full flex items-center justify-between'>
                            <p className=' text-2xl font-bold'>Profile pictures</p>
                            <div className=' cursor-pointer hover:bg-gray-300 h-8 w-10 bg-gray-200 flex justify-center items-center rounded-md'>
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className=' flex mt-3 items-center'>
                            <span className=' text-gray-700 text-sm'>{User.allProfilePicture.length} items .</span>
                            <AiOutlineSetting className=' text-gray-500 ml-1' />
                        </div>
                        <div className=' grid grid-cols-3 px-5 mt-2'>
                            <div className=' w-full hover:bg-gray-200 py-3 text-gray-700 rounded-md cursor-pointer flex justify-center items-center'>
                                <AiOutlineLike className=' text-xl' />
                                <span className=' ml-2 font-semibold'>Like</span>
                            </div>
                            <div className=' w-full hover:bg-gray-200 py-3 text-gray-700 rounded-md cursor-pointer flex justify-center items-center'>
                                <FaRegComment className=' text-xl' />
                                <span className=' ml-2 font-semibold'>Comments</span>
                            </div>
                            <div className=' w-full hover:bg-gray-200 py-3 text-gray-700 rounded-md cursor-pointer flex justify-center items-center'>
                                <RiShareForwardLine className=' text-xl' />
                                <span className=' ml-2 font-semibold'>Share</span>
                            </div>
                        </div>
                    </div>
                    {/* top component ends*/}
                    {/* photos start */}

                    <div className=' w-full p-3 grid grid-cols-4 gap-2 bg-white shadow shadow-gray-300 mt-3 rounded-md'>

                        {
                            User.allProfilePicture.map((photo, index) => {
                                return (
                                    <div className=' h-40 cursor-pointer relative' key={index}>
                                        <img src={`${Host}/images/${photo}`} alt="" className=' h-full w-full object-cover' />
                                        <div onClick={() => activeEditMod(photo)} className=' absolute top-2 right-2 h-7 w-7 hover:bg-opacity-50 cursor-pointer rounded-full bg-black bg-opacity-40 flex justify-center items-center'>
                                            <BiPencil className=' text-white text-lg' />
                                        </div>
                                        {
                                            editMod && currantPhoto === photo &&
                                            <div onClick={() => DeletePhoto(photo)} className=' absolute top-10 flex items-center justify-center right-2 shadow rounded-md h-8 w-14 bg-white'>
                                                <p className=' text-center hover:bg-gray-300 p-1 rounded-md'>Delete</p>
                                            </div>
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* photos ends */}
                </div>
            </div>
        </div>
    )
}

export default PhotosOfProfile