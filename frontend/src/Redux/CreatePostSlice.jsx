import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    createPostWithImage: false,
    createPostWithoutImage: false,
}


export const CreatePostSlice = createSlice({
    name: 'CreatePost',
    initialState,
    reducers: {
        OpenCreatePostImage: (state) => {
            state.createPostWithImage = true;
        },
        CloseCreatePostImage: (state) => {
            state.createPostWithImage = false;
        },
        OpenCreatePost: (state) => {
            state.createPostWithoutImage = true;
        },
        CloseCreatePost: (state) => {
            state.createPostWithoutImage = false;
        },
    },
})

export const { OpenCreatePostImage, CloseCreatePostImage, OpenCreatePost, CloseCreatePost } = CreatePostSlice.actions

export default CreatePostSlice.reducer
