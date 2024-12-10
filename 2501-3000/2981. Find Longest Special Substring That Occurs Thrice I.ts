// Solution by Sergey Leschev
// 2981. Find Longest Special Substring That Occurs Thrice I
// Binary search

function maximumLength(s: string): number {
    const n = s.length

    // Helper function to check if a special substring of length `x` exists at least thrice
    const helper = (x: number): boolean => {
        const count = new Array(26).fill(0)
        let start = 0

        for (let end = 0; end < n; end++) {
            // Move start pointer until we match the current character
            while (s[start] !== s[end]) start++
            // Check if the substring length is at least `x`
            if (end - start + 1 >= x) count[s.charCodeAt(end) - 'a'.charCodeAt(0)]++
            // If any character count exceeds 2, return true
            if (count[s.charCodeAt(end) - 'a'.charCodeAt(0)] > 2) return true
        }

        return false
    }

    let left = 1
    let right = n

    if (!helper(left)) return -1

    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (helper(mid)) {
            left = mid
        } else {
            right = mid
        }
    }

    return left
}
