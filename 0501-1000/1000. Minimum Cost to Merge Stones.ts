// Solution by Sergey Leschev
// 1000. Minimum Cost to Merge Stones

function mergeStones(stones: number[], k: number): number {
    const N = stones.length
    const prefix = [0, ...stones]
    for (let i = 1; i <= N; i++) {
        prefix[i] += prefix[i - 1]
    }

    const memo: number[][][] = new Array(N + 5).fill(null).map(() => new Array(N + 5).fill(null).map(() => new Array(k + 5).fill(undefined)))

    function dfs(left: number, right: number, parts: number): number {
        if ((right - left + 1 - parts) % (k - 1) !== 0) {
            return Infinity
        }
        if (left === right) {
            return parts === 1 ? 0 : Infinity
        }
        if (memo[left][right][parts] !== undefined) {
            return memo[left][right][parts]
        }
        if (parts === 1) {
            return dfs(left, right, k) + prefix[right + 1] - prefix[left]
        }
        let ans = Infinity
        for (let pivot = left; pivot < right; pivot++) {
            ans = Math.min(ans, dfs(left, pivot, 1) + dfs(pivot + 1, right, parts - 1))
        }
        memo[left][right][parts] = ans
        return ans
    }

    const ans = dfs(0, N - 1, 1)
    return ans >= Infinity ? -1 : ans
}
