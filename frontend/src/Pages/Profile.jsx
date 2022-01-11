import Topbar from '../Components/Topbar';
import ProfileTop from '../Components/ProfileTop';
import Share from '../Components/Share';
import Post from '../Components/Post';
import Intro from '../Components/Intro';
import Photos from '../Components/Photos';
import Friends from '../Components/Friends';
import LiveEvents from '../Components/LiveEvents';

function Profile() {

    return (

        <div className=' bg-gray-100 w-full h-screen overflow-y-scroll'>
            <Topbar Profile />
            <ProfileTop Profile />
            <div className='group p-4 flex justify-center'>
                <div className='w-[60%] flex'>
                    <div className='h-screen sticky left-0 top-[70px] overflow-scroll ProfileScrollbar w-2/5 mr-2'>
                        <Intro />
                        <Photos />
                        <Friends />
                        <LiveEvents />
                    </div>
                    <div className=' w-3/5 ml-2'>
                        <Share />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile
