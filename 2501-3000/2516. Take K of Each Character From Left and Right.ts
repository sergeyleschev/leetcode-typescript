// Solution by Sergey Leschev
// 2516. Take K of Each Character From Left and Right

// Time complexity: O(N)
// Space complexity: O(1)

function takeCharacters(s: string, k: number): number {
    // Calculate the remaining characters we can afford to take
    const limits: Record<string, number> = {
        a: s.split('a').length - 1 - k,
        b: s.split('b').length - 1 - k,
        c: s.split('c').length - 1 - k
    }

    // If any limit is negative, it's not possible to meet the condition
    if (limits['a'] < 0 || limits['b'] < 0 || limits['c'] < 0) {
        return -1
    }

    // Sliding window variables
    const counts: Record<string, number> = { a: 0, b: 0, c: 0 }
    let maxValidWindow = 0
    let left = 0

    for (let right = 0; right < s.length; right++) {
        counts[s[right]]++

        // Ensure the sliding window respects the limits
        while (counts[s[right]] > limits[s[right]]) {
            counts[s[left]]--
            left++
        }

        // Update the maximum valid window size
        maxValidWindow = Math.max(maxValidWindow, right - left + 1)
    }

    // The minimum number of minutes needed
    return s.length - maxValidWindow
}
