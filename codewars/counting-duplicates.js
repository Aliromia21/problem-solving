/*
Problem: Count the number of duplicate characters in a string
Time Complexity: O(n)
Space Complexity: O(1)
*/

function duplicateCount(text) {
  const lowerText = text.toLowerCase();
  const counts = {};

  for (let i = 0; i < lowerText.length; i++) {
    const char = lowerText[i];
    counts[char] = (counts[char] || 0) + 1;
  }

  let duplicates = 0;
  for (const count of Object.values(counts)) {
    if (count > 1) {
      duplicates++;
    }
  }

  return duplicates;
}
