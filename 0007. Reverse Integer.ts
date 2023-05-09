// Solution @ Sergey Leschev

// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
     
// Constraints:
// -2^31 <= x <= 2^31 - 1

const minInt = -Math.pow(2, 31)
const maxInt = -minInt - 1

function reverse(x: number): number {
  const isNegative = x < 0
  let reversed = 0
  if (isNegative) { x = -x }

  while (x > 0) {
    const remainder = x % 10
    reversed = reversed * 10 + remainder
    x = Math.floor(x / 10)
  }

  if (reversed > maxInt) { return 0 }
  return isNegative ? -reversed : reversed
}