import React from "react";
import { useSelector } from "react-redux";
import { ChartBarIcon, RefreshIcon } from "@heroicons/react/solid";
import NumberBar from "./NumberBar";

const Visualizer = ({ colorizer, regenerate, start }) => {
  const { array, isSorted, isSorting } = useSelector((state) => state.array);
  return (
    <div className="col-span-5 lg:col-span-3 m-auto bg-gray-900 border border-gray-600 rounded-md shadow-md p-2 w-full h-96 relative">
      {!isSorting && (
        <div className="flex justify-center items-center space-x-3 rounded-md absolute top-0 left-0 h-full w-full bg-gray-500 opacity-0 hover:opacity-100 hover:bg-opacity-50">
          <button
            type="button"
            className="btn green font-medium uppercase"
            onClick={start}
          >
            <ChartBarIcon className="h-5 w-5 inline-block -mt-1" />
            Sort
          </button>
          <button
            type="button"
            className="btn gray font-medium uppercase"
            onClick={regenerate}
          >
            <RefreshIcon className="h-5 w-5 inline-block -mt-1" />
            Regenerate
          </button>
        </div>
      )}
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
