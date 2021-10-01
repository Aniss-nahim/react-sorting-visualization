import React from "react";
import { useSelector } from "react-redux";
import NumberBar from "./NumberBar";

const Visualizer = ({ colorizer, children }) => {
  const { array, isSorted } = useSelector((state) => state.array);
  return (
    <div className="col-span-5 lg:col-span-3 m-auto bg-gray-900 border border-gray-600 rounded-md shadow-md p-2 w-full h-96 relative">
      {children}
      <div className={`flex items-end justify-around h-full space-x-1`}>
        {array.map((number, index) => (
          <NumberBar
            number={number}
            color={isSorted ? "bg-green-400" : colorizer(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
