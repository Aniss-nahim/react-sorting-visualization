import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useAnimation from "./useAnimation";
import { heapSort } from "../algorithms";
import { updateAnimation } from "../redux/action-creators/AnimationActions";

const useHeapSort = () => {
  const { isSorted } = useSelector((state) => state.array);
  const { animation } = useSelector((state) => state.animation);

  const dispatch = useDispatch();

  useEffect(() => {
    // Initial animation state for heap sort
    if (!isSorted) {
      dispatch(
        updateAnimation({
          action: "Ready to sort",
          parent: -1,
          left: -1,
          right: -1,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSorted]);

  const [startSorting] = useAnimation(heapSort);

  // colorizer function
  const colorizer = (index) => {
    switch (index) {
      case animation?.parent:
        return "bg-blue-400";

      case animation?.right:
      case animation?.left:
        return "bg-red-400";
      default:
        return "";
    }
  };

  return [colorizer, startSorting];
};

export default useHeapSort;
