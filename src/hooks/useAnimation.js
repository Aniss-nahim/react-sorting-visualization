import { useEffect, useState } from "react";
import delayAnimation from "../helper/delayAnimation";

const useAnimation = (mainArray, initAnimation, speed, sortingAlgorithm) => {
  const [arraySnapShot, setArraySnapshot] = useState(mainArray);
  const [isSorting, setIsSorting] = useState(false);
  const [animation, setAnimation] = useState(initAnimation);

  const [animationClock, setAnimationClock] = useState(1);

  // config delay function
  // set the animation object on each delay
  const delayFunc = delayAnimation(
    setAnimation,
    animationClock * speed,
    setArraySnapshot,
    setAnimationClock
  );

  // trigger sorting function
  const startSorting = () => {
    setIsSorting(true);
  };

  // Sort the array using sorting algorithm
  const sort = () => {
    sortingAlgorithm(mainArray, 0, mainArray.length - 1, delayFunc);
  };

  useEffect(() => {
    if (isSorting) {
      sort();
    }
    // eslint-disable-next-line
  }, [isSorting]);

  // Rest all Animations
  const resetAnimation = (newArray) => {
    setArraySnapshot(newArray);
    setIsSorting(false);
  };

  return [animation, arraySnapShot, resetAnimation, startSorting, isSorting];
};

export default useAnimation;
