// Solution by Sergey Leschev
// 3086. Minimum Moves to Pick K Ones

// Time Complexity: O(n)
// Space Complexity: O(n)

function minimumMoves(nums: number[], k: number, maxChanges: number): number {
    const A: number[] = [0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            A.push(A[A.length - 1] + i)
        }
    }

    const n = A.length - 1
    const m = Math.max(0, k - maxChanges)
    let res = Number.MAX_VALUE

    for (let l = m; l <= Math.min(n, Math.min(m + 3, k)); l++) {
        for (let i = 0; i <= n - l; i++) {
            const mid1 = i + Math.floor(l / 2)
            const mid2 = i + l - Math.floor(l / 2)
            const cur = A[i + l] - A[mid2] - (A[mid1] - A[i])
            res = Math.min(res, cur + (k - l) * 2)
        }
    }

    return res
}
