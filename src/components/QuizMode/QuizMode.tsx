"use client";
import React, { useState } from "react";
import { FaRegComments } from "react-icons/fa";

const QuizMode = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
  ]) as any;
  const [selectedOptions, setSelectedOptions] = useState({}) as any;
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (questionId: any, option: any) => {
    setSelectedOptions((prevSelectedOptions: any) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="flex justify-evenly h-[75vh]">
      <div className="w-4/5 mx-4 bg-white shadow-md rounded-md p-4 flex flex-col">
        <div className="flex-grow overflow-y-auto mb-4 relative">
          {questions.length === 0 ? (
            <div className="text-center text-gray-500">
              No questions available.
            </div>
          ) : (
            questions.map((question: any) => (
              <div key={question.id} className="mb-4">
                <p className="mb-2 text-lg font-semibold">
                  {question.question}
                </p>
                <div className="space-y-2">
                  {question.options.map((option: any) => (
                    <label
                      key={option}
                      className={`flex items-center p-2 border rounded-md cursor-pointer ${
                        selectedOptions[question.id] === option
                          ? "bg-blue-100 border-blue-500"
                          : "bg-gray-100 border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={selectedOptions[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option)}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit Answers
          </button>
        </div>
      </div>
      <div className="w-1/5 bg-gray-100 shadow-md rounded-md p-4 hidden sm:inline">
        <h2 className="text-lg font-semibold mb-4">Results History</h2>
        {showResults && (
          <div>
            {questions.map((question: any) => (
              <div key={question.id} className="mb-4">
                <p className="font-semibold">{question.question}</p>
                <p>
                  Your answer:{" "}
                  <span
                    className={`font-semibold ${
                      selectedOptions[question.id] === question.answer
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {selectedOptions[question.id]}
                  </span>
                </p>
                {selectedOptions[question.id] !== question.answer && (
                  <p className="text-gray-600">
                    Correct answer:{" "}
                    <span className="font-semibold">{question.answer}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizMode;
