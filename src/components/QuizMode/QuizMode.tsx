"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

const QuizMode: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const tags = ["Patent", "HTML", "CSS", "JavaScript", "React", "Core Java"];

  const handleTagClick = async (tag: string) => {
    setLoading(true);
    try {
      const prompt2 = `Ensure the questions cover a variety of topics on ${tag}. Each question should have four options, with only one correct answer. The questions should be diverse and engaging.`;
      const prompt1 = `Generate 10 different multiple-choice questions (MCQs) in the following JSON format:
{ id: [question_id], question: "[question_text]", options: ["[option1]", "[option2]", "[option3]", "[option4]"], answer: "[correct_option]" },`;
      const response: any = await axios.post("/api/generateAnswer", { prompt: prompt1 + " " + prompt2 });

      const cleanedText = response.data.text.replace(/```json|```/g, '').trim();

      const data_ = JSON.parse(cleanedText);

      console.log("Parsed data:", data_);
      if (response.data && Array.isArray(data_)) {
        setQuestions(data_);
      } else {
        setQuestions([]);
      }

      setSelectedOptions({});
      setShowResults(false);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (questionId: string, option: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (selectedOptions[question.id] === question.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-center flex-wrap mb-4 space-x-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-blue-200 text-blue-600 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex-grow overflow-y-auto mb-4 relative">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <FaSpinner className="animate-spin text-4xl text-blue-500" />
            </div>
          ) : questions.length === 0 ? (
            <div className="text-center text-gray-500">No questions available. <p><i>please select any tag above</i></p></div>
          ) : (
            questions.map((question) => (
              <div key={question.id} className="mb-4">
                <p className="mb-2 text-lg font-semibold">{question.question}</p>
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-2 border rounded-md cursor-pointer ${selectedOptions[question.id] === option
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
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit Answers
          </button>
        </div>
      </div>
      {showResults && (
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-4">
          <h2 className="text-lg font-semibold mb-4">Results</h2>
          <p className="mb-4">Score: {getScore()} / {questions.length}</p>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <p className="font-semibold">{question.question}</p>
              <p>
                Your answer:{" "}
                <span
                  className={`font-semibold ${selectedOptions[question.id] === question.answer
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
                >
                  {selectedOptions[question.id]}
                </span>
              </p>
              {selectedOptions[question.id] !== question.answer && (
                <p className="text-gray-600">
                  Correct answer: <span className="font-semibold">{question.answer}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizMode;
