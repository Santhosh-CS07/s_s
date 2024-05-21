import React from "react";
import { FaHeart, FaShareAlt, FaComment, FaPlus } from "react-icons/fa";

const Card = (props: any) => {
  const { title, content } = props;

  const isEmpty = !title || !content;

  return (
    <div className="w-full max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-6">
      {isEmpty ? (
        <div className="flex items-center justify-center h-48 bg-gray-100">
          <FaPlus className="text-gray-400" size={48} />
        </div>
      ) : (
        <>
          <div className="px-4 py-2 w-full">
            <p className="text-gray-800">{title}</p>
            <p className="text-gray-700 mt-2">{content}</p>
          </div>
          <div className="px-4 py-4 flex justify-between items-center">
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
        </>
      )}
    </div>
  );
};

export default Card;
