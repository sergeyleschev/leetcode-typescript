// Solution by Sergey Leschev
// 3102. Minimize Manhattan Distances

// Time complexity: O(n)
// Space complexity: O(1)

function minimumDistance(points: number[][]): number {
    function manhattanDistance(point1: number[], point2: number[]): number {
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
    }

    function maxManhattanDistance(points: number[][], remove: number = -1): [number, number] {
        let n = points.length
        let maxSum = Number.MIN_SAFE_INTEGER,
            minSum = Number.MAX_SAFE_INTEGER
        let maxDiff = Number.MIN_SAFE_INTEGER,
            minDiff = Number.MAX_SAFE_INTEGER
        let maxSumIndex = -1,
            minSumIndex = -1,
            maxDiffIndex = -1,
            minDiffIndex = -1

        for (let i = 0; i < n; i++) {
            if (i !== remove) {
                let sum = points[i][0] + points[i][1]
                let diff = points[i][0] - points[i][1]

                if (sum > maxSum) {
                    maxSumIndex = i
                    maxSum = sum
                }
                if (sum < minSum) {
                    minSumIndex = i
                    minSum = sum
                }
                if (diff > maxDiff) {
                    maxDiffIndex = i
                    maxDiff = diff
                }
                if (diff < minDiff) {
                    minDiffIndex = i
                    minDiff = diff
                }
            }
        }

        return maxSum - minSum >= maxDiff - minDiff ? [maxSumIndex, minSumIndex] : [maxDiffIndex, minDiffIndex]
    }

    const [mi, mj] = maxManhattanDistance(points)
    const [mi1, mj1] = maxManhattanDistance(points, mi) // remove mi
    const [mi2, mj2] = maxManhattanDistance(points, mj) // remove mj

    return Math.min(manhattanDistance(points[mi1], points[mj1]), manhattanDistance(points[mi2], points[mj2]))
}
