export type Input = number[];
export type Output = number[];

/**
 * Rearrange the people by their heights in a non-descending order without moving the trees.
 *
 * @param row
 */
export const sortByHeight = (row: Input): Output => {
  const TREE = -1;

  let sortedPeople = row.filter((item) => item !== TREE).sort((a, b) => a - b);

  return row.map((item) =>
    item !== TREE ? (sortedPeople?.shift() as number) : TREE
  );
};
