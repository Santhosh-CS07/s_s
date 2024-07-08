"use client";
import React, { useState } from "react";
import SupportCard from "../SupportCard/SupportCard";
import Departmentfilter from "../DepartmentFilter/DepartmentFilter";
import Navbar from "@/components/DashboardNavbar/Navbar";
import ConnectionPanel from "@/components/ConnectionPanel/ConnectionPanel";
import AIMode from "../AIMode/AIMode";
import HumanMode from "../HumanMode/HumanMode";

const Getsupport = (props: any) => {
  const { setGetSupport, getSupport } = props;
  const [supportCard, setSupportCard] = useState(true);
  const [connectionPanel, setConnectionPanel] = useState("");

  const cardsData: any = [
    {
      title: "Learn Typescript?",
      description:
        "You can ask me anything about debugging - live where I want to share my real experience.",
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
      description:
        "You can ask me anything about debugging - live where I want to share my real experience.",
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
      description:
        "You can ask me anything about debugging - live where I want to share my real experience.",
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
      description:
        "You can ask me anything about debugging - live where I want to share my real experience.",
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
  ];

  return (
    <div>
      {supportCard == true ? (
        <>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {cardsData?.map((el: any, index: number) => (
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
        </>
      ) : (
        <>{connectionPanel === "Ai" ? <AIMode /> : <HumanMode />}</>
      )}
    </div>
  );
};

export default Getsupport;
