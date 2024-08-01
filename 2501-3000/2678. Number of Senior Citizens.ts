// Solution by Sergey Leschev
// 2678. Number of Senior Citizens

// Time complexity: O(n)
// Space complexity: O(1)

function countSeniors(details: string[]): number {
    let counter = 0

    for (const detail of details) {
        const age = parseInt(detail.substring(11, 13))
        if (age > 60) {
            counter++
        }
    }

    return counter
}
