import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    User: localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : null,
    isLoading: false,
    error: "",
}


export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        loadingSuccess: (state, action) => {
            state.isLoading = false;
            state.User = action.payload;
            localStorage.setItem('User', JSON.stringify(action.payload));
        },
        loadingFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        Logout: (state) => {
            state.User = null;
            localStorage.removeItem('User');
            state.isLoading = false;
            state.error = '';
        }
    },
})

export const { loading, loadingSuccess, loadingFailure, Logout } = UserSlice.actions

export default UserSlice.reducer
