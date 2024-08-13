"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";
import { apiCall, endpoints } from "@/apicalls";
import { FaPhone } from "react-icons/fa";

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    education: "",
    mobileNumber: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    education: "",
    mobileNumber: "",
    email: "",
    course: "",
  });

  const [paymentStatus, setPaymentStatus] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.education) newErrors.education = "Education is required";
    if (!formData.mobileNumber)
      newErrors.mobileNumber = "Mobile Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.course) newErrors.course = "Transaction ID is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response: any = await apiCall(
          endpoints.createDemoUsers,
          "post",
          formData
        );
        if (response.status === 2) {
          alert("User alredy Registered!");
        } else {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center p-6">
      {isSubmitted ? (
        <div className="max-w-3xl bg-white rounded-lg shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Registration Successful!
          </h1>
          <p className="text-gray-700 mb-6">
            Thank you for registering for our 2-days software training. We
            will contact you soon!
          </p>
          <p className="text-gray-700 mb-6 text-lg font-semibold">
            🚀{" "}
            <span className="text-green-600">
              Spread the word and help your friends!
            </span>{" "}
            Share this amazing opportunity to join our 2-days software
            training. Let’s get them started on their software journey too!
          </p>

          <div className="flex justify-center mb-6">
            <a
              href="https://api.whatsapp.com/send?text=Check%20out%20this%20free%203-days%20software%20training%20opportunity%20from%20ekathrass.com!%20We%20just%20registered%20and%20it%20looks%20great!%20https://www.ekathrass.com/full-stack-demo-register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 transition duration-300"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v18H3V3z"
                />
              </svg>
              Share on WhatsApp
            </a>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition duration-300"
          >
            Register Another
          </button>
        </div>
      ) : (
        <div className="max-w-3xl bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-4 px-4 sm:px-6 md:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-normal mb-2">
              Ask All your Question in
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl bg-blue-900 mt-2 py-2 px-6 rounded whitespace-nowrap inline-block">
              2-Days Workshop
            </h1>
            <h3 className="text-3xl font-bold mt-4">
              <span className="text-green-600">Understand</span>{" "}
              Software Development
            </h3>
            <h3>&</h3>
            <h3 className="text-2xl">
              Build your 1st Project in{" "}
              <span className="bg-blue-900 text-white px-5 py-2">React JS</span>
            </h3>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-md shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

              <div className="flex-1 mb-4 md:mb-0">
                <p className="text-xl font-semibold text-gray-800 mb-2">Workshop Timing</p>
                <div className="text-gray-700">
                  <p className="text-lg font-medium text-gray-800 mb-1">
                    <span className="font-semibold text-blue-600">Saturday:</span> 7:00 PM - 8:30 PM
                  </p>
                  <p className="text-lg font-medium text-gray-800 mb-1">
                    <span className="font-semibold text-blue-600">Sunday:</span> 7:00 PM - 8:30 PM
                  </p>
                </div>
              </div>

              <div className="flex-1 text-center">
                <p className="text-gray-700 mb-4">
                  <span className="text-lg font-semibold text-red-600">
                    Limited Time Offer:
                  </span>
                  <span className="line-through text-gray-500"> 1999/-</span>
                </p>
                <div className="text-4xl font-bold bg-yellow-400 text-blue-900 px-6 py-2 rounded-full inline-block">
                  Just 329/-
                </div>
              </div>

            </div>
          </div>


          <h2 className="text-2xl font-semibold text-center my-2">
            What You will Learn
          </h2>
          <ul className="list-disc list-inside mb-6 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
            <li className="mb-2">
              Introduction to
              Software
              Development
            </li>
            <li className="mb-2">
              Understanding Front-end and Back-end
              Technologies
            </li>
            <li className="mb-2">
              What is
              React App
              with TypeScript.
            </li>
            <li className="mb-2">
              How to Build Your First Application -
              Real Time Project
            </li>
            <li className="mb-2">
              What all are
              Career Paths
              in Technology
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-4 p-4 border rounded-md bg-gradient-to-r from-blue-100 to-green-100">
            <span className="mr-4">
              <input onChange={() => { setPaymentStatus(!paymentStatus) }} type="checkbox" className="w-8 h-8 accent-purple-700 cursor-pointer" />
            </span>
            <a
              className="flex items-center py-2 px-4 bg-purple-700 text-white font-semibold rounded-md shadow-sm hover:bg-purple-800 transition duration-300"
            >
              <FaPhone className="mr-2 text-xl" />
              Pay with PhonePe
            </a>
            <h1 className="text-2xl sm:text-4xl ms-6 mt-2 sm:mt-0">7093946332</h1>

          </div>
          <em className="p-6">After payment please do check the above checkbox to fill the data</em>


          {paymentStatus && <>
            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <p className="text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="education"
                  className="block text-sm font-medium text-gray-700"
                >
                  Highest Education Qualification
                </label>
                <input
                  type="text"
                  id="education"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Your Highest Education Qualification"
                  value={formData.education}
                  onChange={handleInputChange}
                />
                {errors.education && (
                  <p className="text-red-600">{errors.education}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
                {errors.mobileNumber && (
                  <p className="text-red-600">{errors.mobileNumber}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transaction ID
                </label>
                <input
                  type="text"
                  id="course"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Transaction ID"
                  value={formData.course}
                  onChange={handleInputChange}
                />
                {errors.course && (
                  <p className="text-red-600">{errors.course}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition duration-300"
              >
                Register Now
              </button>
            </form>
          </>}


        </div>
      )}
    </div>
  );
};

export default LandingPage;
