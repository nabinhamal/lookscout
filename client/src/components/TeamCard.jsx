import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";

const TeamCard = ({ imageUrl, title, description, icons }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 py-12">
      <div className=" p-4">
        <div className="flex   mb-4">
          <img src={imageUrl} alt={title} className="text-start w-[384px] h-[384px] object-contain" />
        </div>
        <div className=" text-start">
          <h3 className="text-2xl  font-bold">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
          {icons && (
            <div className="flex text-start mt-4 text-black">
              <FaFacebook className=" text-xl mr-4 hover:text-blue-700 cursor-pointer" />
              <FaTwitter className="text-xl mr-4 hover:text-blue-700 cursor-pointer" />
              <FaLinkedin className=" text-xl mr-4 hover:text-blue-700 cursor-pointer" />
              <FaTelegram className=" text-xl hover:text-blue-700 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
