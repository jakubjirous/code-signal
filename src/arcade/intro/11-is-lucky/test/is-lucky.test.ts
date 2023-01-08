import { isLucky, Input, Output } from "../is-lucky";

type Cases = [Input, Output][];

describe("Is Lucky", () => {
  const cases: Cases = [
    [1230, true],
    [239017, false],
    [134008, true],
    [10, false],
    [11, true],
    [1010, true],
    [261534, false],
    [100000, false],
    [999999, true],
    [123321, true],
  ];

  test.each(cases)(
    "for n = %d output should be %s",
    (firstArg, expectedResult) => {
      const result = isLucky(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
