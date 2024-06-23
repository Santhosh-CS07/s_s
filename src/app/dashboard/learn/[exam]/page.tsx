// components/DetailsPage.tsx
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/DashboardNavbar/Navbar';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'; // Import icons for checkboxes

interface Topic {
    id: number;
    name: string;
    summary: string;
    latestNews: string;
    mcqs: string[];
}

interface Chapter {
    id: number;
    name: string;
    topics: Topic[];
}

const DetailsPage: React.FC<any> = (props) => {
    const [selectedTopic, setSelectedTopic] = useState<number | null>(null); // State to store selected topic ID
    const [expandedChapters, setExpandedChapters] = useState<number[]>([]); // State to store expanded chapters

    const data: Chapter[] = [
        {
            id: 1,
            name: 'Chapter 1',
            topics: [
                { id: 11, name: 'Topic 1.1', summary: 'Summary for Topic 1.1', latestNews: 'Latest news for Topic 1.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 12, name: 'Topic 1.2', summary: 'Summary for Topic 1.2', latestNews: 'Latest news for Topic 1.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 2,
            name: 'Chapter 2',
            topics: [
                { id: 21, name: 'Topic 2.1', summary: 'Summary for Topic 2.1', latestNews: 'Latest news for Topic 2.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 22, name: 'Topic 2.2', summary: 'Summary for Topic 2.2', latestNews: 'Latest news for Topic 2.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 3,
            name: 'Chapter 3',
            topics: [
                { id: 31, name: 'Topic 3.1', summary: 'Summary for Topic 3.1', latestNews: 'Latest news for Topic 3.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 32, name: 'Topic 3.2', summary: 'Summary for Topic 3.2', latestNews: 'Latest news for Topic 3.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 4,
            name: 'Chapter 4',
            topics: [
                { id: 41, name: 'Topic 4.1', summary: 'Summary for Topic 4.1', latestNews: 'Latest news for Topic 4.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 42, name: 'Topic 4.2', summary: 'Summary for Topic 4.2', latestNews: 'Latest news for Topic 4.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 5,
            name: 'Chapter 5',
            topics: [
                { id: 51, name: 'Topic 5.1', summary: 'Summary for Topic 5.1', latestNews: 'Latest news for Topic 5.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 52, name: 'Topic 5.2', summary: 'Summary for Topic 5.2', latestNews: 'Latest news for Topic 5.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 6,
            name: 'Chapter 6',
            topics: [
                { id: 61, name: 'Topic 6.1', summary: 'Summary for Topic 6.1', latestNews: 'Latest news for Topic 6.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 62, name: 'Topic 6.2', summary: 'Summary for Topic 6.2', latestNews: 'Latest news for Topic 6.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 7,
            name: 'Chapter 7',
            topics: [
                { id: 71, name: 'Topic 7.1', summary: 'Summary for Topic 7.1', latestNews: 'Latest news for Topic 7.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 72, name: 'Topic 7.2', summary: 'Summary for Topic 7.2', latestNews: 'Latest news for Topic 7.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 8,
            name: 'Chapter 8',
            topics: [
                { id: 81, name: 'Topic 8.1', summary: 'Summary for Topic 8.1', latestNews: 'Latest news for Topic 8.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 82, name: 'Topic 8.2', summary: 'Summary for Topic 8.2', latestNews: 'Latest news for Topic 8.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 9,
            name: 'Chapter 9',
            topics: [
                { id: 91, name: 'Topic 9.1', summary: 'Summary for Topic 9.1', latestNews: 'Latest news for Topic 9.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 92, name: 'Topic 9.2', summary: 'Summary for Topic 9.2', latestNews: 'Latest news for Topic 9.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
        {
            id: 10,
            name: 'Chapter 10',
            topics: [
                { id: 101, name: 'Topic 10.1', summary: 'Summary for Topic 10.1', latestNews: 'Latest news for Topic 10.1', mcqs: ['MCQ 1', 'MCQ 2'] },
                { id: 102, name: 'Topic 10.2', summary: 'Summary for Topic 10.2', latestNews: 'Latest news for Topic 10.2', mcqs: ['MCQ 1', 'MCQ 2'] },
            ],
        },
    ];

    const toggleChapter = (chapterId: number) => {
        if (expandedChapters.includes(chapterId)) {
            setExpandedChapters(expandedChapters.filter(id => id !== chapterId));
        } else {
            setExpandedChapters([...expandedChapters, chapterId]);
        }
    };

    const handleCheckboxChange = (topicId: number) => {
        setSelectedTopic(prevTopic => (prevTopic === topicId ? null : topicId)); // Toggle selected topic
    };

    return (
        <div>
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <div className="container mx-auto px-4 flex">
                <div className="w-64 p-4 mr-4 rounded-lg shadow-md">
                    {data.map(chapter => (
                        <div key={chapter.id} className="mb-4">
                            <div className="flex items-center mb-2">
                                <div
                                    className="cursor-pointer"
                                    onClick={() => toggleChapter(chapter.id)}
                                >
                                    {expandedChapters.includes(chapter.id) ? (
                                        <FaChevronDown className="w-4 h-4 mr-2 text-blue-500" />
                                    ) : (
                                        <FaChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <FaPlus
                                        className={`w-4 h-4 mr-2 cursor-pointer ${expandedChapters.includes(chapter.id) ? 'transform rotate-45' : ''}`}
                                        onClick={() => toggleChapter(chapter.id)}
                                    />
                                    <div className="font-semibold">{chapter.name}</div>
                                </div>
                            </div>
                            {expandedChapters.includes(chapter.id) && (
                                <ul className="ml-2">
                                    {chapter.topics.map((topic: Topic) => (
                                        <li key={topic.id} className="mb-1">
                                            <input
                                                type="checkbox"
                                                id={`topic-${topic.id}`}
                                                className="hidden"
                                                checked={selectedTopic === topic.id}
                                                onChange={() => handleCheckboxChange(topic.id)}
                                            />
                                            <label
                                                htmlFor={`topic-${topic.id}`}
                                                className="flex items-center cursor-pointer"
                                            >
                                                {selectedTopic === topic.id ? (
                                                    <MdCheckBox className="mr-2 text-blue-500" />
                                                ) : (
                                                    <MdCheckBoxOutlineBlank className="mr-2 text-gray-500" />
                                                )}
                                                {topic.name}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
                    {selectedTopic !== null ? (
                        <>
                            <h2 className="text-lg font-bold mb-2">{data.flatMap(chapter => chapter.topics).find(topic => topic.id === selectedTopic)?.name}</h2>
                            <p>{data.flatMap(chapter => chapter.topics).find(topic => topic.id === selectedTopic)?.summary}</p>
                            {/* You can display more details as needed */}
                        </>
                    ) : (
                        <p className="text-gray-500">Select a topic to display information.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
