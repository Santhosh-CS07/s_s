import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

const SupportCard = (props: any) => {
  const { setConnectionPanel, setSupportCard, data, setGetSupport } = props;

  const openConnectionPanel = () => {
    setSupportCard(false);
    setConnectionPanel(true);
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
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        {data?.isVerified ? (
          <p className="flex text-blue-500 font-bold text-sm">
            <FaCheckCircle className="text-green-500 me-2 mt-1" />
            <span> Verified</span>
          </p>
        ) : (
          <p className="flex text-blue-500 font-bold text-red-500 text-sm">
            <FaTimesCircle className="text-red-500 me-2 mt-1" />
            <span> Not Verified</span>
          </p>
        )}
        <span className="text-yellow-500 text-sm">{data?.rating}⭐</span>
        <p
          className={`text-xs font-bold ${data?.liveStatus
            ? "bg-green-100 text-green-800 px-2 py-1 rounded-full"
            : "bg-red-100 text-red-800 px-2 py-1 rounded-full"
            }`}
        >
          {data?.liveStatus ? "Live Now" : "Offline"}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={openConnectionPanel}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-sm"
        >
          Ask Live
        </button>
        {data?.isSaved ? (
          <FaBookmark
            title="save for later"
            className="text-blue-900 mt-1 cursor-pointer"
          />
        ) : (
          <FaRegBookmark
            title="save for later"
            className="text-blue-900 mt-1 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SupportCard;
