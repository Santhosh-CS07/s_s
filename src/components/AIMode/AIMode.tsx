"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaRegComments, FaRobot } from "react-icons/fa"; // Assuming you have react-icons/fa installed
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AIMode = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Array<{ sender: string; message: string }>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (message.trim()) {
      const newChat = [...chat, { sender: "user", message }];
      setChat(newChat);
      setMessage("");
      setLoading(true);

      try {
        const response = await axios.post("/api/generateAnswer", { prompt: message });
        const aiMessage = response.data.text;
        setChat([...newChat, { sender: "ai", message: aiMessage }]);
      } catch (error) {
        console.error("Failed to generate answers:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex justify-evenly h-[75vh] p-4 bg-gray-50">
      <div className="w-4/5 mx-4 bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <div className="flex-grow overflow-y-auto mb-4 relative">
          {chat.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <FaRobot className="animate-bounce text-4xl mb-4" />
              <p>Welcome to gemini AI World with Precise Answers</p>
            </div>
          ) : (
            chat.map((chatItem, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg ${chatItem.sender === "user"
                  ? "bg-blue-100 self-end"
                  : "bg-gray-200 self-start"
                  }`}
              >
                {chatItem.message}
              </div>
            ))
          )}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
              <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
            </div>
          )}
        </div>
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your question..."
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Ask AI
          </button>
        </div>
      </div>
      <div className="w-1/5 bg-white shadow-lg rounded-lg p-6 hidden sm:block">
        {/* <div className="mb-6">
          <h2 className="font-bold text-lg text-gray-800 mb-1">Chat GPT AI</h2>
          <p className="text-sm text-gray-600">Launch Year: 2020</p>
          <p className="text-sm text-gray-600">Current Year: 2024</p>
        </div> */}
        <div className="mb-6">
          <h2 className="font-bold text-lg text-gray-800 mb-1">Gemini AI</h2>
          {/* {/* <p className="text-sm text-gray-600">Launch Year: 2023</p> */}
          <p className="text-sm text-gray-600">model: gemini-1.5-flash</p>
        </div>
        {/* <div>
          <h2 className="font-bold">Sample Prompting</h2>
          <p className="text-sm text-gray-600">What is React</p>
        </div> */}
      </div>
    </div>
  );
};

export default AIMode;
