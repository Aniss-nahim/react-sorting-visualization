import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnimation } from "../redux/action-creators/AnimationActions";
import { quickSort } from "../algorithms";
import useAnimation from "./useAnimation";

const useQuickSort = () => {
  const { array, isSorted } = useSelector((state) => state.array);
  const { animation } = useSelector((state) => state.animation);
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial animation state for quick sort
    if (!isSorted) {
      dispatch(
        updateAnimation({
          pivotIndex: array.length - 1,
          action: "Ready to sort",
          first: 0,
          second: array.length - 2,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSorted]);

  const [startSorting] = useAnimation(quickSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation?.pivotIndex:
        return "bg-green-400";
      case animation?.second:
        return "bg-blue-400";
      case animation?.first:
        return "bg-red-400";
      default:
        return "";
    }
  };

  return [colorizer, startSorting];
};

export default useQuickSort;
