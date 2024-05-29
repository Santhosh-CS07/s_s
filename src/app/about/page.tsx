import React from 'react';

const About = () => {
    return (
        <section className="bg-white py-11 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                        About Us
                    </h2>
                    <p className="text-xl mb-8">
                        We are a specialized team with a global vision and youthful energy,
                        targeting to help solve every individuals problems. Our mission is
                        to provide personalized solutions that cater to your unique needs.
                    </p>
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-lg">
                            We are here to help! Reach out to us at
                            <a href="mailto:contact@ekathrass.com" className="text-blue-900 font-semibold underline ml-1">
                                contact@ekathrass.com
                            </a>
                        </p>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg">
                            With our innovative approach and global outlook, we strive to empower individuals by addressing their unique challenges and fostering a supportive environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
