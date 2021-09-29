import React from "react";

const QuickSortStatus = ({ animation, colorizer, array }) => {
  return (
    <div className="bg-gray-900 border border-gray-600 text-white col-span-5 lg:col-span-2 flex flex-col justify-around rounded-md shadow-lg p-3">
      <div className="row flex-wrap itmes-center justify-center space-x-1">
        <span className="font-medium">[</span>
        {array.map((item, index) => (
          <div
            key={index}
            className={`rounded-md text-center text-gray-900 ${colorizer(
              index
            )}`}
          >
            <p className="text-white">{item},</p>
          </div>
        ))}
        <span className="font-medium">]</span>
      </div>
      <div className="pt-2 space-y-3">
        <h1 className="text-center uppercase font-bold text-xl">Status</h1>
        <p className="text-lg text-center font-medium text-green-400 uppercase">
          {animation.action}
        </p>
        <div className="grid grid-cols-2 gap-3 gap-y-3 text-center">
          <p>
            <span className="font-medium">Pivot index : </span>
            {animation.pivotIndex}
          </p>
          <p>
            <span className="font-medium">Pivot item : </span>
            <span
              className={`rounded-md p-1 text-white ${colorizer(
                animation.pivotIndex
              )}`}
            >
              {array[animation.pivotIndex]}
            </span>
          </p>
          <p>
            <span className="font-medium">First index : </span>
            <span
              className={`rounded-md p-1 text-white ${colorizer(
                animation.first
              )}`}
            >
              {animation.first}
            </span>
          </p>
          <p>
            <span className="font-medium">Second index : </span>
            <span
              className={`rounded-md p-1 text-white ${colorizer(
                animation.second
              )}`}
            >
              {animation.second}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickSortStatus;
