import ProfilePhoto from "../images/1.jpg";
import candy from "../images/candyCrush.png";
import sidebarLinks from "../Data";
import { BiChevronDown } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom"


export default function Sidebar() {

    const [cliked, setClicked] = useState(false);

    const ShowItems = () => {
        setClicked(!cliked);
    }

    return (
        <div className="h-screen basis-[25%] sticky left-0 top-14 overflow-y-scroll scrollbar" >
            <div className='p-2 h-full' >
                <ul className={cliked ? "overflow-visible" : "sidebar overflow-hidden"}>
                    <NavLink to="/profile" className="flex items-center px-2 font-semibold hover:bg-gray-200 hover:rounded-md h-12 my-2">
                        <img src={ProfilePhoto} alt="" className=" h-9 w-9 rounded-full mr-3 object-cover" />
                        <span>Saykot Hossain</span>
                    </NavLink>

                    {
                        sidebarLinks.map((link, index) => {
                            return (
                                <NavLink to={link.pageLink} className='listItem' key={index}>
                                    <img src={link.iconlink} alt="" className='icons' />
                                    <span>{link.name}</span>
                                </NavLink>
                            )
                        })
                    }
                </ul>
                <ul>
                    <li onClick={ShowItems} className="listItem">
                        <div className=" h-9 w-9 bg-gray-300 rounded-full flex justify-center items-center mr-2">
                            {
                                cliked ? <IoIosArrowUp className=" text-lg" /> : <BiChevronDown className=" text-2xl" />
                            }
                        </div>
                        <span>See More</span>
                    </li>
                </ul>

                <hr className=' bg-gray-300 my-5 h-[2px]' />

                {/* friends list */}
                <h3 className=" font-semibold text-gray-500 mb-2 p-1">Your Shortcuts</h3>
                <ul>
                    <li className='flex items-center cursor-pointer mt-3 p-2  hover:bg-gray-200 hover:rounded-md' >
                        <img src={candy} alt="" className=' w-9 h-9 rounded-md object-cover' />
                        <p className=' ml-4 font-semibold'>Jone Do</p>
                    </li>
                </ul>
                <div className=" w-full mt-2">
                    <p className=" text-xs text-gray-500 p-1">Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · More  · Meta © 2021</p>
                </div>
            </div>
        </div>
    )
}
