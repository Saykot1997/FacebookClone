import React from 'react'
import GroupLeft from '../Components/GroupLeft'
import Topbar from '../Components/Topbar'
import SingleGroup from '../Components/SingleGroup'

function GroupDiscover() {
    return (
        <div>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <GroupLeft discover />
                <div className='w-[76.5%] bg-gray-100 flex justify-center h-full overflow-y-scroll'>
                    <div className=' w-[90%]'>
                        <div className=' flex justify-between my-3'>
                            <div>
                                <p className=' font-bold text-xl'>Suggested for you</p>
                                <p className=' text-gray-500 text-[17px]'>Groups you might be interested in.</p>
                            </div>
                            <p className=' text-blue-500'>See all</p>
                        </div>
                        <div className=' w-full grid grid-cols-3 gap-3'>
                            <SingleGroup />
                            <SingleGroup />
                            <SingleGroup />
                        </div>
                        <div className=' my-10'>
                            <hr className=' h-[2px] w-full bg-gray-300' />
                        </div>

                        <div className=' flex justify-between my-3'>
                            <div>
                                <p className=' font-bold text-xl'>Friend's Group</p>
                                <p className=' text-gray-500 text-[17px]'>Groups your friends are in.</p>
                            </div>
                            <p className=' text-blue-500'>See all</p>
                        </div>
                        <div className=' w-full grid grid-cols-3 gap-3'>
                            <SingleGroup />
                            <SingleGroup />
                            <SingleGroup />
                        </div>
                        <div className=' my-10'>
                            <hr className=' h-[2px] w-full bg-gray-300' />
                        </div>

                        <div className=' flex justify-between my-3'>
                            <div>
                                <p className=' font-bold text-xl'>Popular near you</p>
                                <p className=' text-gray-500 text-[17px]'>Groups people in your area are in.</p>
                            </div>
                            <p className=' text-blue-500'>See all</p>
                        </div>
                        <div className=' w-full grid grid-cols-3 gap-3'>
                            <SingleGroup />
                            <SingleGroup />
                            <SingleGroup />
                        </div>
                        <div className=' my-10'>
                            <hr className=' h-[2px] w-full bg-gray-300' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupDiscover
