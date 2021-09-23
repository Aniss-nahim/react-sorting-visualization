import React from "react";
import NumberBar from "./NumberBar";

const Visualizer = ({ animation, array }) => {
  const colorPicker = (index) => {
    switch (index) {
      case animation.pivot:
        return "bg-green-300";

      case animation.second:
        return "bg-blue-300";
      case animation.first:
        return "bg-red-300";

      default:
        return "bg-white";
    }
  };

  return (
    <div className="bg-gray-800 rounded-md shadow-xl p-2 w-full h-96">
      <div
        className={`flex items-end justify-around h-full space-x-1 overflow-y-hidden`}
      >
        {array.map((number, index) => (
          <NumberBar number={number} color={colorPicker(index)} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
