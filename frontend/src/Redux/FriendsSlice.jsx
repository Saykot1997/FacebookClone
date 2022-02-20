import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllFriends: [],
    SuggestedFriends: [],
    FriendsRequests: [],
    isLoading: false,
    error: "",
}


export const FriendsSlice = createSlice({

    name: 'Friends',
    initialState,

    reducers: {
        Loading: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        AllFriendsFatchSuccess: (state, action) => {
            state.AllFriends = [...action.payload];
            state.isLoading = false;
            state.error = "";
        },
        AllFriendsFatchFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        SuggestedFriendsFatchSuccess: (state, action) => {
            state.SuggestedFriends = [...action.payload];
            state.isLoading = false;
            state.error = "";
        },
        SuggestedFriendsFatchFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        FriendsRequestsFatchSuccess: (state, action) => {
            state.FriendsRequests = [...action.payload];
            state.isLoading = false;
            state.error = "";
        },
        FriendsRequestsFatchFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

export const { Loading, AllFriendsFatchSuccess, AllFriendsFatchFailure, SuggestedFriendsFatchSuccess, SuggestedFriendsFatchFailure, FriendsRequestsFatchSuccess, FriendsRequestsFatchFailure } = FriendsSlice.actions

export default FriendsSlice.reducer
