"use client";
import Dashboardmainpage from "@/components/DashboardMainPage/Dashboardmainpage";
import Getsupport from "@/components/GetSupport/Getsupport";
import Givesupport from "@/components/GiveSupport/Givesupport";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";

const Dashboard = () => {
  const [getSupport, setGetSupport] = useState(false);
  const [giveSupport, setGiveSupport] = useState(false);
  const [mainpage, setMainPage] = useState(true);
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar
          setGetSupport={setGetSupport}
          setGiveSupport={setGiveSupport}
          setMainPage={setMainPage}
        />
      </div>
      {mainpage ? <Dashboardmainpage /> : ""}
      <div className="pt-60 text-center text-4xl text-gray-400">
        {getSupport ? <Getsupport /> : ""}
        {giveSupport ? <Givesupport /> : ""}
      </div>
    </div>
  );
};

export default Dashboard;
