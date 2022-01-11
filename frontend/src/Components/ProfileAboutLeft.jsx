import React from 'react'

function ProfileAboutLeft({ overview, work, lived, contact, family, events, details }) {
    return (
        <div className=' basis-[33%] px-2 border-r border-gray-300'>
            <h4 className=' font-bold text-lg m-3'>About</h4>
            <p className={`${overview ? "bg-blue-100 text-blue-600" : "text-gray-500 "} py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Overview</p>
            <p className={`${work ? "bg-blue-100 text-blue-600" : "text-gray-500 "}py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Work and Education</p>
            <p className={`${lived ? "bg-blue-100 text-blue-600" : "text-gray-500 "}py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Places Lived</p>
            <p className={`${contact ? "bg-blue-100 text-blue-600" : "text-gray-500 "}py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Contact and Basic Info</p>
            <p className={`${family ? "bg-blue-100 text-blue-600" : "text-gray-500 "}py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Family and Relationship</p>
            <p className={`${details ? "bg-blue-100 text-blue-600" : "text-gray-500 "}py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Details about you</p>
            <p className={`${events ? "bg-blue-100 text-blue-600" : "text-gray-500 "}py-1 px-2 my-2 cursor-pointer hover:bg-gray-100 font-semibold rounded-md `} >Live Events</p>
        </div>
    )
}

export default ProfileAboutLeft
