// Solution by Sergey Leschev
// 2713. Maximum Strictly Increasing Cells in a Matrix

function maxIncreasingCells(mat: number[][]): number {
    const m = mat.length
    const n = mat[0].length

    const A: { [key: number]: number[][] } = {}
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const val = mat[i][j]
            if (!A[val]) {
                A[val] = []
            }
            A[val].push([i, j])
        }
    }

    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0))
    const res: number[] = Array(m + n).fill(0)

    Object.keys(A)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(a => {
            const positions = A[a]
            positions.forEach(pos => {
                const i = pos[0]
                const j = pos[1]
                dp[i][j] = Math.max(res[i], res[m + j]) + 1
            })

            positions.forEach(pos => {
                const i = pos[0]
                const j = pos[1]
                res[m + j] = Math.max(res[m + j], dp[i][j])
                res[i] = Math.max(res[i], dp[i][j])
            })
        })

    let ans = 0
    res.forEach(a => {
        ans = Math.max(ans, a)
    })

    return ans
}
