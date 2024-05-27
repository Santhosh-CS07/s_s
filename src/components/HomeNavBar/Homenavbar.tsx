import React from 'react'
import { ArrowRightOnRectangleIcon, NewspaperIcon, InformationCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { FaRegSmile } from 'react-icons/fa'; // Import the smile icon from react-icons
import Image from 'next/image';
const Homenavbar = () => {
    return (
        <div className=" justify-between items-center sm:flex">
            <h2 className="font-serif text-7xl md:text-5xl text-white font-extrabold sm:text-4xl">Ekathra</h2>
            <div className="flex space-x-6 sm:mt-0">
                <a href="/people" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span className='hidden sm:inline'>People</span>
                    <UserPlusIcon className="h-16 w-16 hidden sm:inline sm:h-6 sm:w-6" />
                </a>
                <a href="/articles" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span className='hidden sm:inline'>Articles</span>
                    <NewspaperIcon className=" hidden sm:inline h-16 w-16 sm:h-6 sm:w-6" />
                </a>
                <a href="/happy-stories" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span className='hidden sm:inline'>Happy Stories</span>
                    <FaRegSmile className=" hidden sm:inline h-16 w-16 sm:h-6 sm:w-6" />
                </a>
                <a href="/about" className="text-white hover:text-gray-200 flex items-center space-x-2">
                    <span className='hidden sm:inline'>About</span>
                    <InformationCircleIcon className="hidden sm:inline h-16 w-16 sm:h-6 sm:w-6" />
                </a>
            </div>
        </div>
    )
}

export default Homenavbar