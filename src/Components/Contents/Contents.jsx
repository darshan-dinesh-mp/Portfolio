import React from 'react'

function Contents() {
    return (
        <div>
            {/* Experience */}
            <div className="p-8">
                <p className="text-3xl font-bold text-gray-800">Experience</p>
                <div className='p-4 flex flex-col gap-4'>
                    <p className="text-lg font-semibold leading-[1.5rem] ">Coordinated Coding Competetion</p>
                    <div>
                        <p className="font-semibold leading-5">
                            Organization: St. Aloysius College (Autonomous)
                        </p>
                        <p className="font-semibold leading-5">
                            Duration: March 2022 - April 2022
                        </p>
                        <p className="font-semibold leading-5">
                            Location: Mangaluru, Karnataka, India
                        </p>
                        <p className="font-semibold leading-5">
                            Responsibilities:
                        </p>
                    </div>
                    <div>
                        Led the planning and execution of a successful coding competition.
                        Developed competition themes and created challenging coding problems.
                        Promoted the event and secured sponsorship.
                        Managed logistics and coordination for a seamless competition.
                        Collaborated with a judging panel for fair evaluation.
                        The competition received positive feedback and attracted a significant number of participants.
                    </div>
                </div>
            </div>

            {/* Projects and Work Samples Section */}
            <section id="projects" className="py-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects and Work Samples</h2>
                    {/* Include your project samples and descriptions here */}
                </div>
            </section>

            {/* Skills and Expertise Section */}
            <section id="skills" className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills and Expertise</h2>
                    {/* List your skills and expertise here */}
                </div>
            </section>

            {/* Contact Information Section */}
            <section id="contact" className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                    {/* Include your contact information here */}
                </div>
            </section>

            {/* About Me/Personal Statement Section */}
            <section id="about" className="py-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me/Personal Statement</h2>
                    {/* Write your personal statement here */}
                </div>
            </section>

            {/* Blog or Writing Samples Section */}
            <section id="blog" className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Blog or Writing Samples</h2>
                    {/* Include your blog posts or writing samples here */}
                </div>
            </section>

            {/* Education and Certifications Section */}
            <section id="education" className="py-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Education and Certifications</h2>
                    {/* List your educational background and certifications here */}
                </div>
            </section>
        </div>
    )
}

export default Contents