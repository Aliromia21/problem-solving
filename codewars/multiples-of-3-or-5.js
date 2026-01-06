/*
Problem:
Return the sum of all natural numbers below a given number
that are multiples of 3 or 5.

Rules:
- If the number is negative, return 0
- Count numbers that are multiples of both 3 and 5 only once

Time Complexity: O(n)
Space Complexity: O(1)
*/

function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
