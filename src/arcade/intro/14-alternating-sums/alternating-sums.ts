export type Input = number[];
export type Output = number[];

/**
 * You are given an array of positive integers - the weights of the people.
 * Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
 *
 * @param inputArray
 */
export const alternatingSums = (inputArray: Input): Output => {
  return inputArray.reduce<Output>(
    ([team1, team2]: Output, value: number, index: number) => {
      return index % 2 === 0 ? [team1 + value, team2] : [team1, team2 + value];
    },
    [0, 0]
  );
};
