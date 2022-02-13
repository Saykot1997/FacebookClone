import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Host } from "../Data"

function Photos() {

    const [uploadPhotos, setUploadPhotos] = useState([]);
    const User = useSelector((state) => state.User.User);

    useEffect(() => {

        try {

            const getPhotos = async () => {

                const res = await axios.get(`${Host}/api/user/allPhotos`, {
                    headers: {
                        "Authorization": `Bearer ${User.token}`
                    }
                });
                setUploadPhotos(res.data);
            }

            getPhotos();

        } catch (error) {

            console.log(error)
        }

    }, [])

    console.log(uploadPhotos)

    return (
        <div className=' w-full bg-white shadow rounded-lg p-3 mt-3'>

            <div className=' flex justify-between'>
                <h2 className=' font-bold text-lg items-center hover:underline cursor-pointer'>Photos</h2>
                <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Photos</span>

            </div>

            <div className=' grid grid-cols-3 gap-2 rounded-lg mt-2 overflow-hidden'>

                {
                    uploadPhotos.length < 10 && uploadPhotos.length > 0 &&

                    uploadPhotos.map((photo, index) => {
                        return (
                            <div className='h-24 cursor-pointer' key={index}>
                                <img src={`${Host}/images/${photo}`} alt="" className=' h-full w-full object-cover' />
                            </div>
                        )
                    })
                }

                {uploadPhotos.length > 10 &&
                    uploadPhotos.slice(0, 9).map((photo, index) => {
                        return (
                            <div className='h-24 cursor-pointer' key={index}>
                                <img src={`${Host}/images/${photo}`} alt="" className=' h-full w-full object-cover' />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Photos
