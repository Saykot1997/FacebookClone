import React from 'react'
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt'
import ProfilePhotoComponent from '../Components/ProfilePhotoComponent'
import ProfileTop from '../Components/ProfileTop'
import ProfileVideoComponent from '../Components/ProfileVideoComponent'
import Topbar from '../Components/Topbar'

function ProfilePhotos() {

    return (
        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop Photos />
            <div className=' p-4 flex justify-center'>
                <div className='w-[60%]'>
                    <ProfilePhotoComponent />
                    <ProfileVideoComponent />
                    <ProfileCheckIncomponent />
                </div>
            </div>
        </div>

    )
}

export default ProfilePhotos
