// components/HappyStories.js
import React from 'react';

const HappyStories = () => {
    const stories = [
        {
            name: 'Santhosh M',
            feedback: 'Ekathra provided me with real-time solutions just when I needed them the most. Truly a lifesaver!',
        },
        {
            name: 'Ganesh Naik',
            feedback: 'I was amazed at how quickly I got the help I needed. Ekathra is the best!',
        },
        {
            name: 'Laxman Naik',
            feedback: 'Real-time solutions and amazing support from Ekathra. Couldn’t be happier!',
        },
        {
            name: 'Manjusha',
            feedback: 'Ekathra’s timely solutions helped me resolve my issues instantly. Highly recommend!',
        },
        {
            name: 'Shiva',
            feedback: 'Getting real-time answers from Ekathra made my day. Thank you for the excellent service!',
        },
        {
            name: 'Saurabh Yadav',
            feedback: 'I love how Ekathra provides instant solutions. It’s a game-changer for sure!',
        },
    ];

    return (
        <div className="bg-white py-11">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="mt-4">{story.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HappyStories;
