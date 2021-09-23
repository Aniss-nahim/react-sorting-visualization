import { useState, useEffect } from "react";
import { quickSort } from "../algorithms";
import delay from "../helper/delay";

const useQuickSort = (array, speed) => {
  const [arraySnapShot, setArraySnapshot] = useState([...array]);
  const [animation, setAnimation] = useState({
    pivot: array.length - 1,
    action: "SORTING",
    first: 0,
    second: array.length - 2,
  });
  const [sortTrigger, setsortTrigger] = useState(false);

  const animiationEffect = (animation) => {
    setAnimation(animation);
  };

  const delayFunc = delay(animiationEffect, speed, setArraySnapshot);

  const startSorting = () => {
    setsortTrigger(true);
  };

  const sort = () => {
    quickSort(array, 0, array.length - 1, delayFunc);
  };

  useEffect(() => {
    if (sortTrigger) {
      sort();
    }
    // eslint-disable-next-line
  }, [sortTrigger]);

  return [animation, arraySnapShot, startSorting];
};

export default useQuickSort;
