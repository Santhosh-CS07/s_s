"use client";
import Dashboardmainpage from "@/components/DashboardMainPage/Dashboardmainpage";
import Navbar from "@/components/DashboardNavbar/Navbar";
import React, { useState } from "react";

const Dashboard = () => {
  const [mainpage, setMainPage] = useState(true);
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      {mainpage ? <Dashboardmainpage /> : ""}
    </div>
  );
};

export default Dashboard;
