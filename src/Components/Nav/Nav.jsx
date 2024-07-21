import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Nav() {
    const [bars, setBars] = useState(false);

    function barsClicked() {
        setBars(!bars);
    }

    return (
        <>
            <nav className='hidden md:flex fixed w-full top-0 font-semibold bg-black text-xs text-gray-500 items-center justify-center gap-20 p-5'>
                <h1><a href="#HOME" className='duration-200 hover:text-white'>HOME</a></h1>
                <h1><a href="#PROJECTS" className='duration-200 hover:text-white'>PROJECTS</a></h1>
                <h1><a href="#EDUCATIONAL" className='duration-200 hover:text-white'>EDUCATIONAL QUALIFICATION</a></h1>
                <h1><a href="#SKILLS" className='duration-200 hover:text-white'>SKILLS</a></h1>
                <h1><a href="#CONTACT" className='duration-200 hover:text-white'>CONTACT</a></h1>
                <h1><a href="#RESUME" className='duration-200 hover:text-white'>RESUME</a></h1>
            </nav>

            <nav className='md:hidden fixed w-full top-0 font-semibold bg-black flex-col items-end justify-center p-5'>
                <div className='flex justify-end w-full'>
                    <FontAwesomeIcon icon={faBars} color='white' onClick={barsClicked} />
                </div>
                <div className={`${bars ? 'block' : 'hidden'} w-full text-center text-white mt-2`}>
                    <h1><a href="#HOME" className='block py-2 duration-200 hover:text-gray-300'>HOME</a></h1>
                    <h1><a href="#PROJECTS" className='block py-2 duration-200 hover:text-gray-300'>PROJECTS</a></h1>
                    <h1><a href="#EDUCATIONAL" className='block py-2 duration-200 hover:text-gray-300'>EDUCATIONAL QUALIFICATION</a></h1>
                    <h1><a href="#SKILLS" className='block py-2 duration-200 hover:text-gray-300'>SKILLS</a></h1>
                    <h1><a href="#CONTACT" className='block py-2 duration-200 hover:text-gray-300'>CONTACT</a></h1>
                    <h1><a href="#RESUME" className='block py-2 duration-200 hover:text-gray-300'>RESUME</a></h1>
                </div>
            </nav>
        </>
    );
}

export default Nav;
