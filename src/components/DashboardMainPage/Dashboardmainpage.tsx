import React from "react";
import Contentpage from "../ContentPage/Contentpage";
import Analysis from "../Analysis/Analysis";
import UserProfile from "../UserProfile/Userprofile";

const Dashboardmainpage = () => {
  return (
    <div className="pt-16 flex justify-center mt-6">
      <div className="hidden md:block fixed left-20 top-20">
        <UserProfile />
      </div>
      <div className="hidden md:block fixed right-20 top-20">
        <Analysis />
      </div>
      <div>
        <Contentpage />
      </div>
    </div>
  );
};

export default Dashboardmainpage;
