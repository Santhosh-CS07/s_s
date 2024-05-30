import React from "react";
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa";

const UserPost = (props: any) => {
  const { title, content, media } = props;
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg my-1 overflow-hidden">
      {/* <div className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div> */}
      <div className="p-4">
        {media && (
          <div className="mb-4">
            {media.type === 'image' && (
              <img src={media.url} alt="Post media" className="w-full rounded" />
            )}
            {media.type === 'video' && (
              <video controls className="w-full rounded">
                <source src={media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
        <p className="text-gray-800">{content}</p>
      </div>
      <div className="px-4 py-4 flex justify-between items-center bg-gray-100">
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-red-500 transition-colors duration-200">
            <FaHeart />
          </button>
          <button className="text-gray-500 hover:text-yellow-500 transition-colors duration-200">
            <FaShareAlt />
          </button>
          <button className="text-gray-500 hover:text-blue-500 transition-colors duration-200">
            <div className="flex">
              <FaComment className="mt-1 me-2" /> <span>answers</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
