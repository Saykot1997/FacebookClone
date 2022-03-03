import React from 'react'
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt'
import ProfileTop from '../Components/ProfileTop'
import Topbar from '../Components/Topbar'

function ProfileCheckInc() {
    return (
        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop Profile ChecksInc />
            <div className=' p-4 flex justify-center'>
                <div className='w-[60%]'>
                    <ProfileCheckIncomponent Profile />
                </div>
            </div>
        </div>
    )
}

export default ProfileCheckInc
