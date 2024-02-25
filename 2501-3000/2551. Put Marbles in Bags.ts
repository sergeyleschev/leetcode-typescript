// Solution by Sergey Leschev
// 2551. Put Marbles in Bags

function putMarbles(weights: number[], k: number): number {
    const n = weights.length
    if (k === 1 || n === k) {
        return 0
    }

    const candidates: number[] = []
    for (let i = 0; i < n - 1; i++) {
        candidates.push(weights[i] + weights[i + 1])
    }
    candidates.sort((a, b) => a - b)

    let mins = 0
    let maxs = 0
    for (let i = 0; i < k - 1; i++) {
        mins += candidates[i]
        maxs += candidates[n - 2 - i]
    }

    return maxs - mins
}
