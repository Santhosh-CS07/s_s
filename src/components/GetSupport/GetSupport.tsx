"use client";
import React, { useState } from "react";
import SupportCard from "../SupportCard/SupportCard";
import AIMode from "../AIMode/AIMode";
import HumanMode from "../HumanMode/HumanMode";
import Departmentfilter from "../DepartmentFilter/DepartmentFilter";

const Getsupport = (props: any) => {
  const { setGetSupport } = props;
  const [supportCard, setSupportCard] = useState(true);
  const [connectionPanel, setConnectionPanel] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const cardsData: any = [
    {
      title: "Learn Typescript?",
      description: "You can ask me anything about debugging - live where I want to share my real experience.",
      rating: 4,
      creator: "Santhosh Naik",
      profession: "software developer",
      liveStatus: true,
      isVerified: true,
      isSaved: true,
      content: {
        type: "video",
        url: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        text: "test",
      },
    },
    {
      title: "Facing CodeIgniter Problems?",
      description: "You can ask me anything about debugging - live where I want to share my real experience.",
      rating: 4,
      creator: "Santhosh Naik",
      profession: "software developer",
      liveStatus: true,
      isVerified: true,
      isSaved: false,
      content: {
        type: "text",
        url: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        text: "test",
      },
    },
    {
      title: "Learn Concurrency in Node.js?",
      description: "You can ask me anything about debugging - live where I want to share my real experience.",
      rating: 4,
      creator: "Santhosh Naik",
      profession: "software developer",
      liveStatus: false,
      isVerified: false,
      isSaved: false,
      content: {
        type: "image",
        url: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        text: "test",
      },
    },
    {
      title: "Know how to Start a Patent Drafting",
      description: "You can ask me anything about debugging - live where I want to share my real experience.",
      rating: 4,
      creator: "Santhosh Naik",
      profession: "Patent Analyst",
      liveStatus: true,
      isVerified: true,
      isSaved: false,
      content: {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBq8iOscnPb218nOh4vmYs0hvHXSc7gkmmA&s",
        text: "test",
      },
    },
    {
      title: "Learn React Native?",
      description: "You can ask me anything about mobile development - live where I want to share my real experience.",
      rating: 5,
      creator: "John Doe",
      profession: "Mobile Developer",
      liveStatus: true,
      isVerified: true,
      isSaved: true,
      content: {
        type: "video",
        url: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-background_1258-137294.jpg",
        text: "test",
      },
    },
    {
      title: "Mastering Docker",
      description: "Learn how to containerize your applications using Docker.",
      rating: 4.5,
      creator: "Jane Smith",
      profession: "DevOps Engineer",
      liveStatus: false,
      isVerified: true,
      isSaved: true,
      content: {
        type: "text",
        url: "https://img.freepik.com/free-photo/close-up-concrete-wall_181624-12091.jpg",
        text: "test",
      },
    },
    {
      title: "Mastering Docker",
      description: "Learn how to containerize your applications using Docker.",
      rating: 4.5,
      creator: "Jane Smith",
      profession: "DevOps Engineer",
      liveStatus: false,
      isVerified: true,
      isSaved: true,
      content: {
        type: "text",
        url: "https://img.freepik.com/free-photo/close-up-concrete-wall_181624-12091.jpg",
        text: "test",
      },
    },
    {
      title: "Mastering Docker",
      description: "Learn how to containerize your applications using Docker.",
      rating: 4.5,
      creator: "Jane Smith",
      profession: "DevOps Engineer",
      liveStatus: false,
      isVerified: true,
      isSaved: true,
      content: {
        type: "text",
        url: "https://img.freepik.com/free-photo/close-up-concrete-wall_181624-12091.jpg",
        text: "test",
      },
    }
  ];

  const filteredCards = cardsData.filter((card: any) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      {supportCard ? (
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Left Column: Support Cards */}
          <div className="lg:w-2/3 h-[80vh] overflow-y-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCards.map((el: any, index: number) => (
                <div key={index} className="w-full">
                  <SupportCard
                    setConnectionPanel={setConnectionPanel}
                    setSupportCard={setSupportCard}
                    setGetSupport={setGetSupport}
                    data={el}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Latest Services */}
          <div className="lg:w-1/3">
            <div className="sticky top-0 z-10 bg-white">
              <input
                type="text"
                placeholder="Search your problem..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-blue-900 rounded-lg"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Departmentfilter />
            </div>
          </div>
        </div>
      ) : connectionPanel === "Ai" ? (
        <AIMode />
      ) : (
        <HumanMode />
      )}
    </div>
  );
};

export default Getsupport;
