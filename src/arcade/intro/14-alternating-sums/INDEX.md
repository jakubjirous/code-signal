# Alternating Sums

Several people are standing in a row and need to be divided into two teams. 
The first person goes into `team 1`, the second goes into `team 2`, the third goes into `team 1` again, the fourth into `team 2`, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight of `team 1`, and the second element is the total weight of `team 2` after the division is complete.

---

### Example:
`
- For `inputArray = [50, 60, 60, 45, 70]`, the output should be `alternatingSums(inputArray) = [180, 105]`.

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** array.integer `inputArray`
  - Guaranteed constraints:
    - $1 \le inputArray.length \le 10^{5}$
    - $45 \le inputArray[i] \le 100$

  
- **[output]** array.integer

---

### Solution:

- [Code](/src/arcade/intro/14-alternating-sums)
- [Tests](/src/arcade/intro/14-alternating-sums/test/alternating-sums.test.ts)
