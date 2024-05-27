import { ArrowRightOnRectangleIcon, InformationCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { FaRegSmile } from 'react-icons/fa'; // Import the smile icon from react-icons
import Image from 'next/image';
//import handHoldingImage from '../public/images/guillaume-de-germain-fgmLRBlUIpc-unsplash.jpg'; // Ensure you have an appropriate image in the public folder
import { FiMessageSquare, FiPhoneCall, FiVideo } from 'react-icons/fi'; // Import chat, phone call, and video call icons
import Homenavbar from '../HomeNavBar/Homenavbar';
import Login from '../Login/Login';
import Authentication from '../Authentication/Authentication';

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="container mx-auto px-6 py-6">
                <Homenavbar />
                <div className="flex flex-col md:flex-row ">
                    <div className="flex justify-items-center pt-12 sm:pt-24 md:w-1/2 text-left">
                        <div className=''>
                            <h1 className="text-4xl md:text-4xl font-bold text-white mb-6">
                                Join Ekathra <strong className='line-through'>COMMUNITY</strong> for Real-Time Help at Your Fingertips.</h1>
                            <p className="text-lg md:text-xl text-white mb-8 overflow-wrap">
                                Ekathra - Where Every Question Gets the Answer It Deserves.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                                    <FiMessageSquare className="h-10 w-10 text-white rounded-lg p-1" />
                                    <span className="text-white">Live Chat</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                                    <FiPhoneCall className="h-10 w-10 text-white rounded-lg p-1" />
                                    <span className="text-white">Internet Call</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                                    <FiVideo className="h-10 w-10 text-white rounded-lg p-1" />
                                    <span className="text-white">Video Call</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                                    <InformationCircleIcon className="h-10 w-10 text-white rounded-lg p-1" />
                                    <span className="text-white">Fully Secured</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-12">
                        <Authentication />
                    </div>
                </div>
            </div>
        </div>
    );
}
