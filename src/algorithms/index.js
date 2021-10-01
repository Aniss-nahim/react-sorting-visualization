/**
 * Sorting algorithms services
 * @author Aniss Nahim
 * @license MIT
 */
import { updateAnimation } from "../redux/action-creators/AnimationActions";

export const registredAlgorithms = ["quicksort", "mergesort"];

/**
 * Sorts array using Quick Sort algorithm
 * Time complexity : O(nlogn)
 * Space complexity : O(n)
 * @param {Array} array unsorted array
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @param {Function} delay delay function for animation
 * @returns {void}
 */
export const quickSort = async (array, start, end, dispatch) => {
  if (start >= end) return;
  let index = await quickSortPartition(array, start, end, dispatch);
  await quickSort(array, start, index - 1, dispatch);
  await quickSort(array, index + 1, end, dispatch);
};

/**
 * Patitions array into two sub arrays
 * Time complexity : O(n);
 * Space complexity : O(n);
 * first sub array contains elements less then or equal to pivot
 * second sub array contains elements greater then pivot
 * @param {Array} array array to partition
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @param {Function} delayAnimation delayAnimation function for animation
 * @returns {Integer} pivote correct position
 */
const quickSortPartition = async (array, start, end, dispatch) => {
  let pivot = array[end];
  let pivotIndex = end;
  let j = start - 1;
  for (let i = start; i < end; i++) {
    // i is looking for the first element less than pivot
    // j is looking for the first element greater than pivot
    await dispatch(
      updateAnimation({
        pivotIndex,
        first: i,
        second: j,
        action: "From left, looking for element less than pivot",
      })
    );
    if (array[i] < pivot) {
      j++;
      await dispatch(
        updateAnimation({
          pivotIndex,
          first: i,
          second: j,
          action: "From left, looking for element greater than pivot",
        })
      );
      swap(array, i, j);
      await dispatch(
        updateAnimation({
          pivotIndex,
          first: i,
          second: j,
          action: `swop`,
        })
      );
    }
  }
  swap(array, j + 1, pivotIndex);
  await dispatch(
    updateAnimation({
      pivotIndex: j + 1,
      first: end,
      second: j,
      action: "Pivot correct position",
    })
  );
  return j + 1;
};

/**
 * Swaps two elements for a given array
 * @param {Array} array
 * @param {Integer} i
 * @param {Integer} j
 */
const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

/**
 * Sorts array using Merge Sort algorithm :
 * Time complexity : O(nlogn)
 * Space complexity : O(n + n/2) <=> O(n)
 * Temporary array is required otherwise the time complexity will be O(n^2logn)
 * @param {Array} array unsorted array
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @returns {void}
 */
export const mergeSort = async (array, start, end, dispatch) => {
  if (start >= end) return;
  let half = Math.floor((start + end) / 2);
  await mergeSort(array, start, half, dispatch);
  await mergeSort(array, half + 1, end, dispatch);
  await merge(array, start, half, end, dispatch);
};

/**
 * Merge two virtual (subarrays of the main array) arrays
 * @param {Array} array
 * @param {Integer} start starting index of the array
 * @param {Integer} half middle index of the array
 * @param {Integer} end ending index of the array
 */
const merge = async (array, start, half, end, dispatch) => {
  let temp = array.slice(half + 1, end + 1); // O(N)
  let i = half; // index on main array
  let j = temp.length - 1; // index on temp array
  let k = end; // index on

  await dispatch(
    updateAnimation({
      action: "Start merging",
      first: i,
      second: j + half + 1,
    })
  );

  while (i >= start && j >= 0) {
    await dispatch(
      updateAnimation({ action: "comparing", first: i, second: j + half + 1 })
    );

    if (array[i] > temp[j]) {
      array[k--] = array[i];
      await dispatch(
        updateAnimation({ action: "merging", first: i, second: j + half + 1 })
      );
      i--;
    } else {
      array[k--] = temp[j];
      await dispatch(
        updateAnimation({ action: "merging", first: i, second: j + half + 1 })
      );
      j--;
    }
  }

  while (i >= start) {
    array[k--] = array[i];
    await dispatch(
      updateAnimation({
        action: "remaining elements",
        first: i,
        second: j + half + 1,
      })
    );
    i--;
  }

  while (j >= 0) {
    array[k--] = temp[j];
    await dispatch(
      updateAnimation({
        action: "remaining elements",
        first: i,
        second: j + half + 1,
      })
    );
    j--;
  }
};
