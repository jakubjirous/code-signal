export type Input = number[][];
export type Output = number;

/**
 * After becoming famous, the CodeBots decided to move into a new building together.
 * Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
 *
 * @param matrix
 */
export const matrixElementsSum = (matrix: Input): Output => {
  let ghosts: number[] = [];
  let cost = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const val = matrix[i][j];

      if (val === 0) {
        ghosts.push(j);
      }

      if (val !== 0 && !ghosts.includes(j)) {
        cost += val;
      }
    }
  }

  return cost;
};
