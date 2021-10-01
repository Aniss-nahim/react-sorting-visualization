import React from "react";
import { useDispatch } from "react-redux";
import { createArray } from "../redux/action-creators/ArrayActions";
import Visualizer from "./Visualizer";
import MergeSortStatus from "./status/MergeSortStatus";
import useMergeSort from "../hooks/useMergeSort";

const MergeSort = () => {
  const [colorizer, startSorting] = useMergeSort();

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
      <MergeSortStatus colorizer={colorizer} />
    </>
  );
};

export default MergeSort;
