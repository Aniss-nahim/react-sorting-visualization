import { mergeSort } from "../algorithms";
import useAnimation from "./useAnimation";

const useMergeSort = (array, speed) => {
  // Initial Animation
  const initAnimation = {
    action: "Click the sort button to start Merge sort",
    first: 0,
    second: 1,
  };

  const [animation, arraySnapShot, setArraySnapshot, startSorting, isSorting] =
    useAnimation(array, initAnimation, speed, mergeSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation.first:
        return "bg-green-300";
      case animation.second:
        return "bg-blue-300";
      default:
        return "";
    }
  };

  return [
    animation,
    colorizer,
    arraySnapShot,
    setArraySnapshot,
    startSorting,
    isSorting,
  ];
};

export default useMergeSort;
