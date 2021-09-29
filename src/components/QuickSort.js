import React, { useEffect } from "react";
import useQuickSort from "../hooks/useQuickSort";
import QuickSortStatus from "./status/QuickSortStatus";
import { ChartBarIcon, RefreshIcon } from "@heroicons/react/solid";
import Visualizer from "./Visualizer";

const QuickSort = ({ array, length, speed, updateApp }) => {
  const [animation, colorizer, arraySnapShot, reset, startSorting, isSorting] =
    useQuickSort(array);

  // QuickSort Status props
  const statusProps = {
    array: arraySnapShot,
    animation,
    colorizer,
  };

  useEffect(() => {
    reset(array, speed);
  }, [array]);

  const generateNewArray = () => {
    updateApp(length);
    reset(array, speed);
  };

  return (
    <>
      <Visualizer array={arraySnapShot} colorizer={colorizer}>
        {!isSorting && (
          <div className="flex justify-center items-center space-x-3 rounded-md absolute top-0 left-0 h-full w-full bg-gray-500 opacity-0 hover:opacity-100 hover:bg-opacity-50">
            <button
              type="button"
              className="btn green font-medium uppercase"
              onClick={startSorting}
            >
              <ChartBarIcon className="h-5 w-5 inline-block -mt-1" />
              Sort
            </button>
            <button
              type="button"
              className="btn gray font-medium uppercase"
              onClick={generateNewArray}
            >
              <RefreshIcon className="h-5 w-5 inline-block -mt-1" />
              Regenerate
            </button>
          </div>
        )}
      </Visualizer>
      <QuickSortStatus {...statusProps} />
    </>
  );
};

export default QuickSort;
