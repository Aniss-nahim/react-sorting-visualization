/**
 * Sorting algorithms servicesù
 * @author Aniss Nahim
 * @license MIT
 */

/**
 * Sort array using Quick Sort algorithm
 * Time complexity : O(nlogn)
 * Space complexity : O(n)
 * @param {Array} array unsorted array
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @param {Function} delay delay function for animation
 * @returns {void}
 */
export const quickSort = (array, start, end, delayAnimation) => {
  if (start >= end) return;
  let index = quickSortPartition(array, start, end, delayAnimation);
  quickSort(array, start, index - 1, delayAnimation);
  quickSort(array, index + 1, end, delayAnimation);
};

/**
 * Patition array into two sub arrays
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
const quickSortPartition = (array, start, end, delayAnimation) => {
  let pivot = array[end];
  let pivotIndex = end;
  let j = start - 1;
  for (let i = start; i < end; i++) {
    // i is looking for the first element less than pivot
    // j is looking for the first element greater than pivot
    delayAnimation(
      {
        pivotIndex,
        first: i,
        second: j,
        action: "From left, looking for element less than pivot",
      },
      array
    );
    if (array[i] < pivot) {
      j++;
      delayAnimation(
        {
          pivotIndex,
          first: i,
          second: j,
          action: "From left, looking for element greater than pivot",
        },
        array
      );
      swap(array, i, j);
      delayAnimation(
        {
          pivotIndex,
          first: i,
          second: j,
          action: `swop`,
        },
        array
      );
    }
  }
  swap(array, j + 1, pivotIndex);
  delayAnimation(
    {
      pivotIndex: j + 1,
      first: end,
      second: j,
      action: "Pivot correct position",
    },
    array
  );
  return j + 1;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

/**
 * Sort array using Merge Sort algorithm :
 * Time complexity : O(nlogn)
 * Space complexity : O(n + n/2) <=> O(n)
 * Temporary array is required otherwise the time complexity will be O(n^2logn)
 * @param {Array} array unsorted array
 * @param {Integer} start starting index of the array
 * @param {Integer} end ending index of the array
 * @returns {void}
 */
export const mergeSort = (array, start, end, delayAnimation) => {
  if (start >= end) return;
  let half = Math.floor((start + end) / 2);
  mergeSort(array, start, half, delayAnimation);
  mergeSort(array, half + 1, end, delayAnimation);
  merge(array, start, half, end, delayAnimation);
};

/**
 * Merge two virtual (subarrays of the main array) arrays
 * @param {Array} array
 * @param {Integer} start starting index of the array
 * @param {Integer} half middle index of the array
 * @param {Integer} end ending index of the array
 */
const merge = (array, start, half, end, delayAnimation) => {
  let temp = array.slice(half + 1, end + 1); // O(N)
  let i = half; // index on main array
  let j = temp.length - 1; // index on temp array
  let k = end; // index on

  delayAnimation(
    {
      action: "ready to merge",
      first: i,
      second: j + half + 1,
    },
    array
  );

  while (i >= start && j >= 0) {
    // animation
    delayAnimation(
      { action: "comparing", first: i, second: j + half + 1 },
      array
    );
    if (array[i] > temp[j]) {
      array[k--] = array[i--];
      delayAnimation(
        { action: "ordering", first: i, second: j + half + 1 },
        array
      );
    } else {
      array[k--] = temp[j--];
      delayAnimation(
        { action: "ordering", first: i, second: j + half + 1 },
        array
      );
    }
    // animation
  }

  while (i >= start) {
    array[k--] = array[i--];
    delayAnimation({ action: "last moves", first: i, second: j + half + 1 }, [
      ...array,
    ]);
  }

  while (j >= 0) {
    array[k--] = temp[j--];
    delayAnimation({ action: "last moves", first: i, second: j + half + 1 }, [
      ...array,
    ]);
  }
};
