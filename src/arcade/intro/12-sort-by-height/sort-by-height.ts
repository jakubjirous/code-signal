export type Input = number[];
export type Output = number[];

/**
 * Rearrange the people by their heights in a non-descending order without moving the trees.
 *
 * @param a
 */
export const sortByHeight = (a: Input): Output => {
  const TREE = -1;

  let sortedPeople = a.filter((value) => value !== TREE).sort((a, b) => a - b);

  return a.map((value) =>
    value !== TREE ? (sortedPeople?.shift() as number) : TREE
  );
};
