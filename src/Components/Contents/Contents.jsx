import {
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJava,
    faLaravel,
    faPhp,
    faReact
} from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contents.css'

function Contents() {
    const skills = [
        { icon: faJava, name: 'Java' },
        { icon: faC, name: 'C' },
        { icon: faHtml5, name: 'HTML5' },
        { icon: faCss3, name: 'CSS3' },
        { icon: faReact, name: 'React & React Native' },
        { icon: faPhp, name: 'PHP' },
        { icon: faLaravel, name: 'Laravel' },
        { icon: faGitAlt, name: 'Git' },
        { icon: faGithub, name: 'GitHub' },
    ];

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-black to-[#1f0812] p-10'>
                <div id='PROJECTS' className='w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center'>
                    <div className='text-white mb-8'>
                        <h1 className='text-4xl font-bold'>Projects</h1>
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-[#2e1a24] p-6 rounded-lg shadow-lg'>
                            <h2 className='text-2xl font-semibold text-white mb-4'>Eatables</h2>
                            <p className='text-gray-300'>Food Discovery and Review Platform.</p>
                        </div>
                        <div className='bg-[#2e1a24] p-6 rounded-lg shadow-lg'>
                            <h2 className='text-2xl font-semibold text-white mb-4'>SMAPP</h2>
                            <p className='text-gray-300'>Student Mentorship and Assessment Platform for NMAMIT, NITTE.</p>
                        </div>
                        <div className='bg-[#2e1a24] p-6 rounded-lg shadow-lg'>
                            <h2 className='text-2xl font-semibold text-white mb-4'>ConverTo</h2>
                            <p className='text-gray-300'>Mobile app for converting between various measurements units.</p>
                        </div>
                    </div>
                </div>
                <div id='SKILLS' className='w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center'>
                    <div className='text-white mb-8'>
                        <h1 className='text-4xl font-bold'>Skills</h1>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className='skill-card bg-[#2e1a24] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:translate-y-[-5px]'>
                                <FontAwesomeIcon icon={skill.icon} className='text-2xl text-white mb-2' />
                                <span className='text-gray-300'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contents;
