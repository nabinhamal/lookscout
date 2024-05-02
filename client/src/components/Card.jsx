import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Card = ({ imageUrl, title, description, showButton }) => {
  return (
    <div className='ml-0'>
      <div className="bg-white p-4 flex items-start justify-start">
        <div className="px-10">
          <div className="bg-blue-700 rounded-full overflow-hidden mb-4 w-10 h-10 flex items-center justify-center">
            <img src={imageUrl} alt={title} className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-gray-400 mt-3 text-justify">{description}</p>
          {showButton && (
            <button className="flex items-center mt-4  text-blue-500  rounded-md hover:underline">
              Learn More <IoIosArrowRoundForward className="ml-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
