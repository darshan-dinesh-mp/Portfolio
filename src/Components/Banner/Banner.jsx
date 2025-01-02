import React from 'react'
import b from './Banner.module.css'
import { useInView } from 'react-intersection-observer';

function Banner() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div id='HOME' className={`h-[100vh] w-[100vw] bg-black flex flex-col-reverse md:flex-row items-center justify-center ${b['mobile-flex']}`}>
            <div ref={ref} className={`slide-in-left ${inView ? 'visible' : ''} w-[50vw] md:w-[30vw] p-4 flex flex-col items-center justify-center gap-5 ${b['text-container']}`}>
                <h1 className='text-white font-semibold text-3xl text-center'>Hi, I am Darshan</h1>
                <h1 className='text-white font-semibold text-l text-center'>A passionate and dedicated programmer with a strong background in Web Development and Android Development.</h1>
            </div>
            <div ref={ref} className={`slide-in-left ${inView ? 'visible' : ''} w-[30vw] rounded-3xl flex justify-center items-center md:justify-center`}>
                <img src="/Images/profile.png" alt="Image not available" className={b.image} />
            </div>
        </div>
    )
}

export default Banner
