import React, { useState } from 'react'

function Contents() {

    const [experience, setExperience] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);
    const [about, setAbout] = useState(false);
    const [education, setEducation] = useState(false);

    function changeExperience(){
        setEducation(false)
        setExperience(true)
        setSkills(false)
        setProjects(false)
        setContact(false)
        setAbout(false)
    }
    function changeEducation(){
        setEducation(true)
        setExperience(false)
        setSkills(false)
        setProjects(false)
        setContact(false)
        setAbout(false)
    }
    function changeSkills(){
        setEducation(false)
        setExperience(false)
        setSkills(true)
        setProjects(false)
        setContact(false)
        setAbout(false)
    }
    function changeProject(){
        setEducation(false)
        setExperience(false)
        setSkills(false)
        setProjects(true)
        setContact(false)
        setAbout(false)
    }
    function changeContact(){
        setEducation(false)
        setExperience(false)
        setSkills(false)
        setProjects(false)
        setContact(true)
        setAbout(false)
    }
    function changeAbout(){
        setEducation(false)
        setExperience(false)
        setSkills(false)
        setProjects(false)
        setContact(false)
        setAbout(true)
    }

    return (
        <div className="bg-[#1f0812] flex flex-col justify-center items-center">

            {/* Experience */}
            <div className="p-8 w-full flex flex-col gap-4 text-white">
                <p className="text-3xl font-bold">Experience</p>
                <div className="p-4 flex flex-col gap-4 bg-gray-200 rounded-xl text-gray-800">
                    <p className="text-2xl font-bold leading-[1.75rem]">Coordinated Coding Competetion</p>
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

            {/* Projects */}
            <div className="p-8 w-full flex flex-col gap-4 text-white">
                <p className="text-3xl font-bold">Projects</p>
                <div className='p-4 flex flex-col gap-4 bg-gray-200 rounded-xl text-gray-800'>
                    <p className="text-xl font-bold">
                        Secured first place in National level coding competition (09/2022)
                    </p>
                    <p className='text-lg'>
                        Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                        Engineering College, Mangalore, Karnataka, India.
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className="p-8 w-full flex flex-col gap-4 text-white">
                <p className="text-3xl font-bold">Skills</p>
                <div className='p-4 flex flex-col gap-4 bg-gray-200 rounded-xl text-gray-800'>
                    <p className="text-xl font-bold">
                        Secured first place in National level coding competition (09/2022)
                    </p>
                    <p className='text-lg'>
                        Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                        Engineering College, Mangalore, Karnataka, India.
                    </p>
                </div>
            </div>

            {/* Contact  */}
            <div className="p-8 w-full flex flex-col gap-4 text-white">
                <p className="text-3xl font-bold">Contact</p>
                <div className='p-4 flex flex-col gap-4 bg-gray-200 rounded-xl text-gray-800'>
                    <p className="text-xl font-bold">
                        Secured first place in National level coding competition (09/2022)
                    </p>
                    <p className='text-lg'>
                        Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                        Engineering College, Mangalore, Karnataka, India.
                    </p>
                </div>
            </div>

            {/* About Me */}
            <div className="p-8 w-full flex flex-col gap-4 text-white">
                <div onClick={changeAbout} className='p-4 flex flex-col gap-4 bg-gray-200 rounded-xl text-gray-800'>
                    <p className="text-3xl font-bold">About Me</p>
                    <div className={`${about ? 'block' : 'hidden'} flex flex-col gap-4 `}>
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
            <div className="p-8 w-full flex flex-col gap-4 text-white">
                <div onClick={changeEducation} className='p-4 flex flex-col gap-4 bg-gray-200 rounded-xl text-gray-800'>
                    <p className="text-3xl font-bold">Education and Certifications</p>
                    <div className={`${education ? 'block' : 'hidden'} flex flex-col gap-4 `}>
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