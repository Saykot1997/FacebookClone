import React from 'react'
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt'
import ProfileFriend from '../Components/ProfileFriend'
import ProfilePhotoComponent from '../Components/ProfilePhotoComponent'
import ProfileTop from '../Components/ProfileTop'
import ProfileVideoComponent from '../Components/ProfileVideoComponent'
import Topbar from '../Components/Topbar'


function ProfileFriends() {
    return (
        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop Friends />
            <div className=' p-4 flex justify-center'>
                <div className='w-[60%]'>
                    <ProfileFriend Profile />
                    <ProfilePhotoComponent About Profile />
                    <ProfileVideoComponent Profile />
                    <ProfileCheckIncomponent Profile />
                </div>
            </div>
        </div>

    )
}

export default ProfileFriends
