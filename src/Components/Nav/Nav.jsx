import React from 'react'

function Nav() {
    return (
        <>
            <nav className='fixed w-full top-0 font-semibold bg-black text-xs text-gray-500 flex items-center justify-center gap-20 p-5'>
                <h1><a href="#HOME" className='duration-200 hover:text-white'>HOME</a></h1>
                <h1><a href="#PROJECTS" className='duration-200 hover:text-white'>PROJECTS</a></h1>
                <h1><a href="#EDUCATIONAL" className='duration-200 hover:text-white'>EDUCATIONAL QUALIFICATION</a></h1>
                <h1><a href="#SKILLS" className='duration-200 hover:text-white'>SKILLS</a></h1>
                <h1><a href="#CONTACT" className='duration-200 hover:text-white'>CONTACT</a></h1>
                <h1><a href="#RESUME" className='duration-200 hover:text-white'>RESUME</a></h1>
            </nav>
        </>
    )
}

export default Nav