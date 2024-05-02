import React from "react";

const Card = ({ title, items }) => {
  return (
    <div className="lg:w-1/5 md:w-full">
      <h1 className="text-black text-lg font-semibold">{title}</h1>
      <ul className="text-black">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
