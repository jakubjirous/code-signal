/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * @param input
 */
export const adjacentElementsProduct = (input: number[]): number => {
  return input.reduce((acc, value, index, arr) => {
    const nextCase = value * arr[index - 1];
    return nextCase > acc ? (acc = nextCase) : acc;
  }, Number.NEGATIVE_INFINITY);
};
