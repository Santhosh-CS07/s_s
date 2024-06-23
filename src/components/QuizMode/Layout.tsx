// Import necessary dependencies and hooks
"use client";
import React, { useState } from 'react';
import { FaCheckCircle, FaSpinner, FaQuestionCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
// Define Category interface
interface Category {
    name: string;
    type: string;
}

// Define Format1 component
const Format1: React.FC = () => {
    const router = useRouter(); // Initialize useRouter hook

    // State variables
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categories, setCategories] = useState<Category[]>([
        { name: "Group 2", type: "gov" },
        { name: "Web Development", type: "tech" },
        { name: "App Development", type: "tech" },
        { name: "SSC", type: "gov" },
        { name: "UPSC", type: "gov" },
        { name: "Food Technology", type: "tech" },
        { name: "IPR", type: "tech" },
        { name: "Bank Exams", type: "gov" },
        { name: "Railway Exams", type: "gov" },
        { name: "Police Exams", type: "gov" },
        { name: "Cyber Security", type: "tech" },
        { name: "Data Science", type: "tech" },
        { name: "AI and ML", type: "tech" },
        { name: "Blockchain", type: "tech" },
        { name: "Digital Marketing", type: "tech" }
    ]);
    const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);
    const [loading, setLoading] = useState<boolean>(false);
    const [showGov, setShowGov] = useState<boolean>(true);
    const [showTech, setShowTech] = useState<boolean>(true);

    // Function to handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Function to filter categories based on name and tag
    const filterCategories = () => {
        setLoading(true); // Show loader
        let filtered = categories.filter(category =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (!showGov && !showTech) {
            filtered = [];
        } else {
            if (!showGov) {
                filtered = filtered.filter(category => category.type !== 'gov');
            }
            if (!showTech) {
                filtered = filtered.filter(category => category.type !== 'tech');
            }
        }
        setFilteredCategories(filtered);
        setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    };

    // Handle search and filter on Enter key press
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            filterCategories();
        }
    };

    // Function to handle navigation to quiz page
    const handleTakeQuiz = (categoryName: string) => {
        const encodedCategoryName = encodeURIComponent(categoryName.toLowerCase());
        router.push(`/dashboard/learn/${encodedCategoryName}`);
    };

    return (
        <div className="min-h-screen p-6">
            <div className="container mx-auto px-4">
                {/* Search Bar */}
                <div className="mb-4 flex items-center">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Search by name or tag..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={filterCategories}
                    >
                        Search
                    </button>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
                    {loading ? (
                        <div className="col-span-full flex justify-center mt-20 items-center">
                            <FaSpinner className="animate-spin text-blue-500" size={64} />
                        </div>
                    ) : (
                        filteredCategories.map((category, index) => (
                            <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                {/* Ribbon Tag */}
                                <div className={`absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-12 h-6 bg-${category.type === "gov" ? "green-500" : "blue-500"} text-white text-center leading-6 rounded-bl-lg`}>
                                    {category.type === "gov" ? (
                                        <span className="block">gov</span>
                                    ) : (
                                        <span className="block">Tech</span>
                                    )}
                                </div>

                                {/* Category Title */}
                                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>

                                {/* Trust Features */}
                                <div className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span className="text-gray-700 text-sm">Chapter & Topics wise</span>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span className="text-gray-700 text-sm">Summary</span>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span className="text-gray-700 text-sm">Latest news</span>
                                </div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <FaQuestionCircle className="text-blue-500" />
                                    <span className="text-gray-700 text-sm">Unlimited Questions</span>
                                </div>

                                {/* Take Quiz Button */}
                                <button
                                    className="w-full bg-blue-50 text-blue-700 py-2 rounded border border-blue-300 hover:bg-blue-100 transition-colors duration-300"
                                    onClick={() => handleTakeQuiz(category.name)}
                                >
                                    Take Quiz
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Format1;
