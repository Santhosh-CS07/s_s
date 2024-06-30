"use client";
import React, { useState } from "react";
import { apiCall, endpoints } from "@/apicalls";

const Register = (props: any) => {
  const { setForgetPassword, setLogin, setCreateAccount } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    city: "",
    state: "",
    verified: false,
    jobTitle: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: any = await apiCall(
        endpoints.createUser,
        "post",
        formData
      );
      if (response.status === 1) {
        setLogin(true);
        setForgetPassword(false);
        setCreateAccount(false);
      } else {
        setLogin(false);
        setForgetPassword(false);
        setCreateAccount(true);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show error message)
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin: any = () => {
    setLogin(true);
    setForgetPassword(false);
    setCreateAccount(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Create an Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <div className="relative col-span-1 md:col-span-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password *
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-3 pt-5 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            <span className="text-sm text-gray-500">
              {showPassword ? "Hide" : "Show"}
            </span>
          </button>
        </div>
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Mobile Number*
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-600"
          >
            What You Do*
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-600"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>

        {/* <div>
          <label
            htmlFor="verified"
            className="block text-sm font-medium text-gray-600"
          >
            Verified
          </label>
          <input
            type="checkbox"
            id="verified"
            name="verified"
            className="mt-1 p-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
          />
        </div> */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={handleLogin}
          className="text-sm text-blue-500 hover:underline bg-transparent border-none cursor-pointer"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;
