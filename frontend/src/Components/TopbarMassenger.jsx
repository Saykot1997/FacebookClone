import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ProfilePhoto from "../images/2.jpg"
import { IoCreateOutline } from "react-icons/io5"

function TopbarMassenger() {


    const [optionHover, setOptionHover] = useState(false);

    const ShowOptionBox = () => {
        setOptionHover(true)
    }
    const CloseOptionBox = () => {
        setOptionHover(false)
    }

    return (

        <div className=' absolute top-11 -right-[70px] w-[360px] menubar overflow-y-scroll scrollbar bg-white rounded-md p-3 shadow-md shadow-gray-600 z-50 ' >
            <div className='flex items-center justify-between w-full'>
                <p className=' font-bold text-2xl'>Messenger</p>
                <div className='flex items-center'>
                    <div onMouseEnter={ShowOptionBox} onMouseLeave={CloseOptionBox} className=' relative h-8 w-8 mr-2 rounded-full hover:bg-gray-200 flex justify-center items-center'>
                        <BsThreeDots className=' text-gray-500 text-xl' />
                        <div className={`${optionHover ? " visible" : " hidden"} absolute -bottom-8 p-2 bg-black bg-opacity-70 rounded-md`}>
                            <p className=' text-xs text-white'>Options</p>
                        </div>
                    </div>
                    <div className=' h-8 w-8 mr-2 rounded-full hover:bg-gray-200 flex justify-center items-center'>
                        <IoCreateOutline className=' text-gray-500 text-lg' />
                    </div>
                </div>
            </div>
            <div className='w-full mt-2'>
                <input type="text" className=' w-full py-1 pr-3 pl-7 focus:outline-0 rounded-2xl bg-gray-100 placeholder:text-gray-700' placeholder='Search Messager' />
            </div>

            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
                        </div>
                    </div>
                    <div className=' basis-[15%] flex justify-center items-center'>
                        <div className=' h-3 w-3 rounded-full bg-blue-600'></div>
                    </div>
                </div>
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between items-center p-2 rounded-md hover:bg-gray-100'>
                    <div className=' basis-[85%] flex items-center'>
                        <div className=' mr-2'>
                            <img src={ProfilePhoto} alt="" className=' h-12 w-12 rounded-full object-cover' />
                        </div>
                        <div>
                            <p className=' font-semibold text-black text-base'>Jhon Doe</p>
                            <div className='flex'>
                                <p className=' font-bold text-xs text-blue-500'>Jhon How are you?</p>
                                <span className=' text-xs text-gray-500'> . 12h</span>
                            </div>
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

export default TopbarMassenger
