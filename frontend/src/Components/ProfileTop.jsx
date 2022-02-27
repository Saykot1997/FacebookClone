import coverPhoto from '../images/FBCoverPhoto.png';
import ProfilePhoto from "../images/userAvater.png"
import { BsArrowLeftShort, BsFillCameraFill, BsMessenger, BsPencilFill } from "react-icons/bs";
import { useState } from 'react';
import FriendsInfo from './FriendsInfo';
import { NavLink, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlusCircle, AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';
import axios from 'axios';
import { Host } from "../Data";
import { loadingSuccess } from '../Redux/UserSlice';
import { useEffect } from 'react';

function ProfileTop({ FriendSugeesions, AllFriends, friendData, Profile, profile, About, Friends, Photos, Videos, ChecksInc }) {

    const dispatch = useDispatch();
    const User = useSelector((state) => state.User.User);
    const [isHover, setHover] = useState(false);
    const [isShowingUpdateOptions, setShowingUpdateOptions] = useState(false);
    const [isShowingProfileUpdateOptions, setShowingProfileUpdateOptions] = useState(false);
    const [coverPhotoFile, setCoverPhotoFile] = useState(null);
    const [PhotoBoxOpen, setPhotoBoxOpen] = useState(false);
    const [showPhotoType, setShowPhotoType] = useState("Recent");
    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [profilePhotoFile, setProfilePhotoFile] = useState(null);
    const [showPhotoSelectPhotoType, setShowPhotoSelectPhotoType] = useState("");
    const allFriends = useSelector((state) => state.Friends.AllFriends)
    const [hoveredFriend, setHoveredFriend] = useState("");
    const [mutalFriendsLength, setMutalFriendsLength] = useState();
    const [friendDataAllFriends, setFriendDataAllFriends] = useState([]);
    const location = useLocation();
    const friendId = location.pathname.split('/')[4];


    useEffect(() => {

        if (friendData) {
            const MutalFriend = () => {
                let mutal = [];
                let userFriends = User.friends;
                let friendFriends = friendData.friends;

                for (let i = 0; i < userFriends.length; i++) {
                    for (let j = 0; j < friendFriends.length; j++) {
                        if (userFriends[i] === friendFriends[j]) {
                            mutal.push(userFriends[i]);
                        }
                    }
                }
                setMutalFriendsLength(mutal.length);
            }
            MutalFriend()

            const getAllFriends = async () => {

                try {

                    const res = await axios.get(`${Host}/api/friend/getAllFriendsOfFriend/${friendData._id}`, {
                        headers: {
                            Authorization: `Bearer ${User.token}`
                        }
                    });

                    setFriendDataAllFriends(res.data)

                } catch (error) {

                    console.log(error);
                }
            }

            getAllFriends()
        }
    }, [friendData])


    const showPeople = (friend) => {
        setHover(true);
        setHoveredFriend(friend);
    }

    const hidePeople = () => {
        setHover(false);
    }

    const showuUpdateOptions = (type) => {

        if (type === "profile") {

            setShowingProfileUpdateOptions(!isShowingProfileUpdateOptions);
            setProfilePhotoFile(null);
            setShowPhotoSelectPhotoType("profile");
            setShowingUpdateOptions && setShowingUpdateOptions(false);

        } else {

            setShowingUpdateOptions(!isShowingUpdateOptions);
            setShowingProfileUpdateOptions && setShowingProfileUpdateOptions(false);
            setCoverPhotoFile(null);
            setShowPhotoSelectPhotoType("cover");
        }
    }


    const updateCoverPhoto = async () => {

        const formData = new FormData();

        formData.append("coverPhoto", coverPhotoFile);

        try {

            const res = await axios.post(`${Host}/api/user/updateCoverPhoto`, formData, {
                headers: {
                    "Authorization": `Bearer ${User.token}`
                }
            });

            dispatch(loadingSuccess(res.data));
            setCoverPhotoFile(null);
            setShowingUpdateOptions(false);

        } catch (error) {
            console.log(error);
        }
    };


    const UpdateProfilePhoto = async () => {

        const formData = new FormData();

        formData.append("profilePhoto", profilePhotoFile);

        try {

            const res = await axios.post(`${Host}/api/user/updateProfilePhoto`, formData, {
                headers: {
                    "Authorization": `Bearer ${User.token}`
                }
            });

            dispatch(loadingSuccess(res.data));
            setProfilePhotoFile(null);
            setShowingProfileUpdateOptions(false);

        } catch (error) {

            console.log(error)
        }

    }

    const showSelectPhotos = () => {
        setPhotoBoxOpen(true);
        setShowingUpdateOptions(false);
    }

    const showuProfileUpdateOptions = () => {
        setPhotoBoxOpen(true);
        setShowingProfileUpdateOptions(false);
    }

    const removeSelectedPhoto = () => {
        setCoverPhotoFile(null);
        setShowingUpdateOptions(false)
    }

    const showPhotoTypeFun = (type) => {
        setShowPhotoType(type)
    }

    const SetPhotoFunc = async (pic) => {

        try {

            if (showPhotoSelectPhotoType === "profile") {

                const updateProfilePhoto = await axios.get(`${Host}/api/user/updateProfilePhotoByName/${pic}`, {
                    headers: {
                        "Authorization": `Bearer ${User.token}`
                    }
                })

                dispatch(loadingSuccess(updateProfilePhoto.data));
                setShowingProfileUpdateOptions(false);
                setPhotoBoxOpen(false);
                setProfilePhotoFile(null);
                setShowPhotoType("Recent");
                setSelectedAlbum("");

            } else {

                const updateCoverPhoto = await axios.get(`${Host}/api/user/updateCoverPhotoByName/${pic}`, {
                    headers: {
                        "Authorization": `Bearer ${User.token}`
                    }
                });

                dispatch(loadingSuccess(updateCoverPhoto.data));
                setCoverPhotoFile(null);
                setShowingUpdateOptions(false);
                setPhotoBoxOpen(false);
                setShowPhotoType("Recent");
                setSelectedAlbum("");
            }

        } catch (error) {

            console.log(error);
        }
    };


    return (
        <div className=' min-h-[570px] w-full bg-white shadow flex justify-center'>

            {/* select photo section start */}

            {
                PhotoBoxOpen &&

                <div className=' w-screen h-screen bg-white bg-opacity-40 absolute top-0 left-0 flex justify-center items-center z-40'>
                    <div className=' bg-white w-1/2 h-[600px] shadow-md shadow-gray-300 overflow-hidden rounded-md'>
                        <div className=' flex p-3 border-b border-gray-300'>
                            {
                                selectedAlbum &&

                                <div onClick={() => setSelectedAlbum("")} className=' h-9 w-9 flex justify-center items-center text-xl bg-gray-200 rounded-full cursor-pointer'>
                                    <BsArrowLeftShort />
                                </div>
                            }
                            {
                                selectedAlbum ?

                                    <h4 className=' w-full  text-center text-xl font-bold'>{selectedAlbum}</h4>
                                    :
                                    <h4 className=' w-full  text-center text-xl font-bold'>Select Photo</h4>
                            }
                            <div onClick={() => { setPhotoBoxOpen(false); setShowPhotoType("Recent"); setSelectedAlbum("") }} className=' w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center font-semibold text-lg cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>

                        {
                            !selectedAlbum &&

                            <div className=' flex px-3 mb-3'>
                                <h1 onClick={() => showPhotoTypeFun("Recent")} className={` cursor-pointer w-1/2 text-center  p-3 font-semibold  ${showPhotoType === "Recent" && "border-blue-600 border-b-4 text-blue-500"}`}>Recent Photos</h1>
                                <h1 onClick={() => showPhotoTypeFun("Albums")} className={` cursor-pointer w-1/2 text-center p-3 font-semibold  ${showPhotoType === "Albums" && "border-blue-600 border-b-4 text-blue-500"}`}>Photo Albums</h1>
                            </div>
                        }


                        {
                            showPhotoType === "Recent" &&

                            <div className=' overflow-y-scroll friendSuggetionsScrollbar h-[490px] p-3 w-full'>
                                <div className=' w-full grid grid-cols-3 gap-3 rounded-lg cursor-pointer overflow-hidden'>
                                    {
                                        User && User.uploads.length > 0 && User.uploads.map((pic, index) => {
                                            return (
                                                <img key={index} onClick={() => SetPhotoFunc(pic)} src={`${Host}/images/${pic}`} alt="" className=' w-full h-28 object-cover border border-gray-300' />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }

                        {
                            showPhotoType === "Albums" && !selectedAlbum &&

                            <div className='p-3 grid grid-cols-3 gap-3'>
                                <div>
                                    <img onClick={() => setSelectedAlbum("Profile Pictures")} src={User.profilePicture ? `${Host}/images/${User.profilePicture}` : ProfilePhoto} alt="" className=' w-full h-28 rounded-lg cursor-pointer object-cover' />
                                    <p className=' font-semibold '>Profile Picture</p>
                                    <p className=' text-[12px] text-gray-800'><span>{User.allProfilePicture.length}</span> Uploads</p>
                                </div>
                                <div>
                                    <img onClick={() => setSelectedAlbum("Cover Photos")} src={User.coverPicture ? `${Host}/images/${User.coverPicture}` : coverPhoto} alt="" className=' w-full h-28 rounded-lg cursor-pointer object-cover' />
                                    <p className=' font-semibold '>Cover photos</p>
                                    <p className=' text-[12px] text-gray-800'><span>{User.AllCoverPhotos.length}</span> Uploads</p>
                                </div>
                            </div>

                        }
                        {
                            showPhotoType === "Albums" && selectedAlbum === "Cover Photos" &&

                            <div className=' overflow-y-scroll friendSuggetionsScrollbar h-[490px] p-3 w-full'>
                                <div className=' w-full grid grid-cols-3 gap-3 rounded-lg cursor-pointer overflow-hidden'>
                                    {
                                        User && User.AllCoverPhotos.length > 0 && User.AllCoverPhotos.map((pic, index) => {
                                            return (
                                                <img key={index} onClick={() => SetPhotoFunc(pic)} src={`${Host}/images/${pic}`} alt="" className=' w-full h-28 object-cover border border-gray-300' />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                        {
                            showPhotoType === "Albums" && selectedAlbum === "Profile Pictures" &&

                            <div className=' overflow-y-scroll friendSuggetionsScrollbar h-[490px] p-3 w-full'>
                                <div className=' w-full grid grid-cols-3 gap-3 rounded-lg cursor-pointer overflow-hidden'>
                                    {
                                        User && User.allProfilePicture.length > 0 && User.allProfilePicture.map((pic, index) => {
                                            return (
                                                <img key={index} onClick={() => SetPhotoFunc(pic)} src={`${Host}/images/${pic}`} alt="" className=' w-full h-28 object-cover border border-gray-300' />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }

                    </div>
                </div>
            }

            {/* select photo section end */}

            <div className={Profile ? 'w-[62%] h-full' : " w-[80%] h-full"}>
                {/* cover photo start */}
                <div className=' h-[350px] w-full relative'>
                    {
                        coverPhotoFile &&
                        <div className='absolute top-3 right-3'>

                            <button onClick={updateCoverPhoto} className='bg-blue-500 text-white font-semibold rounded-md px-3 py-[6px] mr-2 '>Save</button>
                            <button onClick={removeSelectedPhoto} className=' bg-red-500 text-white font-semibold rounded-md px-3 py-[6px]'>cencle</button>
                        </div>

                    }

                    {
                        coverPhotoFile ?
                            <img src={URL.createObjectURL(coverPhotoFile)} alt="" className=' w-full h-full object-cover rounded-b-lg' />
                            :
                            <div className=' w-full h-full'>
                                {
                                    friendData ?
                                        <img src={friendData && friendData.coverPicture ? `${Host}/images/${friendData.coverPicture}` : coverPhoto} alt="" className=' w-full h-full object-cover rounded-b-lg' />
                                        :
                                        <img src={User.coverPicture ? `${Host}/images/${User.coverPicture}` : coverPhoto} alt="" className=' w-full h-full object-cover rounded-b-lg' />
                                }

                            </div>
                    }
                    {
                        Profile &&

                        <div onClick={() => { showuUpdateOptions("cover") }} className=' cursor-pointer flex items-center absolute right-3 bottom-5 bg-white rounded-md px-2 py-2 group'>
                            <BsFillCameraFill className=' mr-1 text-lg' />
                            <button className='font-semibold text-sm'>Edit Cover Photo</button>
                            <div className=' absolute top-0 left-0 h-full w-full bg-slate-800 opacity-0 group-hover:opacity-10 '></div>
                        </div>
                    }
                    {
                        isShowingUpdateOptions && !coverPhotoFile &&

                        <div className=' bg-white rounded-md p-2 z-20 shadow-lg absolute -bottom-16  right-0 w-52'>
                            <div onClick={showSelectPhotos} className=' cursor-pointer flex items-center p-1 px-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-md'>
                                <AiOutlineCopy className=' font-semibold text-gray-500 text-lg mr-2' />
                                <span>Select Photo</span>
                            </div>
                            <div className=' flex items-center p-1 px-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-md'>
                                <BiUpload className=' font-semibold text-gray-500 text-lg mr-2' />
                                <label htmlFor="file">Upload Photo</label>
                                <input onChange={(e) => { setCoverPhotoFile(e.target.files[0]) }} type="file" id='file' className=' hidden' />
                            </div>
                        </div>
                    }
                </div>
                {/* cover photo end */}

                <div className='flex w-full h-36 px-5'>
                    <div className=' basis-[24%] relative'>
                        <div onClick={() => { Profile && showuUpdateOptions("profile") }} className=' group cursor-pointer absolute -top-9 left-5 h-44 w-44 rounded-full border-4 border-white shadow bg-slate-200'>
                            {
                                profilePhotoFile ?
                                    <div className=' w-full h-full relative'>
                                        <img src={URL.createObjectURL(profilePhotoFile)} alt="" className=' w-full h-full object-cover rounded-full' />
                                        <div className=' absolute top-7 right-4 h-7 w-7 z-50'>
                                            <p onClick={UpdateProfilePhoto} className=' text-green-400 cursor-pointer'>Save</p>
                                            <p onClick={() => setProfilePhotoFile(null)} className=' text-red-400 cursor-pointer'>Calcle</p>
                                        </div>
                                    </div>
                                    :
                                    <div className=' w-full h-full'>
                                        {
                                            friendData ?
                                                <img src={friendData && friendData.profilePicture ? `${Host}/images/${friendData.profilePicture}` : ProfilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                                                :
                                                <img src={User.profilePicture ? `${Host}/images/${User.profilePicture}` : ProfilePhoto} alt="" className=' w-full h-full rounded-full object-cover' />
                                        }
                                    </div>

                            }
                            {
                                Profile &&
                                <div className=' absolute right-0 bottom-2 rounded-full h-9 w-9 bg-gray-100 z-10 flex justify-center items-center overflow-hidden hover:bg-gray-200'>
                                    <BsFillCameraFill className=' text-lg' />
                                </div>
                            }
                            <div className=' absolute top-0 left-0 h-full w-full rounded-full bg-slate-500 opacity-0 group-hover:opacity-10 '></div>
                        </div>

                        {/* profile pic update start */}

                        {
                            isShowingProfileUpdateOptions && !profilePhotoFile &&

                            <div className=' bg-white rounded-md p-2 z-20 shadow-lg absolute -bottom-16  right-0 w-52'>
                                <div onClick={showuProfileUpdateOptions} className=' cursor-pointer flex items-center p-1 px-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-md'>
                                    <AiOutlineCopy className=' font-semibold text-gray-500 text-lg mr-2' />
                                    <span>Select Photo</span>
                                </div>
                                <div className=' flex items-center p-1 px-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-md'>
                                    <BiUpload className=' font-semibold text-gray-500 text-lg mr-2' />
                                    <label htmlFor="file">Upload Photo</label>
                                    <input onChange={(e) => { setProfilePhotoFile(e.target.files[0]) }} type="file" id='file' className=' hidden' />
                                </div>
                            </div>
                        }
                        {/* profile pic update end */}

                    </div>
                    {/* profile photo start */}
                    <div className=' basis-[30%] self-end'>
                        {
                            friendData ?
                                <h4 className=' font-bold text-3xl capitalize'>{friendData.firstName + " " + friendData.sureName}</h4>
                                :
                                <h4 className=' font-bold text-3xl capitalize'>{User.firstName + " " + User.sureName}</h4>
                        }
                        <div className={`text-gray-600 font-semibold ${Profile ? "hover:underline cursor-pointer" : ""} my-1`}>

                            {Profile ?
                                `${User.friends.length} Friends`
                                :
                                `${friendData && friendData.friends.length} friends ${mutalFriendsLength && mutalFriendsLength} mutal`
                            }
                        </div>
                        {
                            Profile &&
                            <div className='flex relative'>
                                {
                                    allFriends.length > 0 && allFriends.map((friend, index) => {
                                        return (

                                            <img key={index} src={friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} onMouseEnter={() => showPeople(friend)} onMouseLeave={hidePeople} alt="" className=' h-8 w-8 rounded-full object-cover cursor-pointer' />
                                        )
                                    })
                                }
                                <FriendsInfo isHover={isHover} hoveredFriend={hoveredFriend} />
                            </div>
                        }
                        {
                            !Profile &&
                            <div className='flex relative'>
                                {
                                    friendDataAllFriends.length > 0 && friendDataAllFriends.map((friend, index) => {
                                        return (

                                            <img key={index} src={friend.profilePicture ? `${Host}/images/${friend.profilePicture}` : ProfilePhoto} onMouseEnter={() => showPeople(friend)} onMouseLeave={hidePeople} alt="" className=' h-8 w-8 rounded-full object-cover cursor-pointer' />
                                        )
                                    })
                                }
                                <FriendsInfo isHover={isHover} hoveredFriend={hoveredFriend} />
                            </div>
                        }
                    </div>
                    {/* profile photo end */}
                    <div className=' basis-[40%] self-end justify-self-end flex justify-end  '>
                        {
                            AllFriends && <button className=' flex justify-center items-center bg-gray-200 hover:bg-gray-300 py-2 px-3 rounded-md font-semibold '>
                                <><img className=' w-5 mr-1' src='https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/c9BbXR9AzI1.png' alt='' />Friends</>
                            </button>
                        }
                        {
                            AllFriends && <button className='flex justify-center items-center hover:bg-blue-600 bg-blue-500 text-white ml-2 py-2 px-3 rounded-md font-semibold'>
                                <><BsMessenger className=' text-white w-5 mr-1' />Message</>
                            </button>
                        }
                        {
                            Profile &&
                            <button className='flex justify-center items-center hover:bg-blue-600 bg-blue-500 text-white ml-2 py-2 px-3 rounded-md font-semibold'>
                                <><AiFillPlusCircle className=' text-white text-xl mr-1' />Add To Story</>
                            </button>
                        }
                        {
                            Profile &&
                            <button className=' flex justify-center items-center bg-gray-200 ml-2 hover:bg-gray-300 py-2 px-3 rounded-md font-semibold '>
                                <><BsPencilFill className=' w-5 mr-1' />Edit Profile</>
                            </button>
                        }

                    </div>
                </div>

                <div className=' px-5'>
                    <hr className=' h-[1px] bg-black opacity-90 mt-5 ' />
                    <div className=' flex justify-between py-1'>
                        <div className='flex'>
                            {
                                Profile &&
                                <NavLink to='/profile' className='profileItems '>
                                    <span className={`${Profile ? " text-blue-500" : " text-gray-500 font-semibold"} inline-block`}>Post</span>
                                    {
                                        profile && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                AllFriends &&
                                <NavLink to={`/friends/all/profile/${friendId}`} className='profileItems '>
                                    <span className={`${Profile ? " text-blue-500" : " text-gray-500 font-semibold"} inline-block`}>Post</span>
                                    {
                                        profile && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                FriendSugeesions &&
                                <NavLink to={`/friends/suggetion/profile/${friendId}`} className='profileItems '>
                                    <span className={`${Profile ? " text-blue-500" : " text-gray-500 font-semibold"} inline-block`}>Post</span>
                                    {
                                        profile && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }

                            {
                                Profile &&
                                <NavLink to="/profile/about" className='profileItems '>
                                    <span className={`${About ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>About</span>
                                    {
                                        About && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                AllFriends &&
                                <NavLink to={`/friends/all/about/${friendId}`} className='profileItems '>
                                    <span className={`${About ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>About</span>
                                    {
                                        About && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                FriendSugeesions &&
                                <NavLink to={`/friends/suggetion/about/${friendId}`} className='profileItems '>
                                    <span className={`${About ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>About</span>
                                    {
                                        About && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }

                            {
                                Profile &&
                                <NavLink to={`/profile/friends`} className='profileItems '>
                                    <span className={`${Friends ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Friends</span>
                                    {
                                        Friends && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }

                            {
                                AllFriends &&
                                <NavLink to={`/friends/all/friends/${friendId}`} className='profileItems '>
                                    <span className={`${Friends ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Friends</span>
                                    {
                                        Friends && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                FriendSugeesions &&
                                <NavLink to={`/friends/suggetion/friends/${friendId}`} className='profileItems '>
                                    <span className={`${Friends ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Friends</span>
                                    {
                                        Friends && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                Profile &&
                                <NavLink to="/profile/photos" className='profileItems '>
                                    <span className={`${Photos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Photos</span>
                                    {
                                        Photos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                AllFriends &&
                                <NavLink to={`/friends/all/photos/${friendId}`} className='profileItems '>
                                    <span className={`${Photos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Photos</span>
                                    {
                                        Photos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                FriendSugeesions &&
                                <NavLink to={`/friends/suggetion/photos/${friendId}`} className='profileItems '>
                                    <span className={`${Photos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Photos</span>
                                    {
                                        Photos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                Profile &&
                                <NavLink to="/profile/videos" className='profileItems '>
                                    <span className={`${Videos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Videos</span>
                                    {
                                        Videos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                AllFriends &&
                                <NavLink to={`/friends/all/videos/${friendId}`} className='profileItems '>
                                    <span className={`${Videos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Videos</span>
                                    {
                                        Videos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                FriendSugeesions &&
                                <NavLink to={`/friends/suggetion/videos/${friendId}`} className='profileItems '>
                                    <span className={`${Videos ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Videos</span>
                                    {
                                        Videos && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            {
                                Profile &&
                                <NavLink to="/profile/checkInc" className='profileItems '>
                                    <span className={`${ChecksInc ? " text-blue-500" : "text-gray-500 font-semibold"} inline-block`}>Checks-Inc</span>
                                    {
                                        ChecksInc && <div className=' absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600'></div>
                                    }
                                </NavLink>
                            }
                            <div className=' profileItems text-gray-500 font-semibold'>More</div>
                        </div>
                        <div className=' relative group  h-7 w-9 rounded-md overflow-hidden mt-2 cursor-pointer  bg-gray-300  flex justify-center items-center'>
                            <span className=' text-lg font-bold mb-3'>...</span>
                            <div className=' absolute h-full w-full top-0 left-0 bg-black opacity-0 group-hover:opacity-10'></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileTop
