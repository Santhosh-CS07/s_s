import React from "react";
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa";

const Card = (props: any) => {
  const { title, content } = props;
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-6">
      <div className="px-4 py-2">
        <p className="text-gray-800 font-semibold">{title}</p>
        <p className="text-gray-700 mt-2">{content}</p>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-blue-500">
            <FaHeart />
          </button>
          <button className="text-gray-500 hover:text-green-500">
            <FaShareAlt />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaComment />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
