import React from 'react';
import { MdWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineWifi } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { Host } from '../Data';
import { loadingSuccess } from '../Redux/UserSlice';

function Intro() {

    const user = useSelector(state => state.User.User);
    const [editBioMode, setEditBioMode] = useState(false);
    const [bio, setBiography] = useState(user.biography);
    const [work, setWork] = useState(user.work);
    const [priparySchool, setPriparySchool] = useState(user.priparySchool);
    const [highSchool, setHighSchool] = useState(user.highSchool);
    const [college, setCollege] = useState(user.college);
    const [university, setUniversity] = useState(user.university);
    const [city, setCity] = useState(user.city);
    const [cuntry, setCuntry] = useState(user.cuntry);
    const [relationshipStatus, setRelationshipStatus] = useState(user.relationshipStatus);
    const [editDtailsMode, setEditDtailsMode] = useState(false);
    const dispatch = useDispatch();

    const updateBiography = async () => {

        if (!bio && !work && !priparySchool && !highSchool && !college && !university && !city && !cuntry && !relationshipStatus) {

            alert('Please fill all the fields');

        } else {

            const biography = {
                biography: bio,
                work,
                priparySchool,
                highSchool,
                college,
                university,
                city,
                cuntry,
                relationshipStatus
            }

            try {

                const res = await axios.post(`${Host}/api/user/updateBiography`, biography, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });

                dispatch(loadingSuccess(res.data));
                setEditBioMode(false);
                setEditDtailsMode(false);

            } catch (error) {

                console.log(error);
            }
        }


    };

    const cencleEditdetail = () => {

        setEditDtailsMode(false);
        setWork(user.work);
        setPriparySchool(user.priparySchool);
        setHighSchool(user.highSchool);
        setCollege(user.college);
        setUniversity(user.university);
        setCity(user.city);
        setCuntry(user.cuntry);
        setRelationshipStatus(user.relationshipStatus);
    }


    return (
        <div className=' w-full bg-white shadow rounded-lg p-3 pb-1'>
            <h3 className=' font-bold text-lg'>Intro</h3>
            {
                editBioMode ?
                    <div>
                        <textarea className='w-full h-24 mt-2 bg-gray-200 rounded-md text-center p-3 ' placeholder='Write something about yourself' value={bio} onChange={(e) => setBiography(e.target.value)} />
                        <div className='w-full mt-2 flex justify-end'>
                            <button onClick={updateBiography} className=' bg-blue-500 mr-2 rounded-md text-white px-3 py-[4px] hover:bg-blue-400'>Save</button>
                            <button onClick={() => { setEditBioMode(false); setBiography(user.biography) }} className=' bg-gray-300 rounded-md px-3 py-[4px] hover:bg-gray-400'>cencel</button>
                        </div>
                    </div>
                    :
                    <div>
                        {

                            user.biography ?
                                <p className=' mt-2 text-center text-gray-700'>{user.biography}</p>
                                :
                                <p className=' mt-2 text-center text-gray-700'>What's your biography?</p>
                        }
                    </div>
            }
            <button onClick={() => { setEditBioMode(true); setEditDtailsMode(false) }} className=' bg-gray-200 mt-3 rounded-md font-semibold text-sm hover:bg-gray-300 w-full py-2'>Edit Bio</button>

            {
                editDtailsMode ?
                    <div className=' w-full'>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <MdWork className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={work} placeholder="where do you work?" onChange={(e) => { setWork(e.target.value) }} className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={college} placeholder="what's your collage?" onChange={(e) => { setCollege(e.target.value) }} className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={university} placeholder="what's your University?" onChange={(e) => { setUniversity(e.target.value) }} className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={highSchool} placeholder="what's your high school?" onChange={(e) => { setHighSchool(e.target.value) }} className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={priparySchool} placeholder="What's your primary school?" onChange={(e) => { setPriparySchool(e.target.value) }} className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <ImHome3 className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} placeholder="what's your city" className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <MdLocationPin className=' text-2xl text-gray-400 mr-2 ' />
                            <input type="text" value={cuntry} onChange={(e) => { setCuntry(e.target.value) }} placeholder="what's your cuntry" className="bg-gray-200 p-1 rounded-md w-full" />
                        </div>
                        <div className='w-full mt-2 flex justify-between'>
                            <button onClick={updateBiography} className=' bg-blue-500 rounded-md text-white px-3 py-[4px] hover:bg-blue-400'>Save</button>
                            <button onClick={cencleEditdetail} className=' bg-red-500 rounded-md text-white px-3 py-[4px] hover:bg-red-400'>cencel</button>
                        </div>
                    </div>
                    :
                    <div className=' w-full'>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <MdWork className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.work ?

                                    <p className=' text-sm'>Works at <span className=' hover:underline capitalize font-semibold'>{user.work}</span></p>
                                    :
                                    <p className=' text-sm'>Where do you work?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.college ?
                                    <p className=' text-sm'>Studied at <span className=' capitalize'>{user.college}</span></p>
                                    :
                                    <p className=' text-sm'>What's your collage?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.university ?
                                    <p className=' text-sm'>Studies at <span className=' capitalize'>{user.university}</span></p>
                                    :
                                    <p className=' text-sm'>What's your University?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.highSchool ?
                                    <p className=' text-sm'>Went to <span className=' hover:underline font-semibold'>{user.highSchool}</span></p>
                                    :
                                    <p className=' text-sm'>What's your high school?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <FaGraduationCap className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.priparySchool ?
                                    <p className=' text-sm'>Went to <span className=' hover:underline font-semibold'>{user.priparySchool}</span></p>
                                    :
                                    <p className=' text-sm'>What's your primary school?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <ImHome3 className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.city ?
                                    <p className=' text-sm'>Live in <span className=' hover:underline font-semibold capitalize'>{user.city}</span></p>
                                    :
                                    <p className=' text-sm'>what's your city?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <MdLocationPin className=' text-2xl text-gray-400 mr-2 ' />
                            {
                                user.cuntry ?

                                    <p className=' text-sm'>From <span className=' hover:underline font-semibold capitalize'>{user.cuntry}</span></p>
                                    :
                                    <p className=' text-sm'>what's your cuntry?</p>
                            }
                        </div>
                        <div className='flex my-4 px-1 text-gray-700'>
                            <AiOutlineWifi className=' rotate-[52deg] text-2xl text-gray-400 mr-2 ' />
                            <p className=' text-sm'>Followed by <span className=' hover:underline font-semibold'>{user.flowers.length} peoples</span></p>
                        </div>
                    </div>
            }

            <div onClick={() => { setEditDtailsMode(true); setEditBioMode(false) }} className=' group relative w-full rounded-lg bg-gray-200 py-1 flex justify-center overflow-hidden cursor-pointer my-3'>
                <button className=' font-semibold text-sm py-1'>Edite Details</button>
                <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
            </div>
            <div className=' group relative w-full rounded-lg bg-gray-200 py-1 flex justify-center overflow-hidden cursor-pointer my-3'>
                <button className=' font-semibold text-sm py-1'>Add Hobbies</button>
                <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
            </div>
            <div className=' group relative w-full rounded-lg bg-gray-200 py-1 flex justify-center overflow-hidden cursor-pointer my-3'>
                <button className=' font-semibold text-sm py-1'>Add Featured</button>
                <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
            </div>
        </div>
    )
}

export default Intro
