"use client";
import React, { useState } from "react";
import {
  HiOutlineBookOpen,
  HiOutlineHand,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineLogout,
} from "react-icons/hi";

const Navbar = (props: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <h2 className="text-4xl">
            ekathra{" "}
            <span className="text-white bg-blue-900 py-0 px-2 rounded">ss</span>
          </h2>
        </div>

        {/* Menu Items */}
        <div className="hidden sm:flex sm:items-center">
          <a
            href="/dashboard/livehelp"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineHeart className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Live Help</span>
          </a>
          <a
            href="/dashboard"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineHome className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Home</span>
          </a>
          <a
            href="/dashboard/givesupport"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineHand className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Services</span>
          </a>
          <a
            href="/dashboard/learn"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineBookOpen className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Learn</span>
          </a>
          <a
            href="/"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineLogout className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Logout</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto flex sm:hidden">
          <h2 className="me-4">Menu</h2>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`container mx-auto px-4 py-2 sm:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <a
            href="/dashboard/livehelp"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineHeart className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Live Help</span>
          </a>
          <a
            href="/dashboard"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineHome className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Home</span>
          </a>
          <a
            href="/dashboard/givesupport"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineHand className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Services</span>
          </a>
          <a
            href="/dashboard/learn"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineBookOpen className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Learn</span>
          </a>
          <a
            href="/"
            className="flex items-center justify-center px-4 py-2 text-gray-700 transition duration-150"
          >
            <HiOutlineLogout className="text-blue-500 text-2xl mr-2" />
            <span className="text-lg">Logout</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
