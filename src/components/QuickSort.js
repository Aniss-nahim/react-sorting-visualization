import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChartBarIcon, RefreshIcon } from "@heroicons/react/solid";
import { createArray } from "../redux/action-creators/ArrayActions";
import Visualizer from "./Visualizer";
import QuickSortStatus from "./status/QuickSortStatus";
import useQuickSort from "../hooks/useQuickSort";

const QuickSort = () => {
  const { isSorting } = useSelector((state) => state.array);
  const [colorizer, startSorting] = useQuickSort();

  const dispatch = useDispatch();

  // Regenerate new random Array
  const updateArray = () => {
    dispatch(createArray());
  };

  return (
    <>
      <Visualizer colorizer={colorizer}>
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
              onClick={updateArray}
            >
              <RefreshIcon className="h-5 w-5 inline-block -mt-1" />
              Regenerate
            </button>
          </div>
        )}
      </Visualizer>
      <QuickSortStatus colorizer={colorizer} />
    </>
  );
};

export default QuickSort;
