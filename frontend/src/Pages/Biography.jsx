import React from 'react';
import { useState } from 'react';
import { FacebookIcon } from '../Data';
import { Host } from '../Data';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSuccess } from '../Redux/UserSlice';
import { NavLink, useNavigate } from 'react-router-dom';

function Biography() {

    const [bio, setBio] = useState("");
    const [work, setWork] = useState("");
    const [priparySchool, setPriparySchool] = useState("");
    const [highSchool, setHighSchool] = useState("");
    const [college, setCollege] = useState("");
    const [university, setUniversity] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [relationshipStatus, setRelationshipStatus] = useState("");
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const AddBio = async () => {

        const biography = {
            biography: bio,
            work: work,
            priparySchool: priparySchool,
            highSchool: highSchool,
            college: college,
            university: university,
            city: city,
            cuntry: country,
            relationshipStatus: relationshipStatus
        }

        try {

            const res = await axios.post(`${Host}/api/user/updateBiography`, biography, {
                headers: {
                    "Authorization": `Bearer ${User.token}`
                }
            });

            dispatch(loadingSuccess(res.data));
            navigation("/friends/suggetion");

        } catch (error) {

            console.log(error);
        }
    }

    const skipOparation = () => {

        navigation("/friends/suggetion");
    }

    return (
        <div className=' w-full min-h-screen py-10 flex justify-center items-center bg-gray-200'>
            <div className='bg-white shadow shadow-gray-300 w-[600px] relative rounded-md'>
                <div className=' flex justify-center items-center'>
                    <NavLink to="/">
                        <img src={FacebookIcon} alt="" className=' w-[200px]' />
                    </NavLink>
                </div>
                <div className=' flex justify-center items-center flex-col'>
                    <div className='w-full px-5 flex flex-col'>
                        <p className=' font-semibold text-center text-lg'>Add Bio</p>
                        <textarea onChange={(e) => { setBio(e.target.value) }} className=' bg-gray-200 w-full h-40 mt-3 focus:outline-0 p-3 rounded-lg' name="" id="" cols="30" rows="10"></textarea>
                        <div className=' mt-2'>
                            <label htmlFor="Work" className=' font-semibold'>Work</label>
                            <input onChange={(e) => { setWork(e.target.value) }} type="text" id='Work' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className=' mt-2'>
                            <label htmlFor="Pschool" className=' font-semibold'>Primary School</label>
                            <input onChange={(e) => { setPriparySchool(e.target.value) }} type="text" id='Pschool' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className=' mt-2'>
                            <label htmlFor="Hschool" className=' font-semibold'>High School</label>
                            <input onChange={(e) => { setHighSchool(e.target.value) }} type="text" id='Hschool' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className=' mt-2'>
                            <label htmlFor="Collage" className=' font-semibold'>Collage</label>
                            <input onChange={(e) => { setCollege(e.target.value) }} type="text" id='Collage' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className=' mt-2'>
                            <label htmlFor="Universit" className=' font-semibold'>University</label>
                            <input onChange={(e) => { setUniversity(e.target.value) }} type="text" id='Universit' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className=' mt-2'>
                            <label htmlFor="City" className=' font-semibold'>City</label>
                            <input onChange={(e) => { setCity(e.target.value) }} type="text" id='City' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className=' mt-2'>
                            <label htmlFor="Cuntry" className=' font-semibold'>Cuntry</label>
                            <input onChange={(e) => { setCountry(e.target.value) }} type="text" id='Cuntry' className=' bg-gray-200 w-full py-2 px-3 focus:outline-0 rounded-md' />
                        </div>
                        <div className='mt-2'>
                            <select name="" id="" value={relationshipStatus} className="py-[6px] px-2 border border-blue-400 focus:outline-0" onChange={(e) => setRelationshipStatus(e.target.value)}>
                                <option>Set Relationship Status</option>
                                <option value="Single">Single</option>
                                <option value="In a relationship">In a relationship</option>
                                <option value="Engaged">Engaged</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full px-3 my-3'>
                    <button onClick={AddBio} className=' bg-blue-400 px-3 py-[6px] rounded-md w-[80%] text-white hover:bg-blue-500'>Save</button>
                    <button onClick={skipOparation} className=' bg-red-400 rounded-md text-white px-3 py-[6px] w-[18%]'>Skip</button>
                </div>
            </div>
        </div>
    )
}

export default Biography