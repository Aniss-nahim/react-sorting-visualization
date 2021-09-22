import React from "react";
import useQuikSort from "../hooks/useQuikSort";
import NumberBar from "./NumberBar";

const Visualizer = ({ array }) => {
  //   const [animation] = useQuikSort(array, 2000);
  return (
    <div className="bg-gray-800 rounded-md shadow-xl p-2 w-full h-96">
      <div
        className={`flex items-end justify-around h-full space-x-1 overflow-y-hidden`}
      >
        {array.map((number, index) => (
          <NumberBar number={number} color="bg-green-300" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
