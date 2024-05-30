import React from "react";
import Contentpage from "../ContentPage/Contentpage";
import Analysis from "../Analysis/Analysis";
import UserProfile from "../UserProfile/Userprofile";

const Dashboardmainpage = () => {
  const handleLogout = () => {
    alert("Logout clicked");
  };
  return (
    <div className=" flex justify-evenly	">
      <div className="hidden md:block">
        <UserProfile
          name="santhosh naik"
          position="Software Engineer"
          location="New York, USA"
          lastLogin="2024-05-29"
          experience="3"
          interests={["Coding", "HTML", "Computer Networks", "java", "spring", "sql"]}
          isVerified={true}
          handleLogout={handleLogout}
        />
      </div>
      <div>
        <Contentpage />
      </div>
      <div className="hidden md:block">
        <Analysis />
      </div>
    </div>
  );
};

export default Dashboardmainpage;
