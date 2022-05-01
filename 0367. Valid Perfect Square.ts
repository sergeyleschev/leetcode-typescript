// Solution @ Sergey Leschev, Belarusian State University

// 367. Valid Perfect Square
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.

// Newton's Algorithm for checking if the number is a perfect square.

// - Parameter num: Positive integer.
// - Returns: True if num is a perfect square, otherwise returns false.

// Example 1:
// Input: num = 16
// Output: true

// Example 2:
// Input: num = 14
// Output: false 

// Constraints:
// 1 <= num <= 2^31 - 1

function isPerfectSquare(num: number): boolean {
    return Math.sqrt(num) % 1 === 0
}