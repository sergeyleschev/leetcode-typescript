// Solution by Sergey Leschev
// 1499. Max Value of Equation

function findMaxValueOfEquation(points: number[][], k: number): number {
    let result = Number.MIN_SAFE_INTEGER
    let right = 0
    let currentX = 0

    for (let left = 0; left < points.length - 1; left++) {
        // for each possible left point (meaning we have the max) for each possible coordinate
        let currentResult = Number.MIN_SAFE_INTEGER // The current result is for the left coordinate

        if (currentX > left && currentX <= right) {
            // if currentX is viable (from the previous X)
            currentResult = points[currentX][0] - points[left][0] + points[left][1] + points[currentX][1] // set the current result for this left
        }
        right = currentX + 1 > left ? currentX + 1 : left + 1 // set the right pointer to the right of the previous currentX, or to the right of the left pointer

        // set up the while loop that will find the max currentResult for any particular right pointer which matches the current left pointer
        // while the right is in bounds, and the question condition that xᵢ - xⱼ < k
        while (right <= points.length - 1 && points[right][0] - points[left][0] <= k) {
            let prospectiveResult = points[right][0] - points[left][0] + points[left][1] + points[right][1] // calculate the prospective result
            if (prospectiveResult >= currentResult) {
                // if the prospectiveResult is larger than the currentResult
                currentResult = prospectiveResult // if we have a larger result, record it
                currentX = right // record the right pointer as currentX
            }
            right++ // slide the right pointer right
        }

        result = Math.max(result, currentResult) // record the largest result for this left - if it is larger than the current
    }

    return result
}
