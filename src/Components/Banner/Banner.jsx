import React from 'react'
import b from './Banner.module.css'

function Banner() {
    return (
        <>
            <div className='h-[100vh] w-[100vw] bg-gradient-to-b from-[black] to-[#1f0812] flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-3xl'>Hi, I am Darshan</h1>
            </div>
        </>
    )
}

export default Banner