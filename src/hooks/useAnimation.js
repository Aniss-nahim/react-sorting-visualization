import { useDispatch, useSelector } from "react-redux";
import { alertPush } from "../redux/action-creators/AlertActions";
import {
  sortingArray,
  sortedArray,
  stopSortingArray,
} from "../redux/action-creators/ArrayActions";

const useAnimation = (sortingAlgorithm) => {
  const { array } = useSelector((state) => state.array);

  const dispatch = useDispatch();

  // trigger sorting function
  const startSorting = () => {
    // isSorting set to true
    dispatch(sortingArray());
    sort()
      .then(() => {
        dispatch(sortedArray());
        dispatch(alertPush({ type: "success", message: "Array sorted !" }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          alertPush({
            type: "error",
            message: "Error occurred please try again",
          })
        );
      })
      .finally(() => dispatch(stopSortingArray()));
  };

  // Sort the array using sorting algorithm
  const sort = async () => {
    await sortingAlgorithm(array, 0, array.length - 1, dispatch);
  };

  return [startSorting];
};

export default useAnimation;
