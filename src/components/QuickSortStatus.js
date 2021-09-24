import React from "react";

const QuickSortStatus = ({ animation, colorizer, array }) => {
  return (
    <div className="flex flex-col border rounded-md shadow-lg p-3 divide-y space-y-2 self-start">
      <div className="row flex-wrap itmes-center justify-center space-x-1">
        <span className="font-medium">[</span>
        {array.map((item, index) => (
          <div key={index} className={`rounded-md ${colorizer(index)}`}>
            <p>{item},</p>
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
