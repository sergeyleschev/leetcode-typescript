// Solution @ Sergey Leschev, Belarusian State University

// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false
   
// Constraints:
// -2^31 <= x <= 2^31 - 1
// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x: number): boolean {
  if (x < 0) { return false }
  let multipliers = [1]
  let range = 1

  while((x % range) < x) { multipliers.push(range *= 10) }

  multipliers.pop()

  for (let i = 0; i < multipliers.length; i++) {
    const currentMultiplier = multipliers[i]
    const reverseMultiplier = multipliers[multipliers.length - (i + 1)]

    if (getDigit(x, currentMultiplier) !== getDigit(x, reverseMultiplier)) { return false }
  }

  return true
}

function getDigit(n: number, p: number) { return Math.floor(n / p % 10) }