import React from 'react'
import Feed from '../Components/Feed'
import Right from '../Components/Right'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'

function Home() {

    return (
        <div className={' h-screen overflow-y-scroll w-screen bg-gray-100'}>
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
