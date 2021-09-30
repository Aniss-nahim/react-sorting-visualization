import React from "react";
import useMergeSort from "../hooks/useMergeSort";
import MergeSortStatus from "./status/MergeSortStatus";

const MergeSort = ({ array, length, updateApp, speed }) => {
  const [
    animation,
    colorizer,
    arraySnapShot,
    setArraySnapshot,
    startSorting,
    isSorting,
  ] = useMergeSort(array, 100);

  // MergeSort Status props
  const statusProps = {
    animation,
    colorizer,
    arraySnapShot,
  };

  return (
    <div>
      <MergeSortStatus {...statusProps} />
    </div>
  );
};

export default MergeSort;
