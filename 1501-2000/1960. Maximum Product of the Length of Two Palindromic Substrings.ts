// Solution by Sergey Leschev
// 1960. Maximum Product of the Length of Two Palindromic Substrings

// Complexity: O(n) to apply manacher and then we have several O(n) passes, so total complexity is O(n) both for time and space.

function maxProduct(s: string): number {
    // Helper function to calculate palindromic radii using Manacher's Algorithm
    const manachers = (S: string): number[] => {
        const A = ['@', '#', ...S.split('').join('#'), '#', '$']
        const Z = new Array(A.length).fill(0)
        let center = 0,
            right = 0
        for (let i = 1; i < A.length - 1; i++) {
            if (i < right) {
                Z[i] = Math.min(right - i, Z[2 * center - i])
            }
            while (A[i + Z[i] + 1] === A[i - Z[i] - 1]) {
                Z[i]++
            }
            if (i + Z[i] > right) {
                center = i
                right = i + Z[i]
            }
        }
        return Z.filter((_, idx) => idx % 2 === 0).slice(1, -1)
    }

    // Function to calculate maximum palindromic substring lengths
    const helper = (s: string): number[] => {
        const man = manachers(s)
        const n = s.length
        const intervals = man.map((len, i) => [i - Math.floor(len / 2), i + Math.floor(len / 2)])
        const maxLengths = new Array(n).fill(0)
        for (const [start, end] of intervals) {
            maxLengths[end] = Math.max(maxLengths[end], end - start + 1)
        }
        for (let i = n - 2; i >= 0; i--) {
            maxLengths[i] = Math.max(maxLengths[i], maxLengths[i + 1] - 2)
        }
        return maxLengths.reduce((acc, curr, idx) => {
            acc.push(idx > 0 ? Math.max(acc[idx - 1], curr) : curr)
            return acc
        }, [] as number[])
    }

    // Forward and reverse pass
    const t1 = helper(s)
    const t2 = helper(s.split('').reverse().join('')).reverse()

    // Calculate max product of lengths of two non-overlapping palindromes
    let maxProduct = 0
    for (let i = 0; i < s.length - 1; i++) {
        maxProduct = Math.max(maxProduct, t1[i] * t2[i + 1])
    }

    return maxProduct
}
