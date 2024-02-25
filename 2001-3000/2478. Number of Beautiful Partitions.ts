// Solution by Sergey Leschev
// 2478. Number of Beautiful Partitions

function beautifulPartitions(s: string, k: number, minLength: number): number {
    const primes: Set<number> = new Set([2, 3, 5, 7])
    const MOD: number = 1000000007

    const nums: number[] = Array.from(s, char => parseInt(char))
    if (!primes.has(nums[0]) || primes.has(nums[nums.length - 1])) return 0

    const N: number = s.length
    if (N < k * minLength) return 0

    const possibleSplitPoints: number[] = [0]
    for (let i = minLength; i < N; i++) {
        if (primes.has(nums[i]) && !primes.has(nums[i - 1])) {
            possibleSplitPoints.push(i)
        }
    }

    if (possibleSplitPoints.length < k) return 0
    const M: number = possibleSplitPoints.length
    const memo: number[][] = new Array(M + 5).fill(null).map(() => new Array(k + 5).fill(null))

    const dfs = (idx: number, remainK: number): number => {
        if (remainK === 1) {
            return N - possibleSplitPoints[idx] >= minLength ? 1 : 0
        }
        if (N - possibleSplitPoints[idx] < minLength * remainK) return 0
        if (memo[idx][remainK] !== null) return memo[idx][remainK]

        let ans = 0
        let i = idx + 1
        while (i <= M + 1 - remainK) {
            if (possibleSplitPoints[i] - possibleSplitPoints[idx] >= minLength) {
                ans += dfs(i, remainK - 1)
                ans %= MOD
            }
            i++
        }
        memo[idx][remainK] = ans
        return ans
    }

    return dfs(0, k)
}
