import React from 'react'
import { ArrowRightOnRectangleIcon, NewspaperIcon, InformationCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { FaRegSmile } from 'react-icons/fa'; // Import the smile icon from react-icons
import Image from 'next/image';
const Homenavbar = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-mono">Ekathrass</h2>
            <div className="flex space-x-6">
                <a href="/people" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span>People</span>
                    <UserPlusIcon className="h-6 w-6" />
                </a>
                <a href="/articles" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span>Articles</span>
                    <NewspaperIcon className="h-6 w-6" />
                </a>
                <a href="/happy-stories" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span>Happy Stories</span>
                    <FaRegSmile className="h-6 w-6" />
                </a>
                <a href="/about" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span>About</span>
                    <InformationCircleIcon className="h-6 w-6" />
                </a>
            </div>
        </div>
    )
}

export default Homenavbar