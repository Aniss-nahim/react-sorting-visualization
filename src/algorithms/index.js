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
  let i = start,
    j = end - 1,
    pivot = end;
  while (i <= j) {
    // item from left > pivot
    if (array[i] <= array[pivot]) {
      i++;
      delay(
        {
          pivot,
          first: i,
          second: j,
          action: "ITEM-LEFT",
        },
        [...array]
      );
      continue;
    }
    // item from right < pivot
    if (array[j] >= array[pivot]) {
      j--;
      delay(
        {
          pivot,
          first: i,
          second: j,
          action: "ITEM-RIGHT",
        },
        [...array]
      );
      continue;
    }

    // animation effect
    delay({ pivot, first: i, second: j, action: "SWOP" }, [...array]);
    // swap item left with item right
    swap(array, i, j);
    // animation effect
    delay(
      {
        pivot,
        first: i,
        second: j,
        action: "SWOPPED",
      },
      [...array]
    );
  }

  delay(
    {
      pivot,
      first: i,
      second: j,
      action: "FOUND-PIVOT-POSITION",
    },
    [...array]
  );
  // move pivot to the correct spot
  swap(array, i, pivot);

  delay(
    {
      pivot: i,
      first: i,
      second: j,
      action: "PIVOT-POSITION",
    },
    [...array]
  );
  return i; // pivot correct spot
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
