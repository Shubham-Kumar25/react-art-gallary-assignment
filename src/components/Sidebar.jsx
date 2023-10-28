import React from "react";
import {
  FaHome,
  FaBell,
  FaShoppingCart,
  FaComment,
  FaWallet,
  FaClipboardList,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-64 text-base font-semibold text-gray-400 bg-white rounded-lg h-[700px]">
      <div className="p-9">
        <ul>
          <li className="flex items-center mb-8 font-bold text-black ">
            <FaHome className="mr-4" /> Home
          </li>
          <li className="flex items-center mb-8">
            <FaBell className="mr-4" /> Notifications
          </li>
          <li className="flex items-center mb-8">
            <FaShoppingCart className="mr-4" /> Shop
          </li>
          <li className="flex items-center mb-8">
            <FaComment className="mr-4" /> Conversation
          </li>
          <li className="flex items-center mb-8">
            <FaWallet className="mr-4" /> Wallet
          </li>
          <li className="flex items-center mb-8">
            <FaClipboardList className="mr-4" /> Subscription
          </li>
          <li className="flex items-center mb-8">
            <FaUser className="mr-4" /> My Profile
          </li>
          <li className="flex items-center">
            <FaCog className="mr-4" /> Setting
          </li>
        </ul>
      </div>
      <div className="p-9">
        <div className="flex text-[#88C2BB] items-center">
          <FaSignOutAlt className="mr-4" /> Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
