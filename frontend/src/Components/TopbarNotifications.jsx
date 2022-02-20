import { BsThreeDots } from 'react-icons/bs'
import SingleFriendRequest from './SingleFriendRequest'
import ProfilePhoto from "../images/2.jpg"
import { useSelector } from 'react-redux'

function TopbarNotifications() {

    const friendRequests = useSelector(state => state.Friends.FriendsRequests);

    return (
        <div className=' absolute top-11 -right-12 w-[360px] menubar overflow-y-scroll scrollbar bg-white rounded-md p-3 shadow-md shadow-gray-600 z-50 '>
            <div className='flex items-center justify-between w-full'>
                <p className=' font-bold text-2xl'>Notifications</p>
                <div>
                    <BsThreeDots className=' text-gray-500' />
                </div>
            </div>
            <div className=' flex my-2'>
                <button className=' bg-blue-100 mr-2 h-8 w-10 px-1 text-sm rounded-full text-blue-700 font-semibold'>All</button>
                <button className='bg-gray-200 mr-2 h-8  px-2 text-sm rounded-full text-gray-900 font-semibold'>Unread</button>
            </div>

            {
                friendRequests && friendRequests.length > 0 &&

                <div className=' w-full'>
                    <div className=' flex justify-between mt-2 mb-1'>
                        <p className=' font-semibold'>Friend Requests</p>
                        <p className=' text-sm cursor-pointer text-blue-600'>See All</p>
                    </div>
                    <div className='flex justify-between items-center hover:bg-gray-100 rounded-md'>
                        <div className=' basis-[85%]'>
                            {
                                friendRequests.map((f, index) => {
                                    return (

                                        <SingleFriendRequest key={index} Topbar friend={f} />
                                    )
                                })
                            }
                        </div>
                        <div className=' basis-[15%] flex justify-center items-center'>
                            <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                        </div>
                    </div>
                </div>
            }

            <div className=' mt-2'>
                <div className=' flex justify-between'>
                    <p className=' font-semibold'>Earlier</p>
                    <p className=' text-sm cursor-pointer text-blue-600'>See All</p>
                </div>

                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-gray-500 text-sm'><span className=' font-semibold text-black text-base'>Jhon Doe</span> add a new photo</p>
                            <p className=' font-semibold text-xs text-blue-500'>24 hourse ago</p>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopbarNotifications
