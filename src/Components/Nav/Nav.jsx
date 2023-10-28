import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    const [barsClicked, setBarsClicked] = useState(false)
    function changeBarsClicked() {
        setBarsClicked(!barsClicked)
    }
    return (
        <>
            <nav className='relative top-0'>
                <div className='bg-black text-white flex items-center justify-end py-4 px-8'>
                    <div className='text-lg'><FontAwesomeIcon className='cursor-pointer' onClick={changeBarsClicked} icon={barsClicked ? faClose : faBars} /></div>
                </div>
                <div className={`bg-black w-full text-white absolute duration-300 ${barsClicked ? 'scale-y-1 top-[3.5rem]' : 'scale-y-0 -top-[13rem]'}`}>
                    <ul className='w-full text-lg'>
                        <li className='py-4 px-8 border-b-[1px] border-t-[1px] border-gray-700'><a href="#home">Home</a></li>
                        <li className='py-4 px-8 border-b-[1px] border-gray-700'><a href="#contact">Contact</a></li>
                        <li className='py-4 px-8 border-b-[1px] border-gray-700'><a href="www.google.com">Projects</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav