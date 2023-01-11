export type Input = number[];
export type Output = boolean;

/**
 * Given two arrays a and b, check whether they are similar.
 *
 * @param a
 * @param b
 */
export const areSimilar = (a: Input, b: Input): Output => {
  const differences = a.reduce<Input>((acc, value, index) => {
    return value !== b[index] ? [...acc, index] : acc;
  }, []);

  const [firstDifference, secondDifference] = differences;

  return (
    differences.length < 3 &&
    a[firstDifference] === b[secondDifference] &&
    a[secondDifference] === b[firstDifference]
  );
};
