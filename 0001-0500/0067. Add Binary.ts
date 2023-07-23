// Solution by Sergey Leschev

// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// - Parameters:
//   - a: Binary string.
//   - b: Binary string.
// - Returns: Binary string sum.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function addBinary(a: string, b: string): string {
    let result = ''
    let carry = 0
    let length = Math.max(a.length, b.length)
    let i = 1
    const its = []

    while (i <= length) {
        let x = Number(a[a.length - i] || 0)
        let y = Number(b[b.length - i] || 0)
        let sum = x + y + carry

        carry = sum > 1 ? 1 : 0
        result = (sum % 2) + result

        its.push({ i, x, y, carry, sum, result })
        i++
    }

    if (carry) {
        result = carry.toString(2) + result
    }
    return result
}
