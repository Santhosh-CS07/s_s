"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaUserTie, FaLinkedin, FaTwitter, FaFacebook, FaReddit, FaGithub, FaConnectdevelop, FaCommentDots, FaPhoneAlt } from 'react-icons/fa';

// Sample data
const experts = [
    {
        id: 1,
        name: 'John Doe',
        profession: 'Software Engineer',
        location: 'New York, USA',
        rating: 4.5,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '5 years at Tech Corp',
        interests: 'AI, Machine Learning, Open Source',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 2,
        name: 'Jane Smith',
        profession: 'Data Scientist',
        location: 'San Francisco, USA',
        rating: 4.8,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '3 years at Data Inc',
        interests: 'Big Data, Data Analysis',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 3,
        name: 'Samuel Green',
        profession: 'Product Manager',
        location: 'Austin, USA',
        rating: 4.2,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '4 years at Product Co',
        interests: 'Product Design, Agile Methodologies',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 4,
        name: 'Emily Brown',
        profession: 'UX/UI Designer',
        location: 'Los Angeles, USA',
        rating: 4.6,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '6 years at Design Solutions',
        interests: 'User Experience, Visual Design',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 5,
        name: 'Michael Johnson',
        profession: 'Marketing Analyst',
        location: 'Chicago, USA',
        rating: 4.0,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '7 years at Marketing Insights',
        interests: 'Market Research, Campaign Optimization',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 6,
        name: 'Sophia Lee',
        profession: 'Graphic Designer',
        location: 'Seattle, USA',
        rating: 4.3,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '4 years at Visual Art Studios',
        interests: 'Digital Illustration, Branding',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 7,
        name: 'Daniel Miller',
        profession: 'Financial Analyst',
        location: 'Houston, USA',
        rating: 4.7,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '5 years at Finance Experts',
        interests: 'Financial Modeling, Investment Analysis',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 8,
        name: 'Olivia Wilson',
        profession: 'HR Manager',
        location: 'Miami, USA',
        rating: 4.4,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '6 years at HR Solutions',
        interests: 'Employee Relations, Recruitment Strategies',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 9,
        name: 'Ethan Taylor',
        profession: 'Architect',
        location: 'Denver, USA',
        rating: 4.9,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '8 years at Architecture Design Firm',
        interests: 'Building Design, Sustainability',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    },
    {
        id: 10,
        name: 'Isabella Clark',
        profession: 'Event Planner',
        location: 'Orlando, USA',
        rating: 4.1,
        socialMedia: { linkedin: '#', twitter: '#', facebook: '#', reddit: '#', github: '#' },
        experience: '3 years at Events Management Co',
        interests: 'Event Coordination, Venue Management',
        papers: ['Paper 1', 'Paper 2'],
        projects: ['Project A', 'Project B']
    }
];


const ExpertsList = () => {
    const [selectedExpert, setSelectedExpert] = useState(null) as any;
    const [searchTerm, setSearchTerm] = useState('');
    const detailViewRef: any = useRef(null);

    const filteredExperts = experts.filter(expert =>
        expert.profession.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (selectedExpert && window.innerWidth < 768 && detailViewRef.current) {
            detailViewRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedExpert]);

    return (
        <div className="flex flex-wrap p-1">
            <div className={`w-full md:w-1/3 p-4 overflow-auto ${selectedExpert ? 'order-2 md:order-1' : ''}`} style={{ maxHeight: '80vh' }}>
                <input
                    type="text"
                    placeholder="Search experts..."
                    className="w-full p-2 mb-4 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 gap-4">
                    {filteredExperts.map((expert: any) => (
                        <div
                            key={expert.id}
                            className="p-4 bg-white border rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => setSelectedExpert(expert)}
                        >
                            <h3 className="text-lg font-semibold">{expert.name}</h3>
                            <p className="text-gray-600">{expert.profession}</p>
                            <p className="text-gray-600">{expert.location}</p>
                            <p className="text-yellow-500">Rating: {expert.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div ref={detailViewRef} className={`w-full md:w-2/3 p-4 flex justify-center ${selectedExpert ? 'order-1 md:order-2' : ''}`}>
                {selectedExpert ? (
                    <div className="p-6 bg-white border rounded-lg shadow w-full text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-2">{selectedExpert.name}</h2>
                        <p className="text-gray-600 mb-2">{selectedExpert.profession}</p>
                        <p className="text-gray-600 mb-2">{selectedExpert.location}</p>
                        <p className="text-yellow-500 mb-4">Rating: {selectedExpert.rating}</p>
                        <div className="mb-4 flex justify-center md:justify-start">
                            <a href={selectedExpert.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-blue-600">
                                <FaLinkedin size={24} />
                            </a>
                            <a href={selectedExpert.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href={selectedExpert.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-blue-800">
                                <FaFacebook size={24} />
                            </a>
                            <a href={selectedExpert.socialMedia.reddit} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-orange-500">
                                <FaReddit size={24} />
                            </a>
                            <a href={selectedExpert.socialMedia.github} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-black">
                                <FaGithub size={24} />
                            </a>
                        </div>
                        <p className="text-gray-800 mb-2"><strong>Experience:</strong> {selectedExpert.experience}</p>
                        <p className="text-gray-800 mb-2"><strong>Interests:</strong> {selectedExpert.interests}</p>
                        <p className="text-gray-800 mb-2"><strong>Papers Published:</strong> {selectedExpert.papers.join(', ')}</p>
                        <p className="text-gray-800 mb-4"><strong>Projects Worked On:</strong> {selectedExpert.projects.join(', ')}</p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start mt-4 space-y-2 md:space-y-0 md:space-x-2">
                            <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                                <FaConnectdevelop className="mr-2" /> Connect Live
                            </button>
                            <button className="flex items-center px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
                                <FaCommentDots className="mr-2" /> Direct Chat
                            </button>
                            <button className="flex items-center px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition">
                                <FaPhoneAlt className="mr-2" /> Audio Call
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center w-full">
                        <FaUserTie className="text-gray-500 text-6xl animate-bounce" />
                        <p className="italic text-gray-500 m-4">Select an expert to see detailed information</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpertsList;
