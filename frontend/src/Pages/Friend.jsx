import Topbar from "../Components/Topbar"
import FriendLeft from "../Components/FriendLeft"
import SingleFindFriend from "../Components/SingleFindFriend"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { Host } from "../Data"
import { AllFriendsFatchSuccess, FriendsRequestsFatchSuccess, SuggestedFriendsFatchSuccess } from "../Redux/FriendsSlice"


function Friend() {

    const user = useSelector(state => state.User.User);
    const Request = useSelector(state => state.Friends.FriendsRequests);
    const friendSugeesions = useSelector(state => state.Friends.SuggestedFriends);
    const dispatch = useDispatch();

    useEffect(() => {

        try {

            const getFriendSugeesions = async () => {

                const res = await axios.get(`${Host}/api/friend/friendSuggestion`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                dispatch(SuggestedFriendsFatchSuccess(res.data));
            }

            const getAllFriends = async () => {

                const res = await axios.get(`${Host}/api/friend/getAllFriends`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                dispatch(AllFriendsFatchSuccess(res.data));
            }
            const getRequest = async () => {

                const res = await axios.get(`${Host}/api/friend/getFriendRequests`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                dispatch(FriendsRequestsFatchSuccess(res.data));
            }

            getRequest()
            getAllFriends()
            getFriendSugeesions();

        } catch (error) {

            console.log(error);
        }

    }, [user]);


    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <div className=' h-full w-[23.5%] bg-white shadow-md shadow-gray-400 p-2'>
                    <FriendLeft Home />
                </div>
                <div className='w-[73.5%] h-full overflow-y-scroll'>
                    <div className='w-full pr-10 py-7'>
                        {
                            Request.length > 0 ?
                                <div className=" w-full pb-4 mb-4 border-b border-gray-300">
                                    <div className=" w-full flex justify-between mb-4">
                                        <span className=' font-bold text-xl'>Friend Request</span>
                                        <span className=' text-blue-500 text-lg'>See All</span>
                                    </div>
                                    <div className='w-full grid grid-cols-5 gap-3'>
                                        {
                                            Request.length > 0 && Request.map((request, index) => {
                                                return (
                                                    <SingleFindFriend RequestedFriend friend={request} key={index} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                :
                                null

                        }
                        <div className=' w-full flex justify-between mb-4'>
                            <span className=' font-bold text-xl'>People You May Know</span>
                            <span className=' text-blue-500 text-lg'>See All</span>
                        </div>
                        <div className='w-full grid grid-cols-5 gap-3'>
                            {
                                friendSugeesions.length > 0 && friendSugeesions.map((friend, index) => {

                                    return (

                                        <SingleFindFriend friend={friend} key={index} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friend
