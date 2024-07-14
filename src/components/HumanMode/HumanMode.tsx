"use client";
import React, { useState } from "react";
import {
  FaRegComments,
  FaRobot,
  FaPhone,
  FaVideo,
  FaUserAstronaut,
} from "react-icons/fa"; // Assuming you have react-icons/fa installed

const HumanMode = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]) as any;
  const [activeTab, setActiveTab] = useState("chat") as any;

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

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return (
          <div className="flex flex-col h-[70vh]">
            <div className="flex-grow overflow-y-auto mb-4 relative">
              {chat.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <FaUserAstronaut className="animate-bounce text-4xl mb-4" />
                  <p>Welcome to Human World for Real Answers</p>
                </div>
              ) : (
                chat.map((chatItem: any, index: any) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-md ${chatItem.sender === "user"
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
                className="ml-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Ask
              </button>
            </div>
          </div>
        );
      case "audio":
        return (
          <div className="flex items-center justify-center h-full text-gray-500">
            <FaPhone className="text-4xl mb-4" />
            <p>Audio Call Interface (Coming Soon)</p>
          </div>
        );
      case "video":
        return (
          <div className="flex items-center justify-center h-full mt-36 text-gray-500">
            <FaVideo className="text-4xl mb-4" />
            {/* <p>Video Call Interface (Coming Soon)</p> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow overflow-y-auto p-4">
        <div className="flex mb-4 space-x-4">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center px-4 py-2 rounded-md ${activeTab === "chat"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
          >
            <FaRegComments className="mr-2" />
            Chat
          </button>
          {/* <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === "audio"
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <FaPhone className="mr-2" />
            Audio Call
          </button> */}
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center px-4 py-2 rounded-md ${activeTab === "video"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
          >
            <FaVideo className="mr-2" />
            Live Call
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default HumanMode;
