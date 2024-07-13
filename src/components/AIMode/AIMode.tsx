"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaRobot } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AIMode = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Array<{ sender: string; message: string }>>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (message.trim()) {
      const newChat = [...chat, { sender: "user", message }];
      setChat(newChat);
      setMessage("");
      setLoading(true);

      try {
        const response = await axios.post("/api/generateAnswer", {
          prompt: message,
        });
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

  // Function to parse AI message and format it with proper line breaks, paragraphs, and headers
  const parseAiMessage = (message: any) => {
    // Split the message into paragraphs based on double newlines
    const paragraphs = message.split('\n\n');

    // Render paragraphs with headers and plain text
    return paragraphs.map((paragraph: any, index: any) => {
      // Check if the paragraph starts with a header pattern (##, ###, etc.)
      if (/^#+\s/.test(paragraph)) {
        const headerLevel = paragraph.match(/^#+/)[0].length; // Determine header level
        const headerText = paragraph.replace(/^#+\s/, ''); // Extract header text
        return React.createElement(`h${headerLevel}`, { key: index, className: 'font-bold text-lg mb-2' }, headerText);
      } else {
        // Remove ** for bold
        paragraph = paragraph.replace(/\*\*/g, '');
        // Remove * for italic
        paragraph = paragraph.replace(/\*/g, '');
        return <p key={index} className="mb-2">{paragraph}</p>;
      }
    });
  };


  return (
    <div className="flex h-[77vh] flex-col p-4">
      <div className="flex-grow overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-inner">
        {chat.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <FaRobot className="animate-bounce text-4xl mb-4" />
            <p>Welcome to Gemini AI World with Precise Answers</p>
          </div>
        ) : (
          chat.map((chatItem, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${chatItem.sender === "user"
                ? "bg-blue-100 self-end"
                : "bg-gray-200 self-start"
                }`}
            >
              {/* Parse and display AI message */}
              {parseAiMessage(chatItem.message)}
            </div>

          ))
        )}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Enter your question..."
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
};

export default AIMode;
