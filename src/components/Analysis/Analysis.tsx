"use client";
import React from "react";
import {
  FaSpotify,
  FaGithub,
  FaReddit,
  FaCode,
  FaHackerrank,
} from "react-icons/fa";
import QuestionInput from "../QuestionInput/QuestionInput";

const Analysis = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <p className="mb-2 text-white">Create your Question post?</p>
        <QuestionInput />

      </div>
    </div>
  );
};

export default Analysis;
