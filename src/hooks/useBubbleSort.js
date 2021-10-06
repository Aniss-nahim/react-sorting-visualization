import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useAnimation from "./useAnimation";
import { bubbleSort } from "../algorithms";
import { updateAnimation } from "../redux/action-creators/AnimationActions";

const useBubbleSort = () => {
  const { isSorted } = useSelector((state) => state.array);
  const { animation } = useSelector((state) => state.animation);

  const dispatch = useDispatch();

  useEffect(() => {
    // Initial animation state for bubble sort
    if (!isSorted) {
      dispatch(
        updateAnimation({
          action: "Ready to sort",
          first: 0,
          second: 0,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSorted]);

  const [startSorting] = useAnimation(bubbleSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation?.first:
        return "bg-blue-400";
      case animation?.second:
        return "bg-red-400";
      default:
        return "";
    }
  };

  return [colorizer, startSorting];
};

export default useBubbleSort;
