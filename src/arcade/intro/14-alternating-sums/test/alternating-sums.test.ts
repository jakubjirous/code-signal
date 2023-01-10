import { alternatingSums, Input, Output } from "../alternating-sums";

type Cases = [Input, Output][];

describe("Alternating Sums", () => {
  const cases: Cases = [
    [
      [50, 60, 60, 45, 70],
      [180, 105],
    ],
    [
      [100, 50],
      [100, 50],
    ],
    [[80], [80, 0]],
    [
      [100, 50, 50, 100],
      [150, 150],
    ],
    [
      [100, 51, 50, 100],
      [150, 151],
    ],
  ];

  test.each(cases)(
    "for inputArray = %j output should be %j",
    (firstArg, expectedResult) => {
      const result = alternatingSums(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
