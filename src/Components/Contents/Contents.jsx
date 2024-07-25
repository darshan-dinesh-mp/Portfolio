import React from 'react';
import './Contents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faGithub, faHtml5, faJava, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contents() {
    const skills = [
        { icon: faJava, name: 'Java' },
        { icon: faC, name: '' },
        { icon: faHtml5, name: 'HTML5' },
        { icon: faCss3, name: 'CSS3' },
        { icon: faReact, name: 'React' },
        { icon: faPhp, name: 'PHP' },
        { icon: faLaravel, name: 'Laravel' },
        { icon: faGitAlt, name: 'Git' },
        { icon: faGithub, name: 'GitHub' },
    ];

    const projects = [
        {
            title: 'Eatables',
            description: 'Food Discovery and Review Platform.',
            videoSrc: 'https://drive.google.com/file/d/11cP1VRfHH5BBcVmq9OP2j8NZ8L6JQHvT/preview',
        },
        {
            title: 'SMAPP',
            description: 'Student Mentorship and Assessment Platform for NMAMIT, NITTE.',
            videoSrc: 'https://drive.google.com/file/d/1Uc1b8Y1o2O6uCTQ1HfgBXxrdlPQn7IY-/preview',
        },
        {
            title: 'ConverTo',
            description: 'Mobile app for converting between various measurements units.',
            videoSrc: 'https://drive.google.com/file/d/1S2QUm7gj_g-Nv14QYanpT8rPNYnZeaNV/preview',
        }
    ];

    const contactLinks = [
        {
            icon: faLinkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/darshan-dinesh-mp',
        },
        {
            icon: faGithub,
            name: 'GitHub',
            url: 'https://github.com/darshan-dinesh-mp',
        },
        {
            icon: faEnvelope,
            name: 'Email',
            url: 'mailto:darshandineshmp@gmail.com',
        }
    ];

    return (
        <div className='flex flex-col items-center justify-center gap-10 bg-gradient-to-t from-black to-[#1f0812] p-10'>

            <div id='PROJECTS' className='w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center'>
                <div className='text-white mb-8 grid grid-cols-3 items-center justify-between w-full p-4'>
                    <div></div>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold'>Projects</h1>
                    </div>
                    <div className='flex justify-end'>
                        {/* Arrow icon for mobile and link for larger screens */}
                        <a
                            href='https://github.com/darshan-dinesh-mp?tab=repositories'
                            className='hidden md:block text-2xl hover:translate-x-1 duration-500'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Show more
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} title='See more project' className='ml-2  hover:rotate-12 duration-500' />
                        </a>
                        <a
                            href='https://github.com/darshan-dinesh-mp?tab=repositories'
                            className='block md:hidden text-2xl'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='See more project'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} title='See more project' />
                        </a>
                    </div>
                </div>
                {projects.map((project, index) => (
                    <div key={index} className='project-display'>
                        <div className='project-info'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className='project-video'>
                            <iframe
                                src={project.videoSrc}
                                width="100%"
                                height="100%"
                                allow="autoplay">
                            </iframe>
                        </div>
                    </div>
                ))}
            </div>


            <div id='SKILLS' className='w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center'>
                <div className='text-white mb-8'>
                    <h1 className='text-4xl font-bold'>Skills</h1>
                </div>
                <div className='w-full grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className='skill-card bg-[#2e1a24] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:translate-y-[-5px]'>
                            <FontAwesomeIcon icon={skill.icon} className='text-3xl text-white mb-2' />
                            <span className='text-gray-300'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div id='CONTACT' className='w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center'>
                <div className='text-white mb-8'>
                    <h1 className='text-4xl font-bold'>Contact</h1>
                </div>
                <div className='w-full grid grid-cols-3 gap-8'>
                    {contactLinks.map((contact) => (
                        <a
                            key={contact.name}
                            href={contact.url}
                            className='contact-card bg-[#2e1a24] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:translate-y-[-5px]'>
                            <FontAwesomeIcon icon={contact.icon} className='text-3xl text-white mb-2' />
                            <span className='text-gray-300'>{contact.name}</span>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Contents;
