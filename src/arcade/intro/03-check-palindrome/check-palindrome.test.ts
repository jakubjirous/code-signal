import { checkPalindrome } from "./check-palindrome";

type FirstArg = string;
type ExpectedResult = boolean;
type Cases = [FirstArg, ExpectedResult][];

/**
 * Test if it is a palindrome.
 */
describe("Check Palindrome", () => {
  const cases: Cases = [
    ["aabaa", true],
    ["abac", false],
    ["a", true],
    ["az", false],
    ["abacaba", true],
    ["z", true],
    ["aaabaaaa", false],
    ["zzzazzazz", false],
    ["hlbeeykoqqqqokyeeblh", true],
    ["hlbeeykoqqqokyeeblh", true],
  ];

  test.each(cases)("for %s output should be %s", (firstArg, expectedResult) => {
    const result = checkPalindrome(firstArg);
    expect(result).toEqual(expectedResult);
  });
});
