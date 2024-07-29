import React from 'react'
import b from './Banner.module.css'

function Banner() {
    return (
        <div id='HOME' className={`h-[100vh] w-[100vw] bg-gradient-to-b from-[black] to-[#1f0812] flex flex-col-reverse md:flex-row items-center justify-center ${b['mobile-flex']}`}>
            <div className="w-[60vw] md:w-[30vw] flex flex-col items-start md:items-center justify-center gap-5 ${b['text-container']}">
                <h1 className='text-white font-semibold text-3xl text-center'>Hi, I am Darshan</h1>
                <h1 className='text-white font-semibold text-l text-center'>A passionate and dedicated programmer with a strong background in Web Development and Android Development.</h1>
            </div>
            <div className='flex justify-center items-center md:justify-start'>
                <img src="/Images/profile.png" alt="Image not available" className={b.image} />
            </div>
        </div>
    )
}

export default Banner
