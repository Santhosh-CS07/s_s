"use client";
import React, { useState } from "react";

const Register = (props: any) => {
  const { setForgetPassword, setLogin, setCreateAccount } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin: any = () => {
    setLogin(true);
    setForgetPassword(false);
    setCreateAccount(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-100">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create an account
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-600"
            >
              Username *
            </label>
            <input
              type="tel"
              id="username"
              name="username"
              // placeholder="mobile, username, email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password *
            </label>
            <input
              type={"password"}
              id="password"
              name="password"
              // placeholder="enter your password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Re-Enter Password *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              // placeholder="enter your password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 py-8 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              <span className="text-sm text-gray-500">
                {showPassword ? "Hide" : "Show"}
              </span>
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={handleLogin}
            className="text-sm text-blue-500 hover:underline bg-transparent border-none cursor-pointer"
          >
            Already have an account ? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
