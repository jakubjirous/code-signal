# Sort By Height

Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
People can be very tall!

---

### Example:

- For `row = [-1, 150, 190, 170, -1, -1, 160, 180]`, the output should be `sortByHeight(row) = [-1, 150, 160, 170, -1, -1, 180, 190]`.

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** array.integer `row`
  - If `row[i] = -1`, then the $i^{th}$ position is occupied by a tree. 
  - Otherwise `row[i]` is the height of a person standing in the $i^{th}$ position.
  - Guaranteed constraints:
    - $1 \le row.length \le 1000$
    - $-1 \le row[i] \le 1000$

  
- **[output]** array.integer
  - Sorted array `row` with all the trees untouched.

---

### Solution:

- [Code](/src/arcade/intro/12-sort-by-height)
- [Tests](/src/arcade/intro/12-sort-by-height/test/sort-by-height.test.ts)
