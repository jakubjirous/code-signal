import { matrixElementsSum, Input, Output } from "../matrix-elements-sum";

type Cases = [Input, Output][];

describe("Matrix Elements Sum", () => {
  const cases: Cases = [
    [
      [
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3],
      ],
      9,
    ],
    [
      [
        [1, 1, 1, 0],
        [0, 5, 0, 1],
        [2, 1, 3, 10],
      ],
      9,
    ],
    [
      [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
      ],
      18,
    ],
    [[[0]], 0],
    [[[1], [5], [0], [2]], 6],
    [[[1, 2, 3, 4, 5]], 15],
    [
      [
        [1, 0, 3],
        [0, 2, 1],
        [1, 2, 0],
      ],
      5,
    ],
    [[[2], [5], [10]], 17],
    [
      [
        [4, 0, 1],
        [10, 7, 0],
        [0, 0, 0],
        [9, 1, 2],
      ],
      15,
    ],
    [[[1]], 1],
  ];

  test.each(cases)(
    "for matrix %j output should be %d",
    (firstArg, expectedResult) => {
      const result = matrixElementsSum(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
