/**
 * Sorting algorithms servicesù
 * @author Aniss Nahim
 * @license MIT
 */

export const quickSort = (array, start, end, delay) => {
  if (start >= end) return;
  let index = quickSortPartition(array, start, end, delay);
  quickSort(array, start, index - 1, delay);
  quickSort(array, index + 1, end, delay);
};

const quickSortPartition = (array, start, end, delay) => {
  let pivot = array[end];
  let pivotIndex = end;
  let j = start - 1;
  for (let i = start; i < end; i++) {
    // i is looking for the first element less than pivot
    // j is looking for the first element greater than pivot
    delay(
      {
        pivotIndex,
        first: i,
        second: j,
        action: "From left, looking for element less than pivot",
      },
      [...array]
    );
    if (array[i] < pivot) {
      j++;
      delay(
        {
          pivotIndex,
          first: i,
          second: j,
          action: "From left, looking for element greater than pivot",
        },
        [...array]
      );
      swap(array, i, j);
      delay(
        {
          pivotIndex,
          first: i,
          second: j,
          action: `swop`,
        },
        [...array]
      );
    }
  }
  swap(array, j + 1, pivotIndex);
  delay(
    {
      pivotIndex: j + 1,
      first: end,
      second: j,
      action: "Pivot correct position",
    },
    [...array]
  );
  return j + 1;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
