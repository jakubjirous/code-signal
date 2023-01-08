export type Input = number;
export type Output = boolean;

/**
 * Given a ticket number `n`, determine if it's lucky or not.
 *
 * @param n
 */
export const isLucky = (n: Input): Output => {
  let digits = [...String(n)];

  const leftSum = digitsSum(digits.slice(0, digits.length / 2));
  const rightSum = digitsSum(digits.slice(digits.length / 2));

  return leftSum === rightSum;
};

const digitsSum = (digits: string[]): number => {
  return digits.reduce((acc, character) => acc + Number(character), 0);
};
