import React, { useContext, useEffect } from 'react'
import Feed from '../Components/Feed'
import Right from '../Components/Right'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import { IsPostCreateOpen } from '../Context/PostCreate'
import axios from 'axios'

function Home() {

    const { IsOpen } = useContext(IsPostCreateOpen);

    useEffect(() => {

        const getPost = async () => {
            const res = await axios.get('http://localhost:8000/api/post/61b0f6f87cd8f95390204525');
            console.log(res.data);
        }

        getPost();

    }, [])

    return (
        <div className={IsOpen ? " h-screen w-screen overflow-hidden bg-gray-100" : ' bg-gray-100'}>
            <Topbar />
            <div className='flex justify-between'>
                <Sidebar />
                <Feed />
                <Right />
            </div>
        </div>
    )
}

export default Home
