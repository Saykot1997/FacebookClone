import { AiOutlineLike } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import profilePhoto from "../images/2.jpg"
import video from "../videos/1.mp4"

function SingleVideo() {

    return (

        <div className={`singleVideo bg-white w-full my-4 rounded-md p-3 shadow shadow-gray-300`}>
            <div className='flex justify-between items-center'>
                <div className=' flex'>
                    <img src={profilePhoto} alt="" className=' h-12 w-12 mr-3 rounded-full object-cover' />
                    <div>
                        <p className=' font-semibold mb-1 cursor-pointer hover:underline'>Saykot Hossain</p>
                        <p className=' text-[12px] text-gray-600 flex cursor-pointer hover:underline'>September 4 . <span className=' ml-1 mt-1'><BiWorld /></span></p>
                    </div>
                </div>
                <div>
                    <BsThreeDots className=' text-gray-900 text-xl cursor-pointer' />
                </div>
            </div>
            <div className=' w-full mt-1'>
                <p className=' font-semibold'>This is video title</p>
                <p>This is video descriptions</p>
                <div className=' w-full my-2 bg-black'>
                    <video src={video} loop muted controls className=' w-full h-64' ></video>
                </div>
                <div className=' w-full flex justify-between items-center'>
                    <div className='flex'>
                        <div className='flex items-center text-gray-500 px-3 cursor-pointer py-1 hover:bg-gray-100 rounded-md'>
                            <AiOutlineLike className=' text-lg mr-1' />
                            <span className=' text-sm font-semibold'>Like</span>
                        </div>
                        <div className='flex items-center text-gray-500 px-3 cursor-pointer py-1 hover:bg-gray-100 rounded-md'>
                            <FaRegComment className=' text-lg mr-1' />
                            <span className=' text-sm font-semibold'>comment</span>
                        </div>
                        <div className='flex items-center text-gray-500 px-3 cursor-pointer py-1 hover:bg-gray-100 rounded-md'>
                            <RiShareForwardLine className=' text-lg mr-1' />
                            <span className=' text-sm font-semibold'>Share</span>
                        </div>
                    </div>
                    <div className='flex text-xs text-gray-600'>
                        <p className=' mr-2 hover:underline cursor-pointer'>2.4M</p>
                        <p className=' mr-2 hover:underline cursor-pointer'>9.2k Comments</p>
                        <p className='hover:underline cursor-pointer'>690K View</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleVideo
