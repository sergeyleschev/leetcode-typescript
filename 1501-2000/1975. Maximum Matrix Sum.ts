// Solution by Sergey Leschev
// 1975. Maximum Matrix Sum

function maxMatrixSum(matrix: number[][]): number {
    let negCount = 0 // Count of negative numbers
    let totalSum = 0 // Sum of absolute values of all elements
    let minAbsValue = Number.MAX_SAFE_INTEGER // Minimum absolute value in the matrix

    const n = matrix.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const value = matrix[i][j]
            totalSum += Math.abs(value)
            if (value < 0) {
                negCount++
            }
            minAbsValue = Math.min(minAbsValue, Math.abs(value))
        }
    }

    // If the count of negative numbers is even, we can flip all negatives to positives
    if (negCount % 2 === 0) {
        return totalSum
    } else {
        // Otherwise, one smallest absolute value must remain negative
        return totalSum - 2 * minAbsValue
    }
}
