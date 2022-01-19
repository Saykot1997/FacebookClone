import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Post: [],
    isLoading: false,
    error: "",
}


export const PostSlice = createSlice({

    name: 'Post',
    initialState,

    reducers: {
        Loading: (state) => {
            state.isLoading = true;
        },
        AllPostFatchSuccess: (state, action) => {
            state.isLoading = false;
            state.Post = [...action.payload];
        },
        AllPostFatchFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        PostCreateSuccess: (state, action) => {
            state.isLoading = false;
            state.Post = [...state.Post, action.payload];
        },
        PostCreateFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        PostDelete: (state, action) => {
            let restPost = [];
            state.Post.map((post) => {
                if (post._id !== action.payload._id) {
                    restPost.push(post)
                }
            })
            state.Post = restPost
            state.isLoading = false;
        },
        PostUpdate: (state, action) => {
            let allPost = [];
            state.Post.map((post) => {
                if (post._id === action.payload._id) {
                    allPost.push(action.payload)
                } else {
                    allPost.push(post)
                }
            })
            state.Post = allPost
            state.isLoading = false;
        }
    }
})

export const { Loading, AllPostFatchSuccess, AllPostFatchFailure, PostCreateSuccess, PostCreateFailure, PostDelete, PostUpdate } = PostSlice.actions

export default PostSlice.reducer
