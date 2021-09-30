import { useDispatch, useSelector } from "react-redux";
// import { delayAnimation } from "../helper/delayAnimation";
import {
  sortingArray,
  sortedArray,
  stopSortingArray,
} from "../redux/action-creators/ArrayActions";

const useAnimation = (sortingAlgorithm) => {
  const { array } = useSelector((state) => state.array);

  const dispatch = useDispatch();

  // config delay function
  // set the animation object on each delay
  // let delayFunc = delayAnimation(setAnimation, speed, setArraySnapshot);

  // trigger sorting function
  const startSorting = async () => {
    // isSorting set to true
    dispatch(sortingArray());
    await sort();
    dispatch(stopSortingArray());
  };

  // Sort the array using sorting algorithm
  const sort = async () => {
    await sortingAlgorithm(array, 0, array.length - 1, dispatch);
    await dispatch(sortedArray());
  };

  // // Rest all
  // const reset = (newArray, newSpeed) => {
  //   setIsSorting(false);
  //   setSpeed(newSpeed);
  //   setArraySnapshot([...newArray]);
  //   setAnimation({
  //     action: "Click the sort button to start quick sort",
  //     first: 0,
  //     pivotIndex: newArray.length - 1,
  //     second: newArray.length - 2,
  //   });
  // };

  return [startSorting];
};

export default useAnimation;
