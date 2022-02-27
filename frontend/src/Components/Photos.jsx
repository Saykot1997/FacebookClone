import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Host } from "../Data"

function Photos({ Profile, friendData, AllFriends, FriendSugeesions }) {

    const User = useSelector((state) => state.User.User);
    console.log(friendData)
    console.log(FriendSugeesions)


    return (

        <div className=' w-full bg-white shadow rounded-lg p-3 mt-3'>
            <div className=' flex justify-between'>
                <h2 className=' font-bold text-lg items-center hover:underline cursor-pointer'>Photos</h2>
                {
                    Profile &&
                    <NavLink to={`/profile/photos`}>
                        <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Photos</span>
                    </NavLink>
                }
                {
                    AllFriends &&
                    <NavLink to={`/friends/all/photos/${friendData && friendData && friendData._id}`}>
                        <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Photos</span>
                    </NavLink>
                }
                {
                    FriendSugeesions &&
                    <NavLink to={`/friends/suggetion/photos/${FriendSugeesions && friendData && friendData._id}`}>
                        <span className=' text-blue-500 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer '>See All Photos</span>
                    </NavLink>
                }

            </div>
            <div className=' grid grid-cols-3 gap-2 rounded-lg mt-2 overflow-hidden'>
                {
                    Profile && User.uploads.length < 10 && User.uploads.length > 0 &&
                    User.uploads.map((photo, index) => {
                        return (
                            <div className='h-24 cursor-pointer' key={index}>
                                <img src={`${Host}/images/${photo}`} alt="" className=' h-full w-full object-cover' />
                            </div>
                        )
                    })
                }

                {
                    Profile && User.uploads.length > 10 &&
                    User.uploads.slice(0, 9).map((photo, index) => {
                        return (
                            <div className='h-24 cursor-pointer' key={index}>
                                <img src={`${Host}/images/${photo}`} alt="" className=' h-full w-full object-cover' />
                            </div>
                        )
                    })
                }
                {
                    !Profile && friendData && friendData.uploads.length < 10 && friendData.uploads.length > 0 &&
                    friendData.uploads.map((photo, index) => {
                        return (
                            <div className='h-24 cursor-pointer' key={index}>
                                <img src={`${Host}/images/${photo}`} alt="" className=' h-full w-full object-cover' />
                            </div>
                        )
                    })
                }

                {
                    !Profile && friendData && friendData.uploads.length > 10 &&
                    friendData.uploads.slice(0, 9).map((photo, index) => {
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
