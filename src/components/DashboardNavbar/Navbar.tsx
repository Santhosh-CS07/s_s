import React from "react";
import {
  FaSearch,
  FaHome,
  FaHandsHelping,
  FaInfoCircle,
  FaBell,
  FaRocketchat,
} from "react-icons/fa";

const Navbar = (props: any) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wider bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            ekathra
          </h2>

          {/* <img src="/path-to-your-logo.png" alt="Brand Logo" className="h-10" /> */}
        </div>

        {/* Search Bar */}
        <div className="hidden sm:inline flex items-center w-full max-w-md mx-4 mt-4 sm:mt-0">
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
        <div className="flex flex-row sm:flex-row space-x-2 mt-4 sm:mt-0">
          <a
            href="/dashboard/getsupport"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <FaInfoCircle className="text-blue-500 hidden sm:inline text-2xl me-2" />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-lg sm:inline">
              Ask
            </span>
          </a>
          {/* <a
            href="/dashboard"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <FaHome className="text-blue-500 hidden sm:inline text-2xl me-2" />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-lg sm:inline">
              Feed
            </span>
          </a> */}
          <a
            href="/dashboard/givesupport"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <FaHandsHelping className="text-blue-500 hidden sm:inline text-2xl me-2" />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-lg sm:inline">
              Business
            </span>
          </a>
          <a
            href="/dashboard/chatroom"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <FaRocketchat className="text-blue-500 hidden sm:inline text-2xl me-2" />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-lg sm:inline">
              Chat
            </span>
          </a>
          <button className="hidden sm:inline flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150">
            <FaBell className="text-blue-500 text-2xl" />
            <span className="absolute top-20 right-3 sm:top-2 sm:right-14 flex items-center justify-center h-5 w-5 text-xs text-white bg-red-600 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
