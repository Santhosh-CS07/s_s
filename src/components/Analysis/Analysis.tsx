"use client";
import React from "react";
import {
  FaSpotify,
  FaGithub,
  FaReddit,
  FaCode,
  FaHackerrank,
} from "react-icons/fa";

const Analysis = () => {
  return (
    <div>
      <h4>Favorite Box</h4>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center justify-center">
            <FaSpotify className="text-green-500 text-6xl" />
          </div>
          <div className="flex items-center justify-center">
            <FaGithub className="text-black text-6xl" />
          </div>
          <div className="flex items-center justify-center">
            <FaReddit className="text-orange-500 text-6xl" />
          </div>
          <div className="flex items-center justify-center">
            <FaCode className="text-yellow-500 text-6xl" />
          </div>
          <div className="flex items-center justify-center">
            <FaHackerrank className="text-green-500 text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
