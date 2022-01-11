import React from 'react';
import OnlineFriend from './OnlineFriend';
import { BirthdayIcon } from '../Data';


function Right() {
    return (
        <div className='rightbar basis-[25%] max-h-screen sticky left-0 top-14 overflow-y-scroll scrollbar'>
            <div className=' p-4'>
                <div className=' bg-white mt-2 py-3 px-4 rounded-lg shadow shadow-gray-300'>
                    <div className=' flex'>
                        <div className=' w-full'>
                            <div className='flex'>
                                <img src={BirthdayIcon} alt="" className=' w-5' />
                                <p className=' text-sm font-semibold ml-2 '>Birthdays</p>
                            </div>
                            <div className=' mt-3'>
                                <p><span className=' font-semibold'>Zannat Mumu Meda SH</span>'s birthday is today.</p>
                            </div>
                        </div>
                        <span className=' text-lg cursor-pointer'>x</span>
                    </div>

                </div>
                <div className=' my-3 '>
                    <hr className=' h-[2px] w-full bg-black opacity-10' />
                </div>
                <div >
                    <h4 className='font-semibold ml-[10px] text-gray-600 mb-2'>Contacts</h4>
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                    <OnlineFriend />
                </div>
            </div>
        </div>
    )
}

export default Right
