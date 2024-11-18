// Solution by Sergey Leschev
// 1652. Defuse the Bomb

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(N)

function decrypt(code: number[], k: number): number[] {
    const n = code.length
    const result = new Array(n).fill(0)

    if (k === 0) return result

    const absK = Math.abs(k)
    const isPositive = k > 0

    for (let i = 0; i < n; i++) {
        let sum = 0

        for (let j = 1; j <= absK; j++) {
            const idx = isPositive
                ? (i + j) % n // Next elements for k > 0
                : (i - j + n) % n // Previous elements for k < 0
            sum += code[idx]
        }

        result[i] = sum
    }

    return result
}
