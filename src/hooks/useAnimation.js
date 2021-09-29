import { useEffect, useState } from "react";
import { delayAnimation, clock } from "../helper/delayAnimation";

const useAnimation = (mainArray, initAnimation, sortingAlgorithm) => {
  const [arraySnapShot, setArraySnapshot] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [animation, setAnimation] = useState(initAnimation);
  const [speed, setSpeed] = useState(150);

  // config delay function
  // set the animation object on each delay
  let delayFunc = delayAnimation(setAnimation, speed, setArraySnapshot);

  // trigger sorting function
  const startSorting = () => {
    setIsSorting(true);
    sort();
  };

  useEffect(() => {
    delayFunc = delayAnimation(setAnimation, speed, setArraySnapshot);
  }, [speed]);

  // Sort the array using sorting algorithm
  const sort = () => {
    sortingAlgorithm(mainArray, 0, mainArray.length - 1, delayFunc());
  };

  // Rest all
  const reset = (newArray, newSpeed) => {
    setIsSorting(false);
    setSpeed(newSpeed);
    setArraySnapshot([...newArray]);
    setAnimation({
      action: "Click the sort button to start quick sort",
      first: 0,
      pivotIndex: newArray.length - 1,
      second: newArray.length - 2,
    });
  };

  return [animation, arraySnapShot, reset, startSorting, isSorting];
};

export default useAnimation;
