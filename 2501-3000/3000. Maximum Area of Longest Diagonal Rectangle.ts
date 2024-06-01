// Solution by Sergey Leschev
// 3000. Maximum Area of Longest Diagonal Rectangle

function areaOfMaxDiagonal(dimensions: number[][]): number {
    // Function to calculate the diagonal length
    const calculateDiagonal = (length: number, width: number): number => {
        return Math.sqrt(length * length + width * width)
    }

    // Initialize variables to track the maximum diagonal and area
    let maxDiagonal = 0
    let maxArea = 0

    // Iterate through each dimension to find the rectangle with the longest diagonal
    for (const [length, width] of dimensions) {
        const diagonal = calculateDiagonal(length, width)
        const area = length * width

        if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > maxArea)) {
            maxDiagonal = diagonal
            maxArea = area
        }
    }

    return maxArea
}
