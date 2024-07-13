"use client";
import React, { useState } from "react";
import {
  FiMenu,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiMessageSquare,
  FiBookOpen,
  FiDollarSign,
  FiBarChart2,
  FiHeart,
  FiPhoneCall,
  FiLogOut,
  FiHome,
  FiBriefcase,
} from "react-icons/fi"; // Import icons from react-icons
import DashboardMainpage from "@/components/DashboardMainPage/DashboardMainpage";
import Navbar from "@/components/DashboardNavbar/Navbar";
import ExpertsList from "@/components/ExpertsList/ExpertsList";
import SellService from "@/components/SellService/SellService";
import Getsupport from "@/components/GetSupport/GetSupport";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Default menu state is closed on mobile
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    // Close the menu on mobile view after selecting an option
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col">
      {/* Full-width fixed Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Toggle Button for Menu on Mobile */}
      <button
        className="fixed top-20 left-2 text-gray-600 sm:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiChevronLeft size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Fixed Left Menu */}
      <div
        className={`fixed bg-gray-100 w-54 h-screen px-4 py-8 border-r border-gray-200 z-40 transition-transform duration-300 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <ul>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Dashboard"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Dashboard")}
          >
            <FiHome className="mr-2" /> Dashboard
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Live Services"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Live Services")}
          >
            <FiHeart className="mr-2" /> Live Services
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Experts List"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Experts List")}
          >
            <FiUsers className="mr-2" /> Experts List
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Option 3"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Option 3")}
          >
            <FiMessageSquare className="mr-2" /> Chats
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Option 9"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Option 9")}
          >
            <FiPhoneCall className="mr-2" /> Live Calls
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Option 4"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Option 4")}
          >
            <FiUsers className="mr-2" /> Communities
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Sell"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Sell")}
          >
            <FiBriefcase className="mr-2" /> Sell Your Services
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Profile Settings"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Profile Settings")}
          >
            <FiSettings className="mr-2" /> Profile Settings
          </li>
          <li
            className={`flex items-center py-2 px-6 cursor-pointer ${selectedOption === "Sign Out"
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleOptionClick("Sign Out")}
          >
            <FiLogOut className="mr-2" /> Sign Out
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div
        className={`flex-1 sm:ml-64 p-4 transition-all duration-300 ${menuOpen ? "ml-64" : "ml-0"}`}
      >
        <div>
          {/* Render different content based on selectedOption */}
          {selectedOption === "Dashboard" && (
            <DashboardMainpage setSelectedOption={setSelectedOption} />
          )}
          {selectedOption === "Experts List" && <ExpertsList />}
          {selectedOption === "Sell" && <SellService />}
          {selectedOption === "Live Services" && <Getsupport />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
