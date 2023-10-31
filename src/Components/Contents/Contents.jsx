import React from 'react'

function Contents() {
    return (
        <div className="bg-[#1f0812] p-4 flex flex-col justify-center items-center gap-4">
            {/* Experience */}
            <div className="p-8 bg-gray-200 border-2 rounded-xl">
                <p className="text-3xl font-bold">Experience</p>
                <div className='p-4 flex flex-col gap-4 text-gray-800'>
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

            {/* Projects and Work Samples Section */}
            <div className="p-8 bg-gray-200 border-2 rounded-xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects and Work Samples</h2>
                {/* Include your project samples and descriptions here */}
            </div>

            {/* Skills and Expertise Section */}
            <div className="p-8 bg-gray-200 border-2 rounded-xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills and Expertise</h2>
                {/* List your skills and expertise here */}
            </div>

            {/* Contact Information Section */}
            <div className="p-8 bg-gray-200 border-2 rounded-xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                {/* Include your contact information here */}
            </div>

            {/* About Me/Personal Statement Section */}
            <div className="p-8 bg-gray-200 border-2 rounded-xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me/Personal Statement</h2>
                {/* Write your personal statement here */}
            </div>

            {/* Education and Certifications Section */}
            <div className="p-8 bg-gray-200 border-2 rounded-xl">
                <h2 className="text-3xl font-semibold text-gray-800">Education and Certifications</h2>
                Secured first place in National level coding competition (09/2022)
                Secured first place in Coding Event in the National level IT Fest "Joshiana 11.0" organized by St Joseph
                Engineering College, Mangalore, Karnataka, India.
            </div>
        </div>
    )
}

export default Contents