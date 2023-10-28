import React from "react";
import SearchBox from "./SearchBox";
import PostData from "./PostData";
import Carousel from "./Carousel";

const MiddleDiv = () => {
  return (
    <div className="flex flex-col w-[640px] gap-7">
      <SearchBox />
      <PostData />
      <Carousel />
    </div>
  );
};

export default MiddleDiv;
