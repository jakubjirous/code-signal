export type Input = string[];
export type Output = string[];

/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 *
 * @param picture
 * @param symbol
 */
export const addBorder = (picture: Input, symbol = "*"): Output => {
  const pictureSize = picture[0].length + 2;

  return [
    symbol.repeat(pictureSize),
    ...picture.map((pixel) => `${symbol}${pixel}${symbol}`),
    symbol.repeat(pictureSize),
  ];
};
