import React from "react";
import { FaEllipsisV, FaHeart, FaComment, FaShare } from "react-icons/fa";

function Post({ post }) {
  const {
    profileImage,
    username,
    name,
    postText,
    postImage,
    likes,
    comments,
    shares,
  } = post;

  return (
    <div className="bg-white rounded-md rounded-lg shadow-md mb-7 p-7 w-[640px] h-160">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="Profile Picture"
          className="object-contain w-12 h-12 mr-4 rounded-lg"
        />
        <div>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-gray-600">@{username}</p>
        </div>
        <div className="ml-auto">
          <FaEllipsisV size={20} className="text-gray-600" />
        </div>
      </div>

      <div className="mt-7">
        <p>
          {postText}
          <a href="/" className="text-[#FF5E8A]">
            Read More
          </a>
        </p>
      </div>
      <div className="w-120">
        <img
          src={postImage}
          alt="Post Image"
          className="object-contain mt-7 w-120 "
        />
      </div>

      <hr className="border-t border-gray-300 mt-7" />

      <div className="flex items-center mt-7">
        <div className="flex items-center space-x-2">
          <FaHeart className="text-red-500" />
          <p>{likes} Likes</p>
        </div>
        <div className="flex items-center ml-6 space-x-2">
          <FaComment className="text-blue-500" />
          <p>{comments} Comments</p>
        </div>
        <div className="flex items-center ml-6 space-x-2">
          <FaShare className="text-green-500" />
          <p>{shares} Shares</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
