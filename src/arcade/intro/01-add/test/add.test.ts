import { add } from "../add";

type FirstArg = number;
type SecondArg = number;
type ExpectedResult = number;
type Cases = [FirstArg, SecondArg, ExpectedResult][];

/**
 * Testing a function that returns the sum of two numbers.
 */
describe("Add", () => {
  const cases: Cases = [
    [1, 2, 3],
    [0, 1000, 1000],
    [2, -39, -37],
    [99, 100, 199],
    [-100, 100, 0],
    [-1000, -1000, -2000],
  ];

  test.each(cases)(
    "for sum of %p and %p output should be %p",
    (firstArg, secondArg, expectedResult) => {
      const result = add(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
