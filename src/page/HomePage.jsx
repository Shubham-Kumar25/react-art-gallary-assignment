import React from "react";
import LeftDiv from "../components/LeftDiv";
import MiddleDiv from "../components/MiddleDiv";
import RightDiv from "../components/RightDiv";

const HomePage = () => {
  return (
    <div className="flex justify-center px-40 py-10 gap-7">
      <LeftDiv />
      <MiddleDiv />
      <RightDiv />
    </div>
  );
};

export default HomePage;
