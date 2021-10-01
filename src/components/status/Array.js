import React from "react";

const Array = ({ array, colorizer }) => {
  return (
    <div className="row flex-wrap itmes-center justify-center space-x-1">
      <span className="font-medium">[</span>
      {array.map((item, index) => (
        <div
          key={index}
          className={`rounded-md text-center text-gray-900 ${colorizer(index)}`}
        >
          <p className="text-white">{item},</p>
        </div>
      ))}
      <span className="font-medium">]</span>
    </div>
  );
};

export default Array;
