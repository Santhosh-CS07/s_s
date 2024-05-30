"use client";
import React from "react";
import { FaPaperPlane, FaPen } from "react-icons/fa";

const QuestionInput = () => {
  return (
    <div className="w-full max-w-md mx-auto md: mt-10 sm:mt-0">
      <div className="flex bg-white shadow-md rounded-lg p-2">
        <input
          type="text"
          placeholder="Ask anything...?"
          className="flex-grow px-4 py-2 me-2 text-gray-700 bg-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          post
        </button>
      </div>
    </div>
  );
};

export default QuestionInput;
