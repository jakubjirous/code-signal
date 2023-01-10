import { sortByHeight, Input, Output } from "../sort-by-height";

type Cases = [Input, Output][];

describe("Sort By Height", () => {
  const cases: Cases = [
    [
      [-1, 150, 190, 170, -1, -1, 160, 180],
      [-1, 150, 160, 170, -1, -1, 180, 190],
    ],
    [
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
    ],
    [
      [4, 2, 9, 11, 2, 16],
      [2, 2, 4, 9, 11, 16],
    ],
    [
      [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2],
    ],
    [
      [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3],
      [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
    ],
  ];

  test.each(cases)(
    "for a = %j output should be %j",
    (firstArg, expectedResult) => {
      const result = sortByHeight(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
