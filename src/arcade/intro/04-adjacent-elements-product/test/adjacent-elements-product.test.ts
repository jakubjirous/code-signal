import { adjacentElementsProduct, Input, Output } from '../adjacent-elements-product';

type Cases = [Input, Output][];

/**
 * Given an array of integers, test the pair of adjacent elements that has the largest product and return that product.
 */
describe("Adjacent Elements Product", () => {
  const cases: Cases = [
    [[3, 6, -2, -5, 7, 3], 21],
    [[-1, -2], 2],
    [[5, 1, 2, 3, 1, 4], 6],
    [[1, 2, 3, 0], 6],
    [[9, 5, 10, 2, 24, -1, -48], 50],
    [[5, 6, -4, 2, 3, 2, -23], 30],
    [[4, 1, 2, 3, 1, 5], 6],
    [[-23, 4, -3, 8, -12], -12],
    [[1, 0, 1, 0, 1000], 0],
  ];

  test.each(cases)("for %s output should be %s", (firstArg, expectedResult) => {
    const result = adjacentElementsProduct(firstArg);
    expect(result).toEqual(expectedResult);
  });
});
