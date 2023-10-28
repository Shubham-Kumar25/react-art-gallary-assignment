import React from "react";
import Seller from "./Seller";
import ArtistSection from "./ArtistSection";

const RightDiv = () => {
  return (
    <div className="flex flex-col gap-7">
      <Seller />
      <ArtistSection />
      <div className="flex justify-between w-64">
        <p className="text-[10px] text-gray-500">Privacy</p>
        <p className="text-[10px] text-gray-500">Terms of Service</p>
        <p className="text-[10px] text-gray-500">Cookiee Notice </p>
      </div>
    </div>
  );
};

export default RightDiv;
