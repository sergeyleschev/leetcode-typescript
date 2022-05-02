// Solution @ Sergey Leschev, Belarusian State University

// 409. Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Finds the length of the longest palindromes that can be built with letters from a string.

// - Parameter s: The string.
// - Returns: The length of the longest palindromes

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1

// Example 3:
// Input: s = "bb"
// Output: 2

// Constraints:
// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

function longestPalindrome(s: string): number {
  const countMap = new Map<string, number>()
  let evenCount = 0
  let maxOddCount = 0

  s.split('').forEach((e) => {
    if (countMap.has(e)) {
      countMap.set(e, countMap.get(e) + 1)
    } else {
      countMap.set(e, 1)
    }
  })

  for (const value of Array.from(countMap.values())) {
    if (value % 2 === 0) {
      evenCount += value
    } else if (maxOddCount < value) {
      evenCount += Math.max(0, (maxOddCount - 1))
      maxOddCount = value
    } else {
      evenCount += value - 1
    }
  }

  return evenCount + maxOddCount
}