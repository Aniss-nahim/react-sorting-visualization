import React from "react";
import { useDispatch } from "react-redux";
import useHeapSort from "../hooks/useHeapSort";
import Visualizer from "./Visualizer";
import { createArray } from "../redux/action-creators/ArrayActions";
import HeapSortStatus from "./status/HeapSortStatus";

const HeapSort = () => {
  const [colorizer, startSorting] = useHeapSort();

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
      <HeapSortStatus colorizer={colorizer} />
    </>
  );
};

export default HeapSort;
