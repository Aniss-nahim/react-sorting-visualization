import { useState, useEffect } from "react";
import { quickSort } from "../algorithms";
import delay from "../helper/delay";

const useQuickSort = (array, speed, length = 20, min = 5, max = 100) => {
  const [arraySnapShot, setArraySnapshot] = useState(array);

  const [isSorting, setIsSorting] = useState(false);

  const [animation, setAnimation] = useState({
    pivotIndex: array.length - 1,
    action: "Click the sort button to start quick sort",
    first: 0,
    second: array.length - 2,
  });

  useEffect(() => {
    if (isSorting) {
      sort();
    }
    // eslint-disable-next-line
  }, [isSorting]);

  // update Animation state
  const animiationEffect = (animation) => {
    setAnimation(animation);
  };

  // config delay function
  const delayFunc = delay(animiationEffect, speed, setArraySnapshot);

  // Quick sort
  const sort = () => {
    quickSort(array, 0, array.length - 1, delayFunc);
  };

  // trigger sorting function
  const startSorting = () => {
    setIsSorting(true);
  };

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
        return "bg-white";
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
