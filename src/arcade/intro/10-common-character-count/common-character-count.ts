export type Input = string;
export type Output = number;

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param s1
 * @param s2
 */
export const commonCharacterCount = (s1: Input, s2: Input): Output => {
  return [...s1].reduce((acc, character) => {
    if (s2.includes(character)) {
      acc += 1;
      s2 = s2.replace(character, "");
    }
    return acc;
  }, 0);
};
