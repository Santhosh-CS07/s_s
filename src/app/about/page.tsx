import React from 'react';
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <section className="bg-white py-11 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl mb-8">
                        We are a specialized team with a global vision and youthful energy,
                        targeting to help solve every individuals problems. Our mission is
                        to provide personalized solutions that cater to your unique needs.
                    </p>
                    <div className="bg-blue-900 text-white rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-lg">
                            We are here to help! Reach out to us at -
                            <a href="mailto:contact@ekathrass.com" className="font-bold underline ml-1">
                                contact@ekathrass.com
                            </a>
                        </p>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg">
                            With our innovative approach and global outlook, we strive to empower individuals by addressing their unique challenges and fostering a supportive environment.
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://www.youtube.com/@ekathrasslearning" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                            <FaYoutube size={30} />
                        </a>
                        {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaTwitter size={30} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram size={30} />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
