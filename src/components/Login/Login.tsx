"use client";
import { apiCall, endpoints } from "@/apicalls";
import React, { useState, useEffect } from "react";

const Login = (props: any) => {
  const { setCreateAccount, setForgetPassword, setLogin } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleForgetPassword: any = () => {
    setForgetPassword(true);
    setCreateAccount(false);
    setLogin(false);
  };

  const handleCreateAccount: any = () => {
    setCreateAccount(true);
    setForgetPassword(false);
    setLogin(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginUser: any = async (e: any) => {
    e.preventDefault();
    try {
      const response = await apiCall(endpoints.getUser, "get", {
        params: {
          mobileNumber: username,
          password: password,
        },
      });
      if (response.status === 1) {
        window.location.href = "/dashboard";
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid username or password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loginUser(e);
    }
  };

  return (
    <div className="bg-white sm:my-12 p-8 rounded-lg shadow-md w-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Sign{" "}
        <span className="text-white bg-blue-900 py-0 px-2 rounded">In</span>
      </h2>
      {errorMessage && (
        <div className="mb-4 text-red-600 text-center">{errorMessage}</div>
      )}
      <form onSubmit={loginUser}>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-600"
          >
            Mobile Number *
          </label>
          <input
            type="tel"
            id="username"
            name="username"
            value={username}
            onKeyDown={handleKeyDown}
            required
            onChange={(e) => setUsername(e.target.value)}
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
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            value={password}
            onKeyDown={handleKeyDown}
            onChange={(e) => setPassword(e.target.value)}
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
        <div className="text-right mb-4">
          <button
            onClick={handleForgetPassword}
            className="text-sm text-blue-900 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 font-bold text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={handleCreateAccount}
          className="text-sm text-blue-900 hover:underline bg-transparent border-none cursor-pointer"
        >
          Create an Account?
        </button>
      </div>
    </div>
  );
};

export default Login;
