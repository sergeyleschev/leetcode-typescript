// Solution by Sergey Leschev

// 507. Perfect Number
// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:
// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

// Example 2:
// Input: num = 6
// Output: true

// Example 3:
// Input: num = 496
// Output: true

// Example 4:
// Input: num = 8128
// Output: true

// Example 5:
// Input: num = 2
// Output: false

// Constraints:
// 1 <= num <= 10^8

function checkPerfectNumber(num: number): boolean {
    if (num <= 1) {
        return false
    }
    const left = [1]
    const right = [num]
    let i = 2

    while (i < right[0]) {
        const quotient = num / i
        if (quotient % 1 === 0) {
            left.push(i)
            right.unshift(quotient)
        }
        i += 1
    }
    right.pop()

    return [...left, ...right].reduce((acc, cur) => acc + cur) === num
}
