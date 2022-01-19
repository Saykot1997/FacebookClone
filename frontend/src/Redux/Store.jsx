import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserSlice';
import CreatePostReducer from './CreatePostSlice';
import PostReducer from './PostSlice';

export const store = configureStore({
    reducer: {
        User: UserReducer,
        CreatePost: CreatePostReducer,
        Post: PostReducer,
    },
})
