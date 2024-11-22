// Solution by Sergey Leschev
// 1072. Flip Columns For Maximum Number of Equal Rows

function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const m = matrix.length
    const n = matrix[0].length
    const rowPatterns = new Map<string, number>()

    for (let i = 0; i < m; i++) {
        const pattern = []
        const flipPattern = []

        for (let j = 0; j < n; j++) {
            // Create a pattern for the current row and its flipped version
            pattern.push(matrix[i][j])
            flipPattern.push(1 - matrix[i][j])
        }

        const patternKey = pattern.join(',')
        const flipKey = flipPattern.join(',')

        // Count occurrences of both the row pattern and its flipped pattern
        rowPatterns.set(patternKey, (rowPatterns.get(patternKey) || 0) + 1)
        rowPatterns.set(flipKey, (rowPatterns.get(flipKey) || 0) + 1)
    }

    let maxRows = 0

    // Find the maximum count among all patterns
    for (const count of rowPatterns.values()) {
        maxRows = Math.max(maxRows, count)
    }

    return maxRows
}
