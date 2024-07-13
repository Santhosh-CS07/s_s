"use client";
import React, { useState } from "react";
import {
  HomeIcon,
  NewspaperIcon,
  InformationCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { FaRegSmile } from "react-icons/fa"; // Import the smile icon from react-icons

const Homenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 sm:px-10">
      {/* Brand name */}
      <a href="/" className="mb-4 sm:mb-0">
        <div className="font-serif flex items-center">
          <h2 className=" text-4xl text-blue-900">
            ekathra{" "}
            <span className="text-white bg-blue-900 py-0 px-2 rounded">ss</span>
          </h2>
        </div>
      </a>

      {/* Hamburger menu icon for small screens */}
      <div className="sm:hidden relative">
        <button
          onClick={toggleMenu}
          className="block text-gray-500 hover:text-blue-900 focus:text-blue-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className={`${isOpen ? "hidden" : "block"}`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 110-2z"
            />
            <path
              className={`${isOpen ? "block" : "hidden"}`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.707 7.293a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0zm10 0a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0zM3 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
            />
          </svg>
        </button>

        {/* Menu items absolute positioned */}
        <div
          className={`absolute top-4 right-0 bg-white mt-2 p-2 rounded shadow-lg ${isOpen ? "block" : "hidden"
            }`}
        >
          <a
            href="/"
            className="hover:text-blue-900 flex items-center mb-2 space-x-2"
          >
            <HomeIcon className="h-6 w-6" />
            <span>Home</span>
          </a>
          <a
            href="/people"
            className="hover:text-blue-900 flex items-center mb-2 space-x-2"
          >
            <UserPlusIcon className="h-6 w-6" />
            <span>People</span>
          </a>
          <a
            href="/articles"
            className="hover:text-blue-900 flex items-center mb-2 space-x-2"
          >
            <NewspaperIcon className="h-6 w-6" />
            <span>Articles</span>
          </a>
          <a
            href="/happy-stories"
            className="hover:text-blue-900 flex items-center mb-2 space-x-2"
          >
            <FaRegSmile className="h-6 w-6" />
            <span>Happy Stories</span>
          </a>
          <a
            href="/about"
            className="hover:text-blue-900 flex items-center mb-2 space-x-2"
          >
            <InformationCircleIcon className="h-6 w-6" />
            <span>About</span>
          </a>
        </div>
      </div>

      {/* Menu items for desktop */}
      <div className="hidden sm:px-8 sm:flex flex-row space-x-6">
        <a href="/" className="hover:text-blue-900 flex items-center space-x-2">
          <HomeIcon className="h-6 w-6" />
          <span>Home</span>
        </a>
        <a
          href="/people"
          className="hover:text-blue-900 flex items-center space-x-2"
        >
          <UserPlusIcon className="h-6 w-6" />
          <span>People</span>
        </a>
        <a
          href="/articles"
          className="hover:text-blue-900 flex items-center space-x-2"
        >
          <NewspaperIcon className="h-6 w-6" />
          <span>Articles</span>
        </a>
        <a
          href="/happy-stories"
          className="hover:text-blue-900 flex items-center space-x-2"
        >
          <FaRegSmile className="h-6 w-6" />
          <span>Happy Stories</span>
        </a>
        <a
          href="/about"
          className="hover:text-blue-900 flex items-center space-x-2"
        >
          <InformationCircleIcon className="h-6 w-6" />
          <span>About</span>
        </a>
      </div>
    </div>
  );
};

export default Homenavbar;
