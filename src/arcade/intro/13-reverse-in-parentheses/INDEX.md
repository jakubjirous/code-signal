# Reverse In Parentheses

Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching `()`s.

---

### Example:

- For `inputString = "(bar)"`, the output should be `reverseInParentheses(inputString) = "rab"`.
- For `inputString = "foo(bar)baz"`, the output should be `reverseInParentheses(inputString) = "foorabbaz"`.
- For `inputString = "foo(bar)baz(blim)"`, the output should be `reverseInParentheses(inputString) = "foorabbazmilb"`.
- For `inputString = "foo(bar(baz))blim"`, the output should be `reverseInParentheses(inputString) = "foobazrabblim"`.
  - Because `"foo(bar(baz))blim"` becomes `"foo(barzab)blim"` and then `"foobazrabblim"`.

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** string `inputString`
  - A string consisting of lowercase English letters and the characters `(` and `)`. 
  - It is guaranteed that all parentheses in `inputString` form a regular bracket sequence.
  - Guaranteed constraints:
    - $0 \le inputString.length \le 50$

  
- **[output]** string
  - Return `inputString`, with all the characters that were in parentheses reversed.

---

### Solution:

- [Code](/src/arcade/intro/13-reverse-in-parentheses)
- [Tests](/src/arcade/intro/13-reverse-in-parentheses/test/reverse-in-parentheses.test.ts)
