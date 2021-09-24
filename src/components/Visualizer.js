import React from "react";
import NumberBar from "./NumberBar";

const Visualizer = ({ array, colorizer, children }) => {
  return (
    <div className="bg-gray-800 rounded-md shadow-md p-2 w-full h-96 relative">
      {children}
      <div
        className={`flex items-end justify-around h-full space-x-1 overflow-y-hidden`}
      >
        {array.map((number, index) => (
          <NumberBar number={number} color={colorizer(index)} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
