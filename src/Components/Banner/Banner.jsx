import React from 'react'
import b from './Banner.module.css'

function Banner() {
    return (
        <>
            <div className='relative h-[100vh] w-[100vw] -z-10 bg-gradient-to-b from-[black] to-[#1f0812] flex flex-col items-center justify-center'>
                <div className={`${b.image_codntainer} w-[70%] p-[3rem] text-white flex flex-col gap-4 justify-center items-center border-[0.5px] rounded-2xl`}>
                    <div className={`w-[100%] overflow-hidden flex items-center justify-center bg-[white] rounded-full filter grayscale-[0.75]`}>
                        <img src="/Images/myimage.jpg" alt="no image" width="50%" className=''/>
                    </div>
                    <div className='flex flex-col gap-4 relative'>
                        <p className='text-xl text-pink-600 font-bold'>Hello,<br />I'm Darshan</p>
                        <p className="text-3xl font-extrabold">Devoted to the art of programming.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner