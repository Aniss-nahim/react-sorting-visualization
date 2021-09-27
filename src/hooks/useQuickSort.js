import { quickSort } from "../algorithms";
import useAnimation from "./useAnimation";

const useQuickSort = (array, speed) => {
  // Initial animation
  const initAnimation = {
    pivotIndex: array.length - 1,
    action: "Click the sort button to start quick sort",
    first: 0,
    second: array.length - 2,
  };

  const [animation, arraySnapShot, setArraySnapshot, startSorting, isSorting] =
    useAnimation(array, initAnimation, speed, quickSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation.pivotIndex:
        return "bg-green-300";
      case animation.second:
        return "bg-blue-300";
      case animation.first:
        return "bg-red-300";
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

export default useQuickSort;
