import { almostIncreasingSequence, Input, Output } from '../almost-increasing-sequence';

type Cases = [Input, Output][];

describe("Almost Increasing Sequence", () => {
  const cases: Cases = [
    [[1, 3, 2, 1], false],
    [[1, 3, 2], true],
    [[1, 2, 1, 2], false],
    [[3, 6, 5, 8, 10, 20, 15], false],
    [[1, 4, 10, 4, 2], false],
    [[10, 1, 2, 3, 4, 5], true],
    [[0, -2, 5, 6], true],
    [[1, 2, 3, 4, 5, 3, 5, 6], false],
    [[40, 50, 60, 10, 20, 30], false],
    [[1, 1], true],
    [[1, 2, 5, 3, 5], true],
    [[10, 1, 2, 3, 4, 5, 6, 1], false],
    [[1, 2, 3, 4, 3, 6], true],
    [[1, 2, 3, 4, 99, 5, 6], true],
    [[123, -17, -5, 1, 2, 3, 12, 43, 45], true],
    [[3, 5, 67, 98, 3], true],
  ];

  test.each(cases)(
    "for sequence = %s output should be %s",
    (firstArg, expectedResult) => {
      const result = almostIncreasingSequence(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
