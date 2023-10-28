import React from 'react'
import b from './Banner.module.css'

function Banner() {
    return (
        <>
            <div className='relative -z-10 bg-gradient-to-br to-black from-pink-950  max-h- p-4 flex flex-col items-center justify-center'>
                <div className={`h-[90vh] w-[90vw] text-white flex justify-center items-center overflow-hidden`}>
                    <div className={`${b.image_container}`}>
                        <img src="../../../src/Images/myimage.jpg" className='rounded-2xl' alt="no image" width="100%"/>
                    </div>
                    <div className='relative flex flex-col p-2'>
                        <p className='text-xl text-pink-600 font-bold'>Hello,<br />I'm Darshan Dinesh MP</p>
                        <p className="text-3xl font-extrabold">Devoted to the art of programming</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner