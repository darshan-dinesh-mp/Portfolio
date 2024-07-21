import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Nav() {
    const [bars, setBars] = useState(false);
    const [option, setOption] = useState('Home');

    function barsClicked() {
        setBars(!bars);
    }

    function optionClicked(optionName) {
        setOption(optionName);
        setBars(false);
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
                    <h1 className='text-white'>{option}</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBars} color='white' onClick={barsClicked} />
                </div>
            </nav>

            {/* Backdrop */}
            {bars && <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-slate-950 text-white p-5 transition-transform duration-300 ${bars ? 'translate-x-0' : 'translate-x-full'} z-20`}>
                <div className='flex flex-col items-end'>
                    <button onClick={barsClicked} className='mb-5 text-2xl'>&times;</button>
                    <h1><a href="#HOME" className='block py-2 duration-200 hover:text-gray-300' onClick={() => optionClicked('Home')}>HOME</a></h1>
                    <h1><a href="#PROJECTS" className='block py-2 duration-200 hover:text-gray-300' onClick={() => optionClicked('Projects')}>PROJECTS</a></h1>
                    <h1><a href="#EDUCATIONAL" className='block py-2 duration-200 hover:text-gray-300' onClick={() => optionClicked('Qualifications')}>QUALIFICATION</a></h1>
                    <h1><a href="#SKILLS" className='block py-2 duration-200 hover:text-gray-300' onClick={() => optionClicked('Skills')}>SKILLS</a></h1>
                    <h1><a href="#CONTACT" className='block py-2 duration-200 hover:text-gray-300' onClick={() => optionClicked('Contact')}>CONTACT</a></h1>
                    <h1><a href="#RESUME" className='block py-2 duration-200 hover:text-gray-300' onClick={barsClicked}>RESUME</a></h1>
                </div>
            </div>
        </>
    );
}

export default Nav;
