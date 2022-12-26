/**
 * Given the string, check if it is a palindrome.
 * @param inputString
 */
export const checkPalindrome = (inputString: string): boolean => {
  return inputString === [...inputString].reverse().join("");
};
