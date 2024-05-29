"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const UserProfile = () => {
  const name: string = "Santhosh M";
  const position = "Software Developer";
  const location = "San Francisco, CA";
  const lastLogin = "2024-05-20 12:34:56"; // Assuming a UTC timestamp
  const interests = ["React", "JavaScript", "Node.js"];

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = "/";
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{position}</p>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-600 mb-2">Last Login: {lastLogin}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {interests.map((interest, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-800"
          >
            {interest}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <FaFacebook className="text-blue-600 cursor-pointer" />
        <FaTwitter className="text-blue-400 cursor-pointer" />
        <FaInstagram className="text-pink-500 cursor-pointer" />
        <FaLinkedin className="text-blue-800 cursor-pointer" />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
