import { addBorder, Input, Output } from "../add-border";

type Cases = [Input, Output][];

describe("Add Border", () => {
  const cases: Cases = [
    [
      ["abc", "ded"],
      ["*****", "*abc*", "*ded*", "*****"],
    ],
    [["a"], ["***", "*a*", "***"]],
    [
      ["aa", "**", "zz"],
      ["****", "*aa*", "****", "*zz*", "****"],
    ],
    [
      ["abcde", "fghij", "klmno", "pqrst", "uvwxy"],
      [
        "*******",
        "*abcde*",
        "*fghij*",
        "*klmno*",
        "*pqrst*",
        "*uvwxy*",
        "*******",
      ],
    ],
    [["wzy**"], ["*******", "*wzy***", "*******"]],
  ];

  test.each(cases)(
    "for picture = %j output should be %j",
    (firstArg, expectedResult) => {
      const result = addBorder(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
