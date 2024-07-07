"use client";
import React from "react";

const DashboardMainpage = (props: any) => {
  const { setSelectedOption } = props;
  const services = [
    {
      title: "Get Live Help from Experts",
      description: [
        "Expert Assistance",
        "24/7 support live",
        "Customized Solutions for Your Problems",
        "Timely and Accurate Responses",
        "Personalized One-on-One Human Interaction",
      ],
      offer: {
        price: "₹299",
        originalPrice: "₹799",
        highlight: "Limited Time Offer",
      },
      buttonText: "Live Support",
      buttonLink: "/dashboard/livehelp",
      option: "Experts List",
    },
    {
      title: "Transform Expertise into Revenue",
      description: [
        "Instant monetizable responses",
        "Leverage diverse expertise for earnings",
        "Community-driven revenue support",
        "Maximize earnings through expert solutions",
        "Sell everything or anything what you have",
      ],
      earnings: {
        minEarnings: "₹1000",
        maxEarnings: "₹5000",
        highlight: "Financial Freedom",
      },
      buttonText: "Start Earning",
      buttonLink: "/dashboard/givesupport",
      option: "Sell",
    },
  ];

  return (
    <div className="px-4 py-8 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto px-4">
        {services?.map((service: any, index: number) => (
          <div
            key={index}
            className="p-6 min-w-[280px] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white hover:bg-gray-100"
          >
            <h3 className="font-semibold text-blue-900 mb-4 text-1xl text-center">
              {service.title}
            </h3>
            <ul className="mb-6 space-y-2 text-gray-600">
              {service.description.map((point: any, idx: number) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {point}
                </li>
              ))}
            </ul>
            {service.offer && (
              <div className="text-center mb-4">
                <span className="text-red-500 font-bold">
                  {service.offer.highlight}
                </span>
                <div className="text-gray-800 text-lg font-bold mt-2">
                  Just{" "}
                  <span className="line-through text-gray-500">
                    {service.offer.originalPrice}
                  </span>{" "}
                  <span className="text-red-500">{service.offer.price}</span>
                </div>
              </div>
            )}
            {service.earnings && (
              <div className="text-center mb-4">
                <span className="text-red-500 font-bold">
                  {service.earnings.highlight}
                </span>
                <div className="text-gray-800 text-lg font-bold mt-2">
                  min{" "}
                  <span className="text-green-500">
                    {service.earnings.minEarnings}
                  </span>{" "}
                  -{" "}
                  <span className="text-green-500">
                    {service.earnings.maxEarnings}
                  </span>{" "}
                  per day
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedOption(service.option)}
              className=" cursor-pointer block w-full text-center font-bold py-2 rounded-lg transition-colors duration-300 bg-blue-900 text-white hover:bg-blue-600"
            >
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMainpage;
