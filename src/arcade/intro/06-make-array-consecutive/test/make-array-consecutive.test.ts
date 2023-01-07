import { Input, makeArrayConsecutive, Output } from '../make-array-consecutive';

type Cases = [Input, Output][];

describe("Make Array Consecutive", () => {
  const cases: Cases = [
    [[6, 2, 3, 8], 3],
    [[0, 3], 2],
    [[5, 4, 6], 0],
    [[1], 0],
  ];

  test.each(cases)(
    "for statues = %s output should be %s",
    (firstArg, expectedResult) => {
      const result = makeArrayConsecutive(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
