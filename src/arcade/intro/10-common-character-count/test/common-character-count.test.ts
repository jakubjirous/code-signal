import { commonCharacterCount, Input, Output } from "../common-character-count";

type Cases = [Input, Input, Output][];

describe("Common Character Count", () => {
  const cases: Cases = [
    ["aabcc", "adcaa", 3],
    ["zzzz", "zzzzzzz", 4],
    ["abca", "xyzbac", 3],
    ["a", "aaa", 1],
    ["a", "b", 0],
  ];

  test.each(cases)(
    "for s1 = %s and s2 = %s output should be %d",
    (firstArg, secondArg, expectedResult) => {
      const result = commonCharacterCount(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
