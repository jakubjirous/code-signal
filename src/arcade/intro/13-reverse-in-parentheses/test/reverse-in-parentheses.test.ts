import { reverseInParentheses, Input, Output } from "../reverse-in-parentheses";

type Cases = [Input, Output][];

describe("Reverse In Parentheses", () => {
  const cases: Cases = [
    ["(bar)", "rab"],
    ["foo(bar)baz", "foorabbaz"],
    ["foo(bar)baz(blim)", "foorabbazmilb"],
    ["foo(bar(baz))blim", "foobazrabblim"],
    ["", ""],
    ["()", ""],
    ["(abc)d(efg)", "cbadgfe"],
    ["((see)(you))", "yousee"],
  ];

  test.each(cases)(
    "for inputString = '%s' output should be '%s'",
    (firstArg, expectedResult) => {
      const result = reverseInParentheses(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
