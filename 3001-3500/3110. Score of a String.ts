// Solution by Sergey Leschev
// 3110. Score of a String

// Time Complexity: O(N)
// Space Complexity: O(1)

function scoreOfString(s: string): number {
    let total = 0
    for (let i = 0; i < s.length - 1; i++) {
        total += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
    }
    return total
}
