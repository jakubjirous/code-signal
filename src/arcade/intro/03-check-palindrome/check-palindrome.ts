export type Input = string;
export type Output = boolean;

/**
 * Given the string, check if it is a palindrome.
 * @param inputString
 */
export const checkPalindrome = (inputString: Input): Output => {
  return inputString === [...inputString].reverse().join("");
};
