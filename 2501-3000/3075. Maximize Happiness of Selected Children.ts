// Solution by Sergey Leschev
// 3075. Maximize Happiness of Selected Children

// Time complexity: O(nlogn + min(k, n))
// Space complexity: O(1)

function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a)
    let i = 0
    let res = 0

    while (k--) {
        happiness[i] = Math.max(happiness[i] - i, 0)
        res += happiness[i++]
    }

    return res
}
