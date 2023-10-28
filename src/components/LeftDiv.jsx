import React from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const LeftDiv = () => {
  return (
    <div className="flex flex-col gap-7">
      <Logo />
      <Sidebar />
      <div className="flex justify-between w-64">
        <p className="text-[10px] text-gray-500">2023@LogoName</p>
        <p className="text-[10px] text-gray-500">Developed by Shubham Kumar</p>
      </div>
    </div>
  );
};

export default LeftDiv;
