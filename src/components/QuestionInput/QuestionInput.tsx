"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const QuestionInput = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex bg-white shadow-md rounded-lg p-2">
        <input
          type="text"
          placeholder="Raise your query?"
          className="flex-grow px-4 py-2 text-gray-700 bg-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default QuestionInput;
