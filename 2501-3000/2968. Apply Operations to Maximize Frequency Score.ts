// Solution by Sergey Leschev
// 2968. Apply Operations to Maximize Frequency Score

function maxFrequencyScore(nums: number[], k: number): number {
    const sortedNums = nums.slice().sort((a, b) => a - b)
    const n = nums.length
    const prefixSum: number[] = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + sortedNums[i]
    }

    let start = 0
    let end = 1
    let maxScore = 1

    while (end < n) {
        end++
        const mid = Math.floor((start + end) / 2)
        const target = sortedNums[mid]
        let cost = target * (mid - start) - (prefixSum[mid] - prefixSum[start]) + (prefixSum[end] - prefixSum[mid] - target * (end - mid))

        while (start < end && cost > k) {
            start++
            const mid = Math.floor((start + end) / 2)
            const target = sortedNums[mid]
            cost = target * (mid - start) - (prefixSum[mid] - prefixSum[start]) + (prefixSum[end] - prefixSum[mid] - target * (end - mid))
        }

        maxScore = Math.max(maxScore, end - start)
    }

    return maxScore
}
