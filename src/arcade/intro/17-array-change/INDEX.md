# Array Change

You are given an array of integers. 

On each move you are allowed to increase exactly one of its element by one. 

Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

---

### Example:

- For `inputArray = [1, 1, 1]`, the output should be `arrayChange(inputArray) = 3`.

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** array.integer `inputArray`
  - Guaranteed constraints:
    - $3 \le inputArray.length \le 10^{5}$
    - $-10^{5} \le inputArray[i] \le 10^{5}$

  
- **[output]** integer
  - The minimal number of moves needed to obtain a strictly increasing sequence from `inputArray`.
  - It's guaranteed that for the given test cases the answer always fits signed `32`-bit integer type.

---

### Solution:

- [Code](/src/arcade/intro/17-array-change)
- [Tests](/src/arcade/intro/17-array-change/test/array-change.test.ts)
