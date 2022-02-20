import Friend from "./Pages/Friend";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Group from "./Pages/Group";
import MarketPlace from "./Pages/MarketPlace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllFriend from "./Pages/AllFriend";
import FriendRequest from "./Pages/FriendRequest";
import FriendSuggetions from "./Pages/FriendSuggetions";
import FriendsBirthday from "./Pages/FrienfsBirthday";
import Watch from "./Pages/Watch";
import WatchLive from "./Pages/WatchLive";
import WatchShow from "./Pages/WatchShow";
import FriendCustomList from "./Pages/FriendCustomList";
import WatchSavedVideo from "./Pages/WatchSavedVideo";
import WatchLatestVideo from "./Pages/WatchLatestVideo";
import FriendSugProfile from "./Pages/FriendSugProfile";
import AllFriendSecProfile from "./Pages/AllFriendSecProfile";
import MarketPlaceNotification from "./Pages/MarketPlaceNotification";
import MarketPlaceIndex from "./Pages/MarketPlaceIndex";
import MarketPlaceBuying from "./Pages/MarketPlaceBuying";
import MarketPlaceSelling from "./Pages/MarketPlaceSelling";
import FriendRequestProfile from "./Pages/FriendRequestProfile";
import GroupDiscover from "./Pages/GroupDiscover";
import GroupNotifications from "./Pages/GroupNotifications";
import ProfileAbout from "./Pages/ProfileAbout";
import ProfileFriends from "./Pages/ProfileFriends";
import ProfilePhotos from "./Pages/ProfilePhotos";
import ProfileVideo from "./Pages/ProfileVideo";
import ProfileCheckInc from "./Pages/ProfileCheckInc";
import ForgetPassword from "./Pages/ForgetPassword";
import CreatePassword from "./Pages/CreatePassword";
import Login from "./Pages/Login";
import ProfilePhotoUpdate from "./Pages/ProfilePhotoUpdate";
import CoverPhotoUpload from "./Pages/CoverPhotoUpload";
import PrivateRoute from "./Components/PrivateRoute";
import Biography from "./Pages/Biography";
import PhotosOfProfile from "./Pages/PhotosOfProfile";
import PhotosOfCover from "./Pages/PhotosOfCover";
import { AllFriendsFatchSuccess, FriendsRequestsFatchSuccess, SuggestedFriendsFatchSuccess } from "./Redux/FriendsSlice";
import { Host } from "./Data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const user = useSelector(state => state.User.User);
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/friends" element={< Friend />} />
        <Route path="/friends/request" element={<FriendRequest />} />
        <Route path="/friends/request/profile" element={<FriendRequestProfile />} />
        <Route path="/friends/suggetion" element={<FriendSuggetions />} />
        <Route path="/friends/suggetion/profile" element={<FriendSugProfile />} />
        <Route path="/friends/all" element={<AllFriend />} />
        <Route path="/friends/all/profile/:id" element={<AllFriendSecProfile />} />
        <Route path="/friends/birthday" element={<FriendsBirthday />} />
        <Route path="/friends/customList" element={<FriendCustomList />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/watch/live" element={<WatchLive />} />
        <Route path="/watch/show" element={<WatchShow />} />
        <Route path="/watch/saved" element={<WatchSavedVideo />} />
        <Route path="/watch/latestVideo" element={<WatchLatestVideo />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/marketplace/notifications" element={<MarketPlaceNotification />} />
        <Route path="/marketplace/index" element={<MarketPlaceIndex />} />
        <Route path="/marketplace/buying" element={<MarketPlaceBuying />} />
        <Route path="/marketplace/selling" element={<MarketPlaceSelling />} />
        <Route path="/group" element={<Group />} />
        <Route path="/group/discover" element={<GroupDiscover />} />
        <Route path="/group/notifications" element={<GroupNotifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/about" element={<ProfileAbout />} />
        <Route path="/profile/friends" element={<ProfileFriends />} />
        <Route path="/profile/photos" element={<ProfilePhotos />} />
        <Route path="/profile/videos" element={<ProfileVideo />} />
        <Route path="/profile/checkInc" element={<ProfileCheckInc />} />
        <Route path="/profile/PhotosOfProfile" element={<PhotosOfProfile />} />
        <Route path="/profile/PhotosOfCover" element={<PhotosOfCover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/profilePhotoUpdate" element={<ProfilePhotoUpdate />} />
        <Route path="/coverPhotoupload" element={<CoverPhotoUpload />} />
        <Route path="/biography" element={<Biography />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
