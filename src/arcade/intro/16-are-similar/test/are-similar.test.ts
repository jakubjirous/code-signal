import { areSimilar, Input, Output } from "../are-similar";

type Cases = [Input, Input, Output][];

describe("Are Similar", () => {
  const cases: Cases = [
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2, 3], [2, 1, 3], true],
    [[1, 2, 2], [2, 1, 1], false],
    [[1, 2, 1, 2], [2, 2, 1, 1], true],
    [[1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 1], true],
    [[1, 1, 4], [1, 2, 3], false],
    [[1, 2, 3], [1, 10, 2], false],
    [[2, 3, 1], [1, 3, 2], true],
    [[2, 3, 9], [10, 3, 2], false],
    [
      [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
      [832, 570, 148, 998, 533, 561, 455, 147, 894, 279],
      false,
    ],
  ];

  test.each(cases)(
    "for a = %j and b = %j output should be %s",
    (firstArg, secondArg, expectedResult) => {
      const result = areSimilar(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
