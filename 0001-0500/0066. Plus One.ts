// Solution by Sergey Leschev

// 66. Plus One
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Adds one to an integer that is represented as an array.

// - Parameter digits: A non-empty array of digits representing a non-negative integer.
// - Returns: Given integer plus one represented as an array.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]

// Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

function plusOne(digits: number[]): number[] {
    let carry = 1
    let digit = 0

    digits = digits.reverse()

    while (carry) {
        digits[digit] = digits[digit] || 0
        digits[digit] += carry
        if (digits[digit] >= 10) {
            carry = 1
            digits[digit] = digits[digit] % 10
            digit++
        } else {
            carry = 0
        }
    }

    if (carry) {
        digits.push(1)
    }
    return digits.reverse()
}
