"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";
import { apiCall, endpoints } from "@/apicalls";

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
    if (!formData.course) newErrors.course = "Course is required";

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
            Thank you for registering for our free 3-days software training. We
            will contact you soon!
          </p>
          <p className="text-gray-700 mb-6 text-lg font-semibold">
            🚀{" "}
            <span className="text-green-600">
              Spread the word and help your friends!
            </span>{" "}
            Share this amazing opportunity to join our free 3-days software
            training. Let’s get them started on their software journey too!
          </p>

          <div className="flex justify-center mb-6">
            <a
              href="https://api.whatsapp.com/send?text=Check%20out%20this%20free%203-days%20software%20training%20opportunity%20from%20[YourCompanyName]!%20We%20just%20registered%20and%20it%20looks%20great!%20https://example.com"
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
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to Our{" "}
            <span className="text-white bg-blue-900 py-0 px-2 rounded">
              Free 3-Days
            </span>
          </h1>
          <h3 className="text-4xl font-bold text-center mb-4">
            Software Training!
          </h3>
          <p className="text-center mb-4 text-gray-700">
            Dive deep into <strong> software development</strong>,{" "}
            <strong>AI/ML integration</strong>, and explore various programming
            languages.
          </p>
          <p className="text-center mb-6 text-gray-700">
            <span className="text-lg font-semibold text-red-600">
              Limited Time Offer:
            </span>
            <span className="line-through text-gray-500"> 1999/-</span>
            <span className="text-4xl font-bold text-green-600 animate-collapse-and-join">
              Free Now!
            </span>
          </p>

          <h2 className="text-2xl font-semibold text-center mb-2">
            What You'll Learn
          </h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Introduction to Software Development</li>
            <li>Understanding Front-end and Back-end Technologies</li>
            <li>Basics of Full Stack Development</li>
            <li>Integration of AI/ML with Software</li>
            <li>Programming Languages: TypeScript, Python, Java, etc.</li>
            <li>Building Your First Application</li>
            <li>Career Paths in Technology</li>
          </ul>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                type="tel"
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
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Interested Software Field (or) Course
              </label>
              <input
                type="text"
                id="course"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your Interested Software Field"
                value={formData.course}
                onChange={handleInputChange}
              />
              {errors.course && <p className="text-red-600">{errors.course}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition duration-300"
            >
              Register Now
            </button>
          </form>

          <p className="text-center mt-6 text-gray-700">
            For any inquiries, please call:{" "}
            <span className="font-bold text-blue-900">7093946332</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;