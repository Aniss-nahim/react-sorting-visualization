import React from "react";
import { useDispatch } from "react-redux";
import useBubbleSort from "../hooks/useBubbleSort";
import BubbleSortStatus from "./status/BubbleSortStatus";
import Visualizer from "./Visualizer";
import { createArray } from "../redux/action-creators/ArrayActions";

const BubbleSort = () => {
  const [colorizer, startSorting] = useBubbleSort();

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
      <BubbleSortStatus colorizer={colorizer} />
    </>
  );
};

export default BubbleSort;
