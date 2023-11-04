import React, { useState } from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSketch } from '@fortawesome/free-brands-svg-icons';

function Contents() {

    const [experience, setExperience] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [about, setAbout] = useState(false);
    const [education, setEducation] = useState(false);

    function changeExperience() {
        setEducation(false)
        setExperience(!experience)
        setSkills(false)
        setProjects(false)
        setAbout(false)
    }
    function changeEducation() {
        setEducation(!education)
        setExperience(false)
        setSkills(false)
        setProjects(false)
        setAbout(false)
    }
    function changeSkills() {
        setEducation(false)
        setExperience(false)
        setSkills(!skills)
        setProjects(false)
        setAbout(false)
    }
    function changeProject() {
        setEducation(false)
        setExperience(false)
        setSkills(false)
        setProjects(!projects)
        setAbout(false)
    }
    function changeContact() {
        setEducation(false)
        setExperience(false)
        setSkills(false)
        setProjects(false)
        setAbout(false)
    }
    function changeAbout() {
        setEducation(false)
        setExperience(false)
        setSkills(false)
        setProjects(false)
        setAbout(!about)
    }

    return (
        <div className="bg-[#1f0812] bg-coverd h-screen flex flex-col justify-center items-center">

            {/* About Me */}
            <div className="relative px-8 py-4 w-full flex flex-col gap-4 text-white">
                <div className='flex flex-col bg-gray-300 rounded-xl text-gray-800'>
                    <div onClick={changeAbout} className="flex items-center justify-between text-2xl font-bold p-4">
                        <p>About Me</p>
                        <FontAwesomeIcon icon={faChevronRight} className={`${about ? 'rotate-90' : 'rotate-0'} duration-500`} />
                    </div>
                    <div className={`${about ? 'p-4 w-full h-[20rem] rounded-b-xl overflow-y-auto' : 'px-4 w-full h-[0rem] text-transparent overflow-hidden'} bg-gray-200 flex flex-col gap-4 duration-500`}>
                        <p className="text-xl font-bold">
                            Secured first place in National level coding competition (09/2022)
                        </p>
                        <p className='text-lg'>
                            Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                            Engineering College, Mangalore, Karnataka, India.
                        </p>
                    </div>
                </div>
            </div>
            {/* Experience */}
            <div className="px-8 py-4 w-full flex flex-col gap-4 text-white">
                <div className='flex flex-col bg-gray-300 rounded-xl text-gray-800'>
                    <div onClick={changeExperience} className="flex items-center justify-between text-2xl font-bold p-4">
                        <p>Experience</p>
                        <FontAwesomeIcon icon={faChevronRight} className={`${experience ? 'rotate-90' : 'rotate-0'} duration-500`} />
                    </div>
                    <div className={`${experience ? 'p-4 w-full h-[20rem] rounded-b-xl overflow-y-auto' : 'px-4 w-full h-[0rem] text-transparent overflow-hidden'} bg-gray-200 flex flex-col gap-4 duration-500`}>
                        <p className="text-xl font-bold leading-[1.75rem]">Coordinated Coding Competetion</p>
                        <div>
                            <p className="text-lg">
                                <span className='font-bold'>Organization:</span><br />St. Aloysius College (Autonomous)
                            </p>
                            <p className="text-lg">
                                <span className='font-bold'>Duration:</span><br />March 2022 - April 2022
                            </p>
                            <p className="text-lg">
                                <span className='font-bold'>Location:</span><br />Mangaluru, Karnataka, India
                            </p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className="text-xl font-bold">
                                Responsibilities:
                            </p>
                            <p className='text-lg'>
                                Led the planning and execution of a successful coding competition.
                                Developed competition themes and created challenging coding problems.
                                Promoted the event and secured sponsorship.
                                Managed logistics and coordination for a seamless competition.
                                Collaborated with a judging panel for fair evaluation.
                                The competition received positive feedback and attracted a significant number of participants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className="px-8 py-4 w-full flex flex-col gap-4 text-white">
                <div className='flex flex-col bg-gray-300 rounded-xl text-gray-800'>
                    <div onClick={changeProject} className="flex items-center justify-between text-2xl font-bold p-4">
                        <p>Project</p>
                        <FontAwesomeIcon icon={faChevronRight} className={`${projects ? 'rotate-90' : 'rotate-0'} duration-500`} />
                    </div>

                    <div className={`${projects ? 'p-2 w-full h-[20rem] rounded-b-xl overflow-y-auto' : 'px-4 w-full h-[0rem] text-transparent overflow-hidden'} bg-gray-200 flex flex-col gap-4 duration-500`}>
                        <div className='border-[1px] border-black rounded-lg p-4 flex flex-col gap-3'>
                            <p className="text-xl font-bold leading-[1.75rem]">EATABLES<br />Location-Based Food Discovery Platform</p>
                            <p className="text-lg font-bold">
                                <a href="https://www.google.com">Know more -</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="px-8 py-4 w-full flex flex-col gap-4 text-white">
                <div className='flex flex-col bg-gray-300 rounded-xl text-gray-800'>
                    <div onClick={changeSkills} className="flex items-center justify-between text-2xl font-bold p-4">
                        <p>Skills</p>
                        <FontAwesomeIcon icon={faChevronRight} className={`${skills ? 'rotate-90' : 'rotate-0'} duration-500`} />
                    </div>
                    <div className={`${skills ? 'p-4 w-full h-[20rem] rounded-b-xl overflow-y-auto' : 'px-4 w-full h-[0rem] text-transparent overflow-hidden'} bg-gray-200 flex flex-col gap-4 duration-500`}>
                        <p className="text-xl font-bold">
                            Secured first place in National level coding competition (09/2022)
                        </p>
                        <p className='text-lg'>
                            Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                            Engineering College, Mangalore, Karnataka, India.
                        </p>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className="px-8 py-4 w-full flex flex-col gap-4 text-white">
                <div className='flex flex-col bg-gray-300 rounded-xl text-gray-800'>
                    <div onClick={changeEducation} className="flex items-center justify-between text-2xl font-bold p-4">
                        <p>Education and Certifications</p>
                        <FontAwesomeIcon icon={faChevronRight} className={`${education ? 'rotate-90' : 'rotate-0'} duration-500`} />
                    </div>
                    <div className={`${education ? 'p-4 w-full h-[20rem] rounded-b-xl overflow-y-auto' : 'px-4 w-full h-[0rem] text-transparent overflow-hidden'} bg-gray-200 flex flex-col gap-4 duration-500`}>
                        <p className="text-xl font-bold">
                            Secured first place in National level coding competition (09/2022)
                        </p>
                        <p className='text-lg'>
                            Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                            Engineering College, Mangalore, Karnataka, India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents