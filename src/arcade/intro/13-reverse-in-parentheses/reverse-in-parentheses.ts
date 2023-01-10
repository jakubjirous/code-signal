export type Input = string;
export type Output = string;

/**
 * A function that reverses characters in (possibly nested) parentheses in the input string.
 *
 * @param inputString
 */
export const reverseInParentheses = (inputString: Input): Output => {
  while (inputString.includes("(")) {
    const endBracketIndex = inputString.indexOf(")");
    const startBracketIndex = inputString.lastIndexOf("(", endBracketIndex);

    const wordWithoutBrackets = inputString.slice(
      startBracketIndex + 1,
      endBracketIndex
    );
    const reversedWord = [...wordWithoutBrackets].reverse().join("");

    inputString = inputString.replace(`(${wordWithoutBrackets})`, reversedWord);
  }

  return inputString;
};
