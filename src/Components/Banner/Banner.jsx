import React from 'react'
import b from './Banner.module.css'

function Banner() {
    return (
        <>
            <div id='HOME' className='h-[100vh] w-[100vw] bg-gradient-to-b from-[black] to-[#1f0812] flex flex-col-reverse md:flex-row items-center justify-center'>
                <div className='w-[50vw] p-4 flex flex-col items-start justify-center gap-5'>
                    <h1 className='text-white font-semibold text-3xl'>Hi, I am Darshan</h1>
                    <h1 className='text-white font-semibold text-l'>A passionate and dedicated programmer with a strong background in Web Development and Android Development.</h1>
                </div>
                <div className='text-white'>
                    <img src="/Images/profile.png" alt="Image not available" className={b.image} />
                </div>
            </div>
        </>
    )
}

export default Banner
