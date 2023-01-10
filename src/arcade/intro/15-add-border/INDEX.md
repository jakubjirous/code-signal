# Add Border

Given a rectangular matrix of characters, add a border of asterisks(`*`) to it.

---

### Example:

- For
  ```
  picture = [
    "abc",
    "ded"
  ]
  ```
- The output should be
  ```
  addBorder(picture) = [
    "*****",
    "*abc*",
    "*ded*",
    "*****"
  ]  
  ```
 

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** array.string `picture`
  - Guaranteed constraints:
    - $1 \le picture.length \le 100$
    - $1 \le picture[i].length \le 100$

  
- **[output]** array.string
  - The same matrix of characters, framed with a border of asterisks of width `1`.

---

### Solution:

- [Code](/src/arcade/intro/15-add-border)
- [Tests](/src/arcade/intro/15-add-border/test/add-border.test.ts)
