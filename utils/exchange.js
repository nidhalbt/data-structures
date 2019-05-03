export const exchange = (arr, i, j) => {
  try {
    if (Array.isArray(arr) && i < arr.length && j < arr.length && i >= 0 && j >= 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  } catch (e) {
  }
};
