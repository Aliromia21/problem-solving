/*
Problem: Equal Sides Of An Array (findEvenIndex)
Given an array of integers, return the lowest index N where the sum
of the integers to the left of the index is equal to the sum of the integers to the right.
If no such index exists, return -1.

Time Complexity: O(n)
Space Complexity: O(1)
*/

function findEvenIndex(arr) {
  const totalSum = arr.reduce((sum, val) => sum + val, 0);

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i; 
    }

    leftSum += arr[i];
  }

  return -1;
}
