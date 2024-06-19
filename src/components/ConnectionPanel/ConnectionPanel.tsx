"use client";
import AIMode from "@/components/AIMode/AIMode";
import Navbar from "@/components/DashboardNavbar/Navbar";
import HumanMode from "@/components/HumanMode/HumanMode";
import React, { useState } from "react";
import { FaUser, FaRobot, FaRegQuestionCircle } from "react-icons/fa";

const Page = () => {
  const [mode, setMode] = useState("ai");

  const toggleMode = (selectedMode: string) => {
    setMode(selectedMode);
  };

  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="flex mt-4 flex-wrap justify-center">
        <button
          onClick={() => toggleMode("ai")}
          className={`flex items-center px-4 py-2 m-2 ${mode === "ai"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
            } rounded-md w-full sm:w-auto sm:mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          <FaRobot className="mr-2" />
          AI Mode
        </button>
        <button
          onClick={() => toggleMode("human")}
          className={`flex items-center px-4 py-2 m-2 ${mode === "human"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
            } rounded-md w-full sm:w-auto sm:mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          <FaUser className="mr-2" />
          Human Mode
        </button>
      </div>
      <div className="p-4">
        {mode === "ai" && <AIMode />}
        {mode === "human" && <HumanMode />}
      </div>
    </div>
  );
};

export default Page;
