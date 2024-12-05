// Solution by Sergey Leschev
// 2337. Move Pieces to Obtain a String

// Time complexity: O(N), because every time either i increase I, or J, or both.
// Space complexity: O(1)

function canChange(start: string, target: string): boolean {
    const n = target.length
    let i = 0,
        j = 0

    while (i <= n && j <= n) {
        // Skip blank spaces ('_') in both strings
        while (i < n && target[i] === '_') i++
        while (j < n && start[j] === '_') j++

        // If one string has reached the end but the other hasn't, return false
        if (i === n || j === n) {
            return i === n && j === n
        }

        // If the pieces at current positions don't match, return false
        if (target[i] !== start[j]) {
            return false
        }

        // Ensure 'L' and 'R' move only within their constraints
        if (target[i] === 'L' && j < i) {
            return false // 'L' can only move left, so its position in start must be >= its position in target
        }
        if (target[i] === 'R' && i < j) {
            return false // 'R' can only move right, so its position in start must be <= its position in target
        }

        i++
        j++
    }

    return true
}
