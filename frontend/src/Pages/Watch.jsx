import React, { useEffect } from 'react'
import SingleVideo from '../Components/SingleVideo'
import Topbar from '../Components/Topbar'
import WatchLeft from '../Components/WatchLeft'


function Watch() {

    const showVideo = (e) => {

        const videoDiv = document.getElementsByClassName('singleVideo');
        Array.from(videoDiv).forEach((v, i) => {

            if (v.offsetTop + e.target.offsetTop > e.target.scrollTop && v.offsetTop + v.offsetHeight < e.target.scrollTop + e.target.clientHeight) {

                v.classList.add('active');

            } else {

                v.classList.remove('active');
            }

            Array.from(videoDiv).forEach((v, i) => {

                if (v.className.includes('active')) {
                    v.querySelector('video').play();
                } else {
                    v.querySelector('video').pause();
                }

            })
        })



    }
    const number = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        document.getElementsByClassName('singleVideo')[0].querySelector('video').play();
    }, [])



    return (
        <div className=' bg-gray-100 h-screen w-full'>
            <Topbar />
            <div className='rightbar w-full flex justify-between'>
                <WatchLeft Home />
                <div className='w-[76.5%] h-full flex justify-center overflow-y-scroll' onScroll={(e) => { showVideo(e) }}>
                    <div className=' w-[70%] h-full mt-1'>
                        {number.map((item, index) => { return <SingleVideo key={index} /> })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch

