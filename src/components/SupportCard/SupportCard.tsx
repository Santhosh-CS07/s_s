"use client";
import React from "react";

const SupportCard = (props: any) => {
  const { setConnectionPanel, setSupportCard, data } = props;

  const openConnectionPanel = (props: any) => {
    if (props === "Ai") {
      setSupportCard(false);
      setConnectionPanel("Ai");
    } else {
      setSupportCard(false);
      setConnectionPanel("Human");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2 mx-auto sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center mb-2">
        <div>
          <h4 className="text-sm font-semibold text-gray-800">{data?.title}</h4>
          <p className="text-sm">
            <span className="text-sm font-bold text-blue-500">
              {data?.profession}
            </span>
          </p>
          {/* {data?.content?.type === "video" && (
            <div className="mt-2">
              <video controls className="w-full">
                <source src={data?.content?.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {data?.content?.type === "image" && (
            <div className="mt-2">
              <img src={data?.content?.url} alt="Content" className="w-full rounded-lg" />
            </div>
          )}
          {data?.content?.type === "text" && (
            <p className="mt-2 text-sm text-gray-600">{data?.content?.text}</p>
          )} */}
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p className={`text-xs font-bold ${data?.liveStatus ? "text-green-800" : "text-red-800"} px-2 py-1 rounded-full`}>
          {data?.liveStatus ? "Live Now" : "Offline"}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            openConnectionPanel("Ai");
          }}
          className="text-blue-900 font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-sm"
        >
          Ask AI
        </button>
        <button
          onClick={() => {
            openConnectionPanel("Human");
          }}
          className="bg-blue-900 text-white font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-sm"
        >
          Ask Expert
        </button>
      </div>
    </div>

  );
};

export default SupportCard;
