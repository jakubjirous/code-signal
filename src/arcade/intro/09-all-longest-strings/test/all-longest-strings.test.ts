import { allLongestStrings, Input, Output } from "../all-longest-strings";

type Cases = [Input, Output][];

describe("All Longest Strings", () => {
  const cases: Cases = [
    [
      ["aba", "aa", "ad", "vcd", "aba"],
      ["aba", "vcd", "aba"],
    ],
    [
      ["aba", "aa", "ad", "vcd", "aba"],
      ["aba", "vcd", "aba"],
    ],
    [["aa"], ["aa"]],
    [
      ["abc", "eeee", "abcd", "dcd"],
      ["eeee", "abcd"],
    ],
    [
      ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"],
      ["zzzzzz", "abcdef", "aaaaaa"],
    ],
    [["enyky", "benyky", "yely", "varennyky"], ["varennyky"]],
    [["abacaba", "abacab", "abac", "xxxxxx"], ["abacaba"]],
    [
      [
        "young",
        "yooooooung",
        "hot",
        "or",
        "not",
        "come",
        "on",
        "fire",
        "water",
        "watermelon",
      ],
      ["yooooooung", "watermelon"],
    ],
    [["onsfnib", "aokbcwthc", "jrfcw"], ["aokbcwthc"]],
    [["lbgwyqkry"], ["lbgwyqkry"]],
    [["i"], ["i"]],
  ];

  test.each(cases)(
    "for inputArray %j output should be %j",
    (firstArg, expectedResult) => {
      const result = allLongestStrings(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
