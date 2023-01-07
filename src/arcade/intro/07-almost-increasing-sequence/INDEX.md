# Almost Increasing Sequence

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

### Note: 
- Sequence $a_0, a_1, ..., a_n$ is considered to be a strictly increasing if $a_0 < a_1 < ... < a_n$. 
- Sequence containing only one element is also considered to be strictly increasing.

---

### Example:

- For `sequence = [1, 3, 2, 1]`, the output should be `almostIncreasingSequence(sequence) = false`.
  - There is no one element in this array that can be removed in order to get a strictly increasing sequence.


- For `sequence = [1, 3, 2]`, the output should be `almostIncreasingSequence(sequence) = true`.
  - You can remove `3` from the array to get the strictly increasing sequence `[1, 2]`. 
  - Alternately, you can remove `2` to get the strictly increasing sequence `[1, 3]`. 

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** array.integer `sequence`
  - Guaranteed constraints:
    - $2 \le sequence.length \le 10^{5}$
    - $-10^{5} \le sequence[i] \le 10^{5}$
 

- **[output]** boolean
  - Return `true` if it is possible to remove one element from the array in order to get a strictly increasing sequence.
  - Otherwise, return `false`.

---

### Solution:

- [Code](/src/arcade/intro/07-almost-increasing-sequence/almost-increasing-sequence.ts)
- [Tests](/src/arcade/intro/07-almost-increasing-sequence/test/almost-increasing-sequence.test.ts)
