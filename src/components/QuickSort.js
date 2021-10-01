import React from "react";
import { useDispatch } from "react-redux";
import { createArray } from "../redux/action-creators/ArrayActions";
import Visualizer from "./Visualizer";
import QuickSortStatus from "./status/QuickSortStatus";
import useQuickSort from "../hooks/useQuickSort";

const QuickSort = () => {
  const [colorizer, startSorting] = useQuickSort();

  const dispatch = useDispatch();

  // Regenerate new random Array
  const updateArray = () => {
    dispatch(createArray());
  };

  return (
    <>
      <Visualizer
        colorizer={colorizer}
        regenerate={updateArray}
        start={startSorting}
      />
      <QuickSortStatus colorizer={colorizer} />
    </>
  );
};

export default QuickSort;
