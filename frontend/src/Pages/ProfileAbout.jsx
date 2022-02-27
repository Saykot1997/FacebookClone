import Topbar from '../Components/Topbar';
import ProfileTop from '../Components/ProfileTop';
import ProfileAboutComponent from '../Components/PrifileAboutComponent';
import ProfileFriend from '../Components/ProfileFriend';
import ProfilePhotoComponent from '../Components/ProfilePhotoComponent';
import ProfileVideoComponent from '../Components/ProfileVideoComponent';
import ProfileCheckIncomponent from '../Components/ProfileCheckIncCompontnt';


function ProfileAbout() {


    return (
        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop About />
            <div className=' p-4 flex justify-center'>
                <div className='w-[60%]'>
                    <ProfileAboutComponent Profile />
                    <ProfileFriend About Profile />
                    <ProfilePhotoComponent About profile />
                    <ProfileVideoComponent Profile />
                    <ProfileCheckIncomponent Profile />
                </div>
            </div>
        </div>


    )
}

export default ProfileAbout
