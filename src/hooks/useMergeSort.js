import { useEffect, useState } from "react";
import { mergeSort } from "../algorithms";
import delay from "../helper/delay";

const useMergeSort = (array, speed) => {
  const [animation, setAnimation] = useState({
    action: "Click the sort button to start Merge sort",
    first: 0,
    second: 1,
  });

  const [isSorting, setIsSorting] = useState(false);
  const [arraySnapShot, setArraySnapshot] = useState(array);

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

  // Merge Sort the array
  const sort = () => {
    mergeSort(array, 0, array.length - 1, delayFunc);
  };

  // trigger sorting function
  const startSorting = () => {
    setIsSorting(true);
  };

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation.first:
        return "bg-green-300";
      case animation.second:
        return "bg-blue-300";
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

export default useMergeSort;
