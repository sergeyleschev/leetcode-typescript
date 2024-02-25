// Solution by Sergey Leschev
// 1494. Parallel Courses II

function minNumberOfSemesters(n: number, relations: number[][], k: number): number {
    // Function to count the number of set bits in an integer
    const bitCnt = (num: number): number => {
        let count = 0
        let a = num
        while (a > 0) {
            a &= a - 1
            count++
        }
        return count
    }

    // Creating prerequisites array
    const pre: number[] = new Array(n).fill(0)
    for (const relation of relations) {
        pre[relation[1] - 1] |= 1 << (relation[0] - 1)
    }

    // Dynamic programming array initialization
    const dp: number[] = new Array(1 << n).fill(n)
    dp[0] = 0

    // DP loop
    for (let i = 0; i < 1 << n; i++) {
        let ex = 0
        for (let j = 0; j < n; j++) {
            if ((i & pre[j]) === pre[j]) {
                ex |= 1 << j
            }
        }
        ex &= ~i
        let s = ex
        while (s > 0) {
            if (bitCnt(s) <= k) {
                dp[i | s] = Math.min(dp[i | s], dp[i] + 1)
            }
            s = (s - 1) & ex
        }
    }
    return dp[(1 << n) - 1]
}
