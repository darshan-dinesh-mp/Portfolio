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
                <h1><a href="#EDUCATIONAL" className='duration-200 hover:text-white'>QUALIFICATION</a></h1>
                <h1><a href="#SKILLS" className='duration-200 hover:text-white'>SKILLS</a></h1>
                <h1><a href="#CONTACT" className='duration-200 hover:text-white'>CONTACT</a></h1>
                <h1><a href="#RESUME" className='duration-200 hover:text-white'>RESUME</a></h1>
            </nav>

            <nav className='md:hidden fixed w-full top-0 font-semibold bg-black p-5 flex justify-between items-center'>
                <div>
                    <h1 className='text-white'>MENU</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBars} color='white' onClick={barsClicked} />
                </div>
            </nav>

            <div className={`fixed top-0 right-0 h-full bg-black text-white p-5 transition-transform duration-300 ${bars ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col items-end'>
                    <button onClick={barsClicked} className='mb-5 text-2xl'>&times;</button>
                    <h1><a href="#HOME" className='block py-2 duration-200 hover:text-gray-300'>HOME</a></h1>
                    <h1><a href="#PROJECTS" className='block py-2 duration-200 hover:text-gray-300'>PROJECTS</a></h1>
                    <h1><a href="#EDUCATIONAL" className='block py-2 duration-200 hover:text-gray-300'>QUALIFICATION</a></h1>
                    <h1><a href="#SKILLS" className='block py-2 duration-200 hover:text-gray-300'>SKILLS</a></h1>
                    <h1><a href="#CONTACT" className='block py-2 duration-200 hover:text-gray-300'>CONTACT</a></h1>
                    <h1><a href="#RESUME" className='block py-2 duration-200 hover:text-gray-300'>RESUME</a></h1>
                </div>
            </div>
        </>
    );
}

export default Nav;
