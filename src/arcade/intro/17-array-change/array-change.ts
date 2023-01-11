export type Input = number[];
export type Output = number;

/**
 * Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
 *
 * @param inputArray
 */
export const arrayChange = (inputArray: Input): Output => {
  return inputArray.reduce<Output>((acc, value, index, array) => {
    while (value >= array[index + 1]) {
      acc++;
      array[index + 1]++;
    }
    return acc;
  }, 0);
};
