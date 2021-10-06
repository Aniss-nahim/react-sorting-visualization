/**
 * Sorting algorithms services
 * @author Aniss Nahim
 * @license MIT
 */
import { updateAnimation } from "../redux/action-creators/AnimationActions";

export const registredAlgorithms = [
  "quicksort",
  "mergesort",
  "heapsort",
  "bubblesort",
];

/**
 * Sorts array using Quick Sort algorithm
 * AVG Time complexity : O(nlogn)
 * AVG Space complexity : O(logn)
 * @param {Array} array unsorted array
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @param {Function} dispatch dispatch action
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
 * Time complexity : O(n)
 * Space complexity : O(n)
 * first sub array contains elements less then or equal to pivot
 * second sub array contains elements greater then pivot
 * @param {Array} array array to partition
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @param {Function} dispatch dispatch action
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
 * @returns {Promise}
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
 * @param {Function} dispatch dispatch action
 * @return {Promise}
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

/**
 * Sorts array from start to end using Heap sort algorithm
 * AVG Time complexity : O(nlogn)
 * AVG Space complexity : O(1)
 * @param {Array} array
 * @param {Integer} start
 * @param {Integer} end
 * @param {Function} dispatch
 */
export const heapSort = async (array, start, end, dispatch) => {
  await dispatch(
    updateAnimation({
      parent: -1,
      left: -1,
      right: -1,
      action: "Building max heap",
    })
  );
  await buildMaxHeap(array, start, end, dispatch);
  for (let i = end; i >= start; i--) {
    await dispatch(
      updateAnimation({
        parent: start,
        left: -1,
        right: -1,
        action: "Max heap built, swap parent with last element",
      })
    );
    swap(array, start, i);
    await heapify(array, start, i - 1, dispatch);
  }
};

/**
 * Builds max heap from a given array
 * last parent node is at the index floor(n/2) - 1
 * @param {Array} array
 * @param {Integer} start
 * @param {Integer} end
 * @param {Function} dispatch
 * @return {Promise}
 */
const buildMaxHeap = async (array, start, end, dispatch) => {
  const lastParent = Math.floor((end + start) / 2) - 1;
  await dispatch(
    updateAnimation({
      parent: lastParent,
      right: -1,
      left: -1,
      action: "heapify start",
    })
  );
  for (let iParent = lastParent; iParent >= 0; iParent--) {
    await heapify(array, iParent, end, dispatch);
  }
};

/**
 * heapifies array starting from iParent to the root
 * Each parent is garter than or equal to it's left and right children
 * @param {Array} array
 * @param {Integer} iParent
 * @param {Integer} end
 * @param {Function} dispatch
 */
const heapify = async (array, iParent, end, dispatch) => {
  const leftNode = 2 * iParent + 1;
  const rightNode = leftNode + 1;
  await dispatch(
    updateAnimation({
      parent: iParent,
      right: rightNode,
      left: leftNode,
      action: "Heapify",
    })
  );
  let maxIndex = iParent;
  if (leftNode <= end && array[maxIndex] < array[leftNode]) {
    maxIndex = leftNode;
  }

  if (rightNode <= end && array[maxIndex] < array[rightNode]) {
    maxIndex = rightNode;
  }

  if (maxIndex !== iParent) {
    swap(array, maxIndex, iParent);
    await dispatch(
      updateAnimation({
        parent: iParent,
        right: rightNode,
        left: leftNode,
        action: "Swap",
      })
    );
    await heapify(array, maxIndex, end, dispatch);
  }
};

/**
 * Sorts array from start to end using Bubble sort algorithm
 * AVG Time complexity : O(n^2)
 * Space complexity : O(1)
 * @param {Array} array
 * @param {Integer} start
 * @param {Integer} end
 * @param {Function} dispatch
 */
export const bubbleSort = async (array, start, end, dispatch) => {
  for (let i = start + 1; i <= end; i++) {
    for (let j = start; j <= end - i; j++) {
      await dispatch(
        updateAnimation({
          action: "Comparing",
          first: j,
          second: j + 1,
        })
      );
      if (array[j] > array[j + 1]) {
        await dispatch(
          updateAnimation({
            action: "Swap",
            first: j,
            second: j + 1,
          })
        );
        swap(array, j, j + 1);
      }
    }
  }
};
