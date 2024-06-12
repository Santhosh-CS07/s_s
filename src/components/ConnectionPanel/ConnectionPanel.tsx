"use client";
import AIMode from "@/components/AIMode/AIMode";
import Navbar from "@/components/DashboardNavbar/Navbar";
import HumanMode from "@/components/HumanMode/HumanMode";
import QuizMode from "@/components/QuizMode/QuizMode";
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
      <div className="flex justify-center">
        <button
          onClick={() => toggleMode("ai")}
          className={`flex items-center px-4 py-2 ${mode === "ai"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
            } rounded-md mr-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          <FaRobot className="mr-2" />
          AI Mode
        </button>

        <button
          onClick={() => toggleMode("quiz")}
          className={`flex items-center px-4 py-2 ${mode === "quiz"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
            } rounded-md mr-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          <FaRegQuestionCircle className="mr-2" />
          Quiz Mode
        </button>
        <button
          onClick={() => toggleMode("human")}
          className={`flex items-center px-4 py-2 ${mode === "human"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
            } rounded-md mr-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          <FaUser className="mr-2" />
          Human Mode
        </button>
      </div>
      <div className="p-4">
        {mode === "ai" && <AIMode />}
        {mode === "human" && <HumanMode />}
        {mode === "quiz" && <QuizMode />}
      </div>
    </div>
  );
};

export default Page;
