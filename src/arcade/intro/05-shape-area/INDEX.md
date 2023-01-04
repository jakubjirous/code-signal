# Shape Area

We will define an `n`-interesting polygon. 

Your task is to find the area of a polygon for a given `n`.

A `1`-interesting polygon is just a square with a side of length `1`.  
An `n`-interesting polygon is obtained by taking the `n - 1`-interesting polygon and appending `1`-interesting polygons to its rim, side by side.

---

### Example:

- For `n = 2`, the output should be `shapeArea(n) = 5`
- For `n = 3`, the output should be `shapeArea(n) = 13`

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** integer `n`
  - Guaranteed constraints:
    - $1 \le n \le 10^{4}$
 

- **[output]** integer
  - The area of the `n`-interesting polygon.

---

### Solution:

- [Code](/src/arcade/intro/05-shape-area/shape-area.ts)
- [Tests](/src/arcade/intro/05-shape-area/test/shape-area.test.ts)
