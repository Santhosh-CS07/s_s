"use client";
import React from "react";
import {
  HomeIcon,
  NewspaperIcon,
  InformationCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { FaRegSmile } from "react-icons/fa"; // Import the smile icon from react-icons
import Image from "next/image";
const Homenavbar = () => {
  return (
    <div className=" justify-evenly sm:flex py-6">
      <a href="/">
        {" "}
        <div className="flex items-center">
          <h2 className="text-4xl">ekathra <span className="text-white bg-blue-900 py-0 px-2 rounded">ss</span></h2>
        </div>
      </a>
      <div className="flex space-x-6 sm:mt-0">
        <a
          href="/"
          className="hover:text-blue-900 flex items-center space-x-2"
        >
          <HomeIcon className="h-16 w-16 hidden sm:inline sm:h-6 sm:w-6" />
          <span className="hidden sm:inline">Home</span>
        </a>
        <a href="/people" className="hover:text-blue-900 flex items-center space-x-2">
          <UserPlusIcon className="h-16 w-16 hidden sm:inline sm:h-6 sm:w-6" />
          <span className='hidden sm:inline'>People</span>
        </a>
        <a href="/articles" className="hover:text-blue-900 flex items-center space-x-2">
          <NewspaperIcon className=" hidden sm:inline h-16 w-16 sm:h-6 sm:w-6" />
          <span className='hidden sm:inline'>Articles</span>
        </a>
        <a
          href="/happy-stories"
          className="hover:text-blue-900 flex items-center space-x-2"
        >
          <FaRegSmile className=" hidden sm:inline h-16 w-16 sm:h-6 sm:w-6" />
          <span className="hidden sm:inline">Happy Stories</span>
        </a>
        <a
          href="/about"
          className=" hover:text-blue-900 flex items-center space-x-2"
        >
          <InformationCircleIcon className="hidden sm:inline h-16 w-16 sm:h-6 sm:w-6" />
          <span className="hidden sm:inline">About</span>
        </a>
      </div>
    </div>
  );
};

export default Homenavbar;
