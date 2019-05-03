import { exchange } from "../utils/exchange";

export const sort = (asc = true) => (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  return quicksort(arr, 0, arr.length - 1, asc);
};

const quicksort = (arr, p, r, asc) => {
  if (p < r) {
    const q = partition(arr, p, r, asc);
    quicksort(arr, p, q - 1, asc);
    quicksort(arr, q + 1, r, asc);
  }
  return arr;
};

const partition = (arr, p, r, asc) => {
  const pivot = arr[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if ((asc && (arr[j] <= pivot)) || (!asc && (arr[j] >= pivot))) {
      i++;
      exchange(arr, i, j);
    }
  }

  exchange(arr, i + 1, r);
  return i + 1;
};
