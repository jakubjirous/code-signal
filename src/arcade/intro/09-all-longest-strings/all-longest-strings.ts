export type Input = string[];
export type Output = string[];

/**
 * Given an array of strings, return another array containing all of its longest strings.
 *
 * @param inputArray
 */
export const allLongestStrings = (inputArray: Input): Output => {
  const theLongestString = Math.max(
    ...inputArray.map((string) => string.length)
  );

  return inputArray.reduce<Output>((acc, value) => {
    return value.length === theLongestString ? [...acc, value] : acc;
  }, []);
};
