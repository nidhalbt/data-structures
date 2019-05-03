import { exchange } from "../exchange";

describe('exchange', () => {
  it('should not throw error if not array', () => {
    expect(() => exchange()).not.toThrow();
    expect(() => exchange(null)).not.toThrow();
    expect(() => exchange(false)).not.toThrow();
    expect(() => exchange(true)).not.toThrow();
    expect(() => exchange('')).not.toThrow();
    expect(() => exchange({})).not.toThrow();
  });

  it('should exchange array elems', () => {
    const arr = [1, 2, 3, 4, 5];
    exchange(arr, 0, 3);
    expect(arr).toEqual([4, 2, 3, 1, 5]);
  });

  it('should not exchange array elems for indexes outside bounds', () => {
    const arr = [1, 2, 3, 4, 5];
    exchange(arr, 0, 5);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
    exchange(arr, 0, -2);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});
