import Topbar from "../Components/Topbar"
import FriendLeft from "../Components/FriendLeft"
import SingleFindFriend from "../Components/SingleFindFriend"
import { useState } from "react"


function Friend() {

    const [request, setRequest] = useState(true)


    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <div className=' h-full w-[23.5%] bg-white shadow-md shadow-gray-400 p-2'>
                    <FriendLeft Home />
                </div>
                <div className='w-[73.5%] h-full overflow-y-scroll'>
                    <div className=' h-full w-full pr-10 pt-7'>
                        {
                            request ?
                                (
                                    <div className=" w-full pb-4 mb-4 border-b border-gray-300">
                                        <div className=" w-full flex justify-between mb-4">
                                            <span className=' font-bold text-xl'>Friend Request</span>
                                            <span className=' text-blue-500 text-lg'>See All</span>
                                        </div>
                                        <div className='w-full grid grid-cols-5 gap-3'>
                                            <SingleFindFriend Request />
                                        </div>
                                    </div>
                                )
                                :
                                null
                        }
                        <div className=' w-full flex justify-between mb-4'>
                            <span className=' font-bold text-xl'>People You May Know</span>
                            <span className=' text-blue-500 text-lg'>See All</span>
                        </div>
                        <div className='w-full grid grid-cols-5 gap-3'>
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                            <SingleFindFriend />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friend
