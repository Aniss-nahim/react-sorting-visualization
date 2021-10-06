import React from "react";
import { useSelector } from "react-redux";
import Array from "./Array";

const BubbleSortStatus = ({ colorizer }) => {
  const { array } = useSelector((state) => state.array);
  const { animation } = useSelector((state) => state.animation);
  return (
    <div className="bg-gray-900 border border-gray-600 text-white col-span-5 lg:col-span-2 flex flex-col justify-around rounded-md shadow-lg p-3">
      <Array array={array} colorizer={colorizer} />
      <div className="pt-2 space-y-3">
        <h1 className="text-center uppercase font-bold text-xl">Status</h1>
        <p className="text-lg text-center font-medium text-green-400 uppercase">
          {animation?.action}
        </p>
        <div className="grid grid-cols-2 gap-3 gap-y-3 text-center">
          <p>
            <span className="font-medium">First index : </span>
            <span
              className={`rounded-md p-1 text-white ${colorizer(
                animation?.first || -1
              )}`}
            >
              {animation?.first}
            </span>
          </p>
          <p>
            <span className="font-medium">Second index : </span>
            <span
              className={`rounded-md p-1 text-white ${colorizer(
                animation?.second || -1
              )}`}
            >
              {animation?.second}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortStatus;
