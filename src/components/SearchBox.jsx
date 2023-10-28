import React from "react";
import { BsSearch, BsFilterLeft } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="flex items-center h-20 px-8 bg-white rounded-lg w-160">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-3">
          <div>
            <div className="text-gray-500">
              <BsSearch size={20} />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="text-gray-500">
            <BsFilterLeft size={30} />
          </div>
          <span className="text-base font-medium text-gray-500">Filters</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
