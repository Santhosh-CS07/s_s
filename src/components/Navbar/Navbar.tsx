import React from "react";
import { FaSearch, FaHome, FaHandsHelping, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <h3>S_S</h3>
          {/* <img src="/path-to-your-logo.png" alt="Brand Logo" className="h-10" /> */}
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md mx-4 mt-4 sm:mt-0">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-150">
            <FaHome className="text-gray-500" />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-150">
            <FaInfoCircle className="text-green-500" />
            <span>Get Support</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-150">
            <FaHandsHelping className="text-green-500" />
            <span>Give Support</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
