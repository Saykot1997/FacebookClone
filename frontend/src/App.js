import { AllFriendsFatchSuccess, FriendsRequestsFatchSuccess, SuggestedFriendsFatchSuccess } from "./Redux/FriendsSlice";
import { Host } from "./Data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Friend from "./Pages/Friend";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Group from "./Pages/Group";
import MarketPlace from "./Pages/MarketPlace";
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
import AllFriendsAbout from "./Pages/AllFriendsAbout";
import AllFriendsOfFriend from "./Pages/AllFriendsOfFriend";
import AllFriendsPhotos from "./Pages/AllFriendsPhotos";
import AllFriendsVideos from "./Pages/AllFriendsVideos";
import FriendSugAbout from "./Pages/FriendSugAbout";
import FriendSugFriends from "./Pages/FriendSugFriends";
import FriendSugPhotos from "./Pages/FriendSugPhotos";
import FriendSugVideos from "./Pages/FriendSugVideos";
import FriendRequestAbout from "./Pages/FriendRequestAbout";
import FriendRequestFriends from "./Pages/FriendRequestFriends";
import FriendRequestPhotos from "./Pages/FriendRequestPhotos";
import FriendRequestVideos from "./Pages/FriendRequestVideos";

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
        <Route path="/friends" element={<PrivateRoute><Friend /></PrivateRoute>} />
        <Route path="/friends/request" element={<PrivateRoute><FriendRequest /></PrivateRoute>} />
        <Route path="/friends/request/profile/:id" element={<PrivateRoute><FriendRequestProfile /></PrivateRoute>} />
        <Route path="/friends/request/about/:id" element={<PrivateRoute><FriendRequestAbout /></PrivateRoute>} />
        <Route path="/friends/request/friends/:id" element={<PrivateRoute><FriendRequestFriends /></PrivateRoute>} />
        <Route path="/friends/request/photos/:id" element={<PrivateRoute><FriendRequestPhotos /></PrivateRoute>} />
        <Route path="/friends/request/videos/:id" element={<PrivateRoute><FriendRequestVideos /></PrivateRoute>} />
        <Route path="/friends/suggetion" element={<PrivateRoute><FriendSuggetions /></PrivateRoute>} />
        <Route path="/friends/suggetion/profile/:id" element={<PrivateRoute><FriendSugProfile /></PrivateRoute>} />
        <Route path="/friends/suggetion/about/:id" element={<PrivateRoute><FriendSugAbout /></PrivateRoute>} />
        <Route path="/friends/suggetion/friends/:id" element={<PrivateRoute><FriendSugFriends /></PrivateRoute>} />
        <Route path="/friends/suggetion/photos/:id" element={<PrivateRoute><FriendSugPhotos /></PrivateRoute>} />
        <Route path="/friends/suggetion/videos/:id" element={<PrivateRoute><FriendSugVideos /></PrivateRoute>} />
        <Route path="/friends/all" element={<PrivateRoute><AllFriend /></PrivateRoute>} />
        <Route path="/friends/all/profile/:id" element={<PrivateRoute><AllFriendSecProfile /></PrivateRoute>} />
        <Route path="/friends/all/about/:id" element={<PrivateRoute><AllFriendsAbout /></PrivateRoute>} />
        <Route path="/friends/all/friends/:id" element={<PrivateRoute><AllFriendsOfFriend /></PrivateRoute>} />
        <Route path="/friends/all/photos/:id" element={<PrivateRoute><AllFriendsPhotos /></PrivateRoute>} />
        <Route path="/friends/all/videos/:id" element={<PrivateRoute><AllFriendsVideos /></PrivateRoute>} />
        <Route path="/friends/birthday" element={<PrivateRoute><FriendsBirthday /></PrivateRoute>} />
        <Route path="/friends/customList" element={<PrivateRoute><FriendCustomList /></PrivateRoute>} />
        <Route path="/watch" element={<PrivateRoute><Watch /></PrivateRoute>} />
        <Route path="/watch/live" element={<PrivateRoute><WatchLive /></PrivateRoute>} />
        <Route path="/watch/show" element={<PrivateRoute><WatchShow /></PrivateRoute>} />
        <Route path="/watch/saved" element={<PrivateRoute><WatchSavedVideo /></PrivateRoute>} />
        <Route path="/watch/latestVideo" element={<PrivateRoute><WatchLatestVideo /></PrivateRoute>} />
        <Route path="/marketplace" element={<PrivateRoute><MarketPlace /></PrivateRoute>} />
        <Route path="/marketplace/notifications" element={<PrivateRoute><MarketPlaceNotification /></PrivateRoute>} />
        <Route path="/marketplace/index" element={<PrivateRoute><MarketPlaceIndex /></PrivateRoute>} />
        <Route path="/marketplace/buying" element={<PrivateRoute><MarketPlaceBuying /></PrivateRoute>} />
        <Route path="/marketplace/selling" element={<PrivateRoute><MarketPlaceSelling /></PrivateRoute>} />
        <Route path="/group" element={<PrivateRoute><Group /></PrivateRoute>} />
        <Route path="/group/discover" element={<PrivateRoute><GroupDiscover /></PrivateRoute>} />
        <Route path="/group/notifications" element={<PrivateRoute><GroupNotifications /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/profile/about" element={<PrivateRoute><ProfileAbout /></PrivateRoute>} />
        <Route path="/profile/friends" element={<PrivateRoute><ProfileFriends /></PrivateRoute>} />
        <Route path="/profile/photos" element={<PrivateRoute><ProfilePhotos /></PrivateRoute>} />
        <Route path="/profile/videos" element={<PrivateRoute><ProfileVideo /></PrivateRoute>} />
        <Route path="/profile/checkInc" element={<PrivateRoute><ProfileCheckInc /></PrivateRoute>} />
        <Route path="/profile/PhotosOfProfile" element={<PrivateRoute><PhotosOfProfile /></PrivateRoute>} />
        <Route path="/profile/PhotosOfCover" element={<PrivateRoute><PhotosOfCover /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/newpassword/:token" element={<CreatePassword />} />
        <Route path="/profilePhotoUpdate" element={<ProfilePhotoUpdate />} />
        <Route path="/coverPhotoupload" element={<CoverPhotoUpload />} />
        <Route path="/biography" element={<Biography />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
