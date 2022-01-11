import React from 'react';
import Post from './Post';
import Share from './Share';
import Story from './Story';

export default function Feed() {
    return (
        <div className=' basis-[42%]'>
            <div className=' p-5 w-full'>
                <Story />
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
