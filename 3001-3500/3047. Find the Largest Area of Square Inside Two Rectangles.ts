// Solution by Sergey Leschev
// 3047. Find the Largest Area of Square Inside Two Rectangles

// Time complexity: O(n^2)
// Space complexity: O(1)

function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
    let area: number = 0

    for (let i = 0; i < bottomLeft.length; i++) {
        for (let j = i + 1; j < bottomLeft.length; j++) {
            let minimum_x: number = Math.max(bottomLeft[i][0], bottomLeft[j][0])
            let maximum_x: number = Math.min(topRight[i][0], topRight[j][0])
            let minimum_y: number = Math.max(bottomLeft[i][1], bottomLeft[j][1])
            let maximum_y: number = Math.min(topRight[i][1], topRight[j][1])

            if (minimum_x < maximum_x && minimum_y < maximum_y) {
                let s: number = Math.min(maximum_x - minimum_x, maximum_y - minimum_y)
                area = Math.max(area, s * s)
            }
        }
    }

    return area
}
