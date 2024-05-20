import Analysis from "@/components/Analysis/Analysis";
import Authentication from "@/components/Authentication/Authentication";
import Contentpage from "@/components/ContentPage/Contentpage";
import Navbar from "@/components/Navbar/Navbar";
import Userprofile from "@/components/UserProfile/Userprofile";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-16 flex justify-center my-6">
        <div className="hidden md:block fixed left-20 top-20">
          <Userprofile />
        </div>
        <div className="hidden md:block fixed right-20 top-20">
          <Analysis />
        </div>
        <div className="ml-20 mr-20">
          <Contentpage />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
