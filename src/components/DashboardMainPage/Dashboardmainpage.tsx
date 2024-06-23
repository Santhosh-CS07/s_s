import React from "react";
import Contentpage from "../ContentPage/Contentpage";
import Analysis from "../Analysis/Analysis";
import UserProfile from "../UserProfile/Userprofile";

const Dashboardmainpage = () => {
  const handleLogout = () => {
    alert("Logout clicked");
  };

  const services: any = [
    {
      title: "Get Live Help from Experts",
      description: [
        "24/7 support",
        "Expert consultations",
        "Real-time solutions",
        "Personalized guidance",
      ],
      buttonText: "Get In",
      buttonLink: "/dashboard/livehelp",
      bgGradient: "bg-gradient-to-r from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
    },
    {
      title: "Answer Real-time Questions",
      description: [
        "Instant responses",
        "Diverse expertise",
        "Community support",
        "Reliable answers",
      ],
      buttonText: "Get In",
      buttonLink: "/dashboard/givesupport",
      bgGradient: "bg-gradient-to-r from-green-400 to-green-600",
      hoverColor: "hover:from-green-500 hover:to-green-700",
    },
    {
      title: "Practice with Quizzes",
      description: [
        "Tailored quizzes",
        "Detailed feedback",
        "Track progress",
        "Unlimited attempts",
      ],
      buttonText: "Try Free",
      buttonLink: "dashboard/learn",
      bgGradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      hoverColor: "hover:from-yellow-500 hover:to-yellow-700",
    },
    {
      title: "Watch Your Favorite Reels",
      description: [
        "Trending content",
        "Personalized feed",
        "High-quality videos",
        "Easy sharing",
      ],
      buttonText: "coming soon ..",
      buttonLink: "#reels",
      bgGradient: "bg-gradient-to-r from-gray-400 to-gray-600",
      hoverColor: "hover:from-purple-500 hover:to-purple-700",
    },
  ];

  return (
    <div className="py-20 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-6">
        {services.map((service: any, index: number) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${service.bgGradient} ${service.hoverColor}`}
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h2>
            <ul className="mb-6 space-y-2 text-white">
              {service.description.map((point: any, idx: number) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.41V10h2.586a1 1 0 01.707 1.707l-3.293 3.293a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 01.707-1.707H9V6.59a1 1 0 112 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            {/* <a
              href={service.buttonLink}
              className="block w-full text-center bg-white text-blue-500 font-bold py-2 rounded-lg transition-colors duration-300 hover:bg-gray-200"
            >
              {service.buttonText}
            </a> */}
            <a
              href={service.buttonText.toLowerCase().includes("coming") ? null : service.buttonLink} // Disable link if "Coming Soon"
              className={`block w-full text-center font-bold py-2 rounded-lg transition-colors duration-300 ${service.buttonText.toLowerCase().includes("coming")
                ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                : "bg-white text-blue-500 hover:bg-gray-200"
                }`}
            >
              {service.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboardmainpage;
