import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnimation } from "../redux/action-creators/AnimationActions";
import useAnimation from "./useAnimation";
import { mergeSort } from "../algorithms";

const useMergeSort = () => {
  const { isSorted } = useSelector((state) => state.array);
  const { animation } = useSelector((state) => state.animation);

  const dispatch = useDispatch();

  useEffect(() => {
    // Initial animation state for merge sort
    if (!isSorted) {
      dispatch(
        updateAnimation({
          action: "Ready to sort",
          first: 0,
          second: 1,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSorted]);

  const [startSorting] = useAnimation(mergeSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation?.first:
        return "bg-red-400";
      case animation?.second:
        return "bg-blue-400";
      default:
        return "";
    }
  };

  return [colorizer, startSorting];
};

export default useMergeSort;
