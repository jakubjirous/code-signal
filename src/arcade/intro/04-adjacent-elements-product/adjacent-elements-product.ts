export type Input = number[];
export type Output = number;

/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * @param inputArray
 */
export const adjacentElementsProduct = (inputArray: Input): Output => {
  return inputArray.reduce((acc, value, index, array) => {
    const nextCase = value * array[index - 1];
    return nextCase > acc ? nextCase : acc;
  }, Number.NEGATIVE_INFINITY);
};
