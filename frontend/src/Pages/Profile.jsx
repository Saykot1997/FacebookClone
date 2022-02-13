import Topbar from '../Components/Topbar';
import ProfileTop from '../Components/ProfileTop';
import Share from '../Components/Share';
import Post from '../Components/Post';
import Intro from '../Components/Intro';
import Photos from '../Components/Photos';
import Friends from '../Components/Friends';
import LiveEvents from '../Components/LiveEvents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Host } from "../Data"
import { useSelector } from 'react-redux';

function Profile() {

    const Posts = useSelector((state) => state.Post.Post);
    const [timelinePost, setTimelinePost] = useState(null);
    const User = useSelector(state => state.User.User);

    const reverseArray = (array) => {

        let reversedArray = [];

        for (let i = array.length - 1; i >= 0; i--) {

            reversedArray.push(array[i]);

        }

        return reversedArray;

    }

    useEffect(() => {

        axios.get(`${Host}/api/user/timelinePost`, {

            headers: {

                'Authorization': `Bearer ${User.token}`
            }

        }).then(res => {

            setTimelinePost(reverseArray(res.data));

        }).catch(err => {

            console.log(err)
        });

    }, [Posts]);

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

                        {
                            timelinePost?.map((post, index) => {
                                return (
                                    <Post post={post} key={index} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile
