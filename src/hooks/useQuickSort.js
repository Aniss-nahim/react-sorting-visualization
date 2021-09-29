import { quickSort } from "../algorithms";
import useAnimation from "./useAnimation";

const useQuickSort = (array) => {
  // Initial animation
  const initAnimation = {
    pivotIndex: array.length - 1,
    action: "Click the sort button to start quick sort",
    first: 0,
    second: array.length - 2,
  };

  const [animation, arraySnapShot, reset, startSorting, isSorting] =
    useAnimation(array, initAnimation, quickSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation.pivotIndex:
        return "bg-green-400";
      case animation.second:
        return "bg-blue-400";
      case animation.first:
        return "bg-red-400";
      default:
        return "";
    }
  };

  return [animation, colorizer, arraySnapShot, reset, startSorting, isSorting];
};

export default useQuickSort;
