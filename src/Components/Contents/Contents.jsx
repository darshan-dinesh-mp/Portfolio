import React, { useEffect, useState } from 'react';
import './Contents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faGithub, faHtml5, faJava, faLaravel, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faEnvelope, faArrowUpRightFromSquare, faArrowRightLong, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

function Contents() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState('');

    const openModal = (videoSrc) => {
        setCurrentVideoSrc(videoSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideoSrc('');
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isModalOpen]);

    // Create separate refs for Projects, Skills, Contact
    const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contactFormRef, inView: contactFormInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const skills = [
        { icon: faC, name: 'C' },
        { icon: faJava, name: 'Java' },
        { icon: faPython, name: 'Python' },
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
            title: 'Money Flow',
            description: 'Finance Tracking web app using react, node js, and firebase.',
            videoSrc: '/projects/MoneyFlow_SR.mp4',
            githubLink: 'https://github.com/darshan-dinesh-mp/money-flow-web-app',
        },
        {
            title: 'SMAP',
            description: 'Student Mentorship and Assessment Platform for NMAMIT, NITTE.',
            videoSrc: '/projects/smap_SR.mp4',
            githubLink: 'https://github.com/darshan-dinesh-mp/student-connect.git',
        },
        {
            title: 'Eatables',
            description: 'Food Discovery and Review Platform.',
            videoSrc: '/projects/eatables_SR.mp4',
            githubLink: 'https://github.com/darshan-dinesh-mp/eatables.git',
        },
        {
            title: 'ConverTo',
            description: 'Mobile app for converting between various measurements units.',
            videoSrc: '/projects/ConverTo_SR.mp4',
            githubLink: 'https://github.com/darshan-dinesh-mp/converto-app.git',
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTab = window.open('', '_blank');
        const form = newTab.document.createElement('form');
        form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSeVhNEtjlUp2-co2nCmM1_7RazxCMJNAux1YX23OVQmrekjXA/formResponse';
        form.method = 'POST';

        const nameInput = newTab.document.createElement('input');
        nameInput.type = 'hidden';
        nameInput.name = 'entry.1546317662';
        nameInput.value = name;

        const emailInput = newTab.document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'entry.874628732';
        emailInput.value = email;

        const messageInput = newTab.document.createElement('input');
        messageInput.type = 'hidden';
        messageInput.name = 'entry.1693678078';
        messageInput.value = message;

        form.appendChild(nameInput);
        form.appendChild(emailInput);
        form.appendChild(messageInput);

        newTab.document.body.appendChild(form);
        form.submit();

        setTimeout(() => {
            window.location.href = 'https://darshandineshmp.vercel.app';
        }, 2000);
    };

    return (
        <div className={`flex flex-col items-center justify-center gap-10 bg-black p-5 md:p-10`}>
            {/* Projects Section */}
            <div ref={projectsRef} id='PROJECTS' className={`slide-in-left ${projectsInView ? 'visible' : ''} w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center`}>
                <div className='text-white mb-8 grid grid-cols-3 items-center justify-between w-full p-4'>
                    <div></div>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold'>Projects</h1>
                    </div>
                    <div className='flex justify-end'>
                        <a href='https://github.com/darshan-dinesh-mp?tab=repositories' className='hidden md:block text-2xl hover:translate-x-1 duration-500' target='_blank' rel='noopener noreferrer' title='See more project'>
                            Show more
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} title='See more project' className='ml-2 hover:rotate-12 duration-500' />
                        </a>
                        <a href='https://github.com/darshan-dinesh-mp?tab=repositories' className='block md:hidden text-2xl' target='_blank' rel='noopener noreferrer' title='See more project'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} title='See more project' className='hover:rotate-12 duration-500' />
                        </a>
                    </div>
                </div>
                {projects.map((project, index) => (
                    <div key={index} className={`slide-in-left ${projectsInView ? 'visible' : ''} project-display`}>
                        <div className='project-info'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.githubLink} className='text-white flex items-center justify-center gap-2 font-bold mt-5 duration-300 hover:translate-x-1' target='_blank'>
                                GitHub
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </a>
                        </div>
                        <div className='project-video'>
                            <video
                                src={project.videoSrc}
                                width="100%"
                                height="100%"
                                autoPlay
                                loop
                                muted
                                playsInline
                                onClick={() => openModal(project.videoSrc)}
                            ></video>
                        </div>
                    </div>
                ))}

            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <video src={currentVideoSrc} controls autoPlay loop muted></video>
                    </div>
                </div>
            )}

            {/* Skills Section */}
            <div ref={skillsRef} id='SKILLS' className={`slide-in-left ${skillsInView ? 'visible' : ''} w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center`}>
                <div className='text-white mb-8'>
                    <h1 className='text-4xl font-bold'>Skills</h1>
                </div>
                <div className='w-full grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {skills.map((skill) => (
                        <div key={skill.name} className='skill-card bg-[#2e1a24] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:translate-y-[-5px]'>
                            <FontAwesomeIcon icon={skill.icon} className='text-2xl md:text-3xl text-white mb-2' />
                            <span className='text-gray-300 text-sm md:text-base'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div ref={contactRef} id='CONTACT' className={`slide-in-left ${contactInView ? 'visible' : ''} w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center`}>
                <div className='text-white mb-8'>
                    <h1 className='text-4xl font-bold'>Contact</h1>
                </div>
                <div className='w-full grid grid-cols-3 gap-4'>
                    {contactLinks.map((contact) => (
                        <a
                            key={contact.name}
                            href={contact.url}
                            className='contact-card bg-[#2e1a24] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:translate-y-[-5px]'>
                            <FontAwesomeIcon icon={contact.icon} className='text-2xl md:text-3xl text-white mb-2' />
                            <span className='text-gray-300 text-sm md:text-base'>{contact.name}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div ref={contactFormRef} className={`slide-in-left ${contactFormInView ? 'visible' : ''} contact-form text-gray-400 py-6 mt-10`}>
                <h2>Write to me</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="entry.1546317662"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="entry.874628732"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Message:
                            <textarea
                                name="entry.1693678078"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <footer className='w-full bg-[#11050a] text-gray-400 py-6 mt-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-center md:text-sm text-xs'>&copy; {new Date().getFullYear()} Darshan Dinesh M P. All rights reserved.</p>
                    <p className='text-center md:text-sm text-xs mt-2 flex flex-col md:flex-row items-center justify-center'>
                        Contact me:
                        <a href='mailto:darshandineshmp@gmail.com' className='ml-2 hover:scale-105 transition-transform duration-300'>darshandineshmp@gmail.com</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Contents;
