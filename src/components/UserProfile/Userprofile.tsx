import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCheckCircle, FaTimesCircle, FaDollarSign, FaCog, FaChartPie } from "react-icons/fa";

// Define the UserProfile component
const UserProfile = (props: any) => {
  const { name, position, location, lastLogin, interests, isVerified, handleLogout, experience } = props;
  // Helper function to determine the number of columns based on text length
  const getColumnClass = (text: any) => {
    if (text.length < 10) {
      return "col-span-1";
    } else if (text.length < 20) {
      return "col-span-2";
    } else {
      return "col-span-3";
    }
  };
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold mr-2">{name}</h2>
        {isVerified ? (
          <FaCheckCircle className="text-green-500" />
        ) : (
          <FaTimesCircle className="text-red-500" />
        )}
      </div>
      <p className="text-gray-600 mb-2">{position}</p>
      <p className="text-gray-600 mb-2">{experience}+ years of Experince</p>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-600 mb-2">Last Login: {lastLogin}</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {interests.map((interest: any, index: any) => (
          <span
            key={index}
            className={`bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-800 ${getColumnClass(interest)}`}
          >
            {interest}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <FaFacebook className="text-blue-600 cursor-pointer" />
        <FaTwitter className="text-blue-400 cursor-pointer" />
        <FaInstagram className="text-pink-500 cursor-pointer" />
        <FaLinkedin className="text-blue-800 cursor-pointer" />
      </div>
      <div className='mb-4'>
        <div className='flex'>
          <FaDollarSign className='mt-1' />
          <span className='ms-2'> Earnings</span>
        </div>
        <div className="flex">
          <FaCog className='mt-1' />
          <span className='ms-2'> Settings</span>
        </div>
        <div className="flex">
          <FaChartPie className='mt-1' />
          <span className='ms-2'> Quiz Analysis</span>
        </div>
      </div>
      <button
        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
export default UserProfile;