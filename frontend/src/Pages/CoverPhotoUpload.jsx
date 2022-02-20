import React from 'react';
import { useState } from 'react';
import { FacebookIcon } from '../Data';
import profilePhoto from "../images/userAvater.png";
import { Host } from '../Data';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSuccess } from '../Redux/UserSlice';
import { NavLink, useNavigate } from 'react-router-dom';

function CoverPhotoUpload() {

    const [image, setImage] = useState(null);
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const updateCoverPhoto = async () => {

        try {

            const formData = new FormData();
            formData.append('coverPhoto', image);
            const res = await axios.post(`${Host}/api/user/updateCoverPhoto`, formData, {
                headers: {
                    "Authorization": `Bearer ${User.token}`
                }
            });

            navigation("/biography");
            dispatch(loadingSuccess(res.data));

        } catch (error) {

            console.log(error);
        }
    }

    const skipOparation = () => {

        navigation("/biography");
    }

    return (
        <div className=' w-full h-screen flex justify-center items-center bg-gray-200'>
            <div className='bg-white shadow shadow-gray-300 w-[600px] h-[510px] relative'>
                <div className=' flex justify-center items-center'>
                    <NavLink to="/">
                        <img src={FacebookIcon} alt="" className=' w-[200px]' />
                    </NavLink>
                </div>
                <p className=' text-center font-semibold mb-2'>Upload Cover Photo</p>
                <div className=' flex justify-center items-center flex-col'>
                    <div className=' w-[90%] h-64  border border-blue-400'>
                        <img src={image ? URL.createObjectURL(image) : profilePhoto} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className=' w-32 mt-5 rounded-md'>
                        <label htmlFor="file" className=' py-2 px-3 bg-blue-400 rounded-lg mx-auto text-white cursor-pointer'>Select Photo</label>
                        <input id='file' type="file" className=' hidden' onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    {
                        image &&

                        <div>
                            <button onClick={updateCoverPhoto} className='w-32 mt-5 rounded-md cursor-pointer bg-blue-400 text-white py-[6px]'>Update</button>
                            <button onClick={() => setImage(null)} className=' w-32 mt-5 ml-2 rounded-md cursor-pointer bg-red-400 text-white py-[6px]'>Cancel</button>
                        </div>
                    }

                </div>
                <button onClick={skipOparation} className=' absolute bottom-3 right-3 bg-blue-400 rounded-md text-white px-3 py-[6px]'>Skip</button>
            </div>
        </div>
    )
}

export default CoverPhotoUpload