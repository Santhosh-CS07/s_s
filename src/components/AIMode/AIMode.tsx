"use client";
import React, { useState } from "react";
import { FaRegComments, FaRobot } from "react-icons/fa"; // Assuming you have react-icons/fa installed

const AIMode = () => {
  const [message, setMessage] = useState("") as any;
  const [chat, setChat] = useState([]) as any;

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { sender: "user", message }]);
      setMessage("");
      // Here you can add logic to get an AI response and update the chat state
    }
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  console.log("chat_____", chat);
  return (
    <div className="flex justify-evenly h-[75vh]">
      <div className="w-4/5 mx-4 bg-white shadow-md rounded-md p-4 flex flex-col">
        <div className="flex-grow overflow-y-auto mb-4 relative">
          {chat.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <FaRobot className="animate-bounce text-4xl mb-4" />
              <p>Welcome to AI World with Precise Answers</p>
            </div>
          ) : (
            chat.map((chatItem: any, index: any) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-md ${
                  chatItem.sender === "user"
                    ? "bg-blue-100 self-end"
                    : "bg-gray-100 self-start"
                }`}
              >
                {chatItem.message}
              </div>
            ))
          )}
        </div>
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your question..."
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Ask AI
          </button>
        </div>
      </div>
      <div className="w-1/5 bg-gray-100 shadow-md rounded-md p-4 hidden sm:inline">
        <div className="flex items-center mb-4">
          <div>
            <h2 className="font-bold text-lg text-gray-800">Chat GPT AI</h2>
            <p className="text-sm text-gray-600">Launch Year: 2020</p>
            <p className="text-sm text-gray-600">Current Year: 2024</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h2 className="font-bold text-lg text-gray-800">Gemini AI</h2>
            <p className="text-sm text-gray-600">Launch Year: 2023</p>
            <p className="text-sm text-gray-600">Current Year: 2024</p>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <div>
            <h2 className="font-bold">Sample Prompting</h2>
            <p className="text-sm text-gray-600">What is React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMode;
