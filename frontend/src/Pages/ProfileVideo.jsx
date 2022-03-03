import React from 'react'
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt'
import ProfileTop from '../Components/ProfileTop'
import ProfileVideoComponent from '../Components/ProfileVideoComponent'
import Topbar from '../Components/Topbar'

function ProfileVideo() {
    return (
        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop Profile Videos />
            <div className=' p-4 flex justify-center'>
                <div className='w-[60%]'>
                    <ProfileVideoComponent Profile />
                    <ProfileCheckIncomponent Profile />
                </div>
            </div>
        </div>
    )
}

export default ProfileVideo
