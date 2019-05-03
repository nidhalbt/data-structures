import { sort } from "./quicksort";

describe('Quicksort', () => {
  describe('Edge cases', () => {
    const quicksort = sort();

    it('should return empty array if provided a non-array', () => {
      expect(quicksort()).toEqual([]);
      expect(quicksort(null)).toEqual([]);
      expect(quicksort(false)).toEqual([]);
      expect(quicksort(true)).toEqual([]);
      expect(quicksort('')).toEqual([]);
      expect(quicksort({})).toEqual([]);
    });

    it('should sort empty array', () => {
      expect(quicksort([])).toEqual([]);
    });

    it('should sort one elem array', () => {
      expect(quicksort([1])).toEqual([1]);
    });

    it('should sort 2 elem array', () => {
      expect(quicksort([1, 2])).toEqual([1, 2]);
      expect(quicksort([2, 1])).toEqual([1, 2]);
    });
  });

  describe('main cases', () => {
    const arr1 = [46, 18, 28, 9, 10, 9, 45, 9, 2, 12, 46, 47, 28, 46, 40,
      24, 44, 30, 6, 23, 24, 44, 3, 15, 3, 18, 42, 47, 1, 16, 8, 32, 31,
      43, 20, 42, 35, 2, 10, 33, 41, 20, 38, 44, 10, 12, 7, 40, 20, 19,
      17, 14, 27, 11, 48, 11, 9, 38, 33, 32, 28, 21, 41, 34, 28, 10, 2,
      0, 2, 47, 26, 47, 37, 20, 48, 37, 27, 9, 46, 47, 40, 14, 43, 13,
      36, 4, 29, 46, 37, 5, 11, 3, 42, 8, 43, 27, 29, 3, 31, 9];

    it('should sort arrays ascending', () => {
      const quicksort = sort();

      const sorted1 = [0, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9, 9,
        9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15, 16,
        17, 18, 18, 19, 20, 20, 20, 20, 21, 23, 24, 24, 26, 27, 27, 27, 28,
        28, 28, 28, 29, 29, 30, 31, 31, 32, 32, 33, 33, 34, 35, 36, 37, 37,
        37, 38, 38, 40, 40, 40, 41, 41, 42, 42, 42, 43, 43, 43, 44, 44, 44,
        45, 46, 46, 46, 46, 46, 47, 47, 47, 47, 47, 48, 48];

      expect(quicksort(arr1)).toEqual(sorted1);
    });

    it('should sort arrays descending', () => {
      const quicksort = sort(false);

      const sorted1 = [48, 48, 47, 47, 47, 47, 47, 46, 46, 46, 46, 46, 45,
        44, 44, 44, 43, 43, 43, 42, 42, 42, 41, 41, 40, 40, 40, 38, 38, 37,
        37, 37, 36, 35, 34, 33, 33, 32, 32, 31, 31, 30, 29, 29, 28, 28, 28,
        28, 27, 27, 27, 26, 24, 24, 23, 21, 20, 20, 20, 20, 19, 18, 18, 17,
        16, 15, 14, 14, 13, 12, 12, 11, 11, 11, 10, 10, 10, 10, 9, 9, 9, 9,
        9, 9, 8, 8, 7, 6, 5, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0];

      expect(quicksort(arr1)).toEqual(sorted1);
    });
  });
});
