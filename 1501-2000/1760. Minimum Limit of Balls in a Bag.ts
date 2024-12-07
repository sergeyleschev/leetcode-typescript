// Solution by Sergey Leschev
// 1760. Minimum Limit of Balls in a Bag

// Time Complexity: O(n log 10^9)
// Space Complexity: O(1)

function minimumSize(nums: number[], maxOperations: number): number {
    let left = 1,
        right = Math.max(...nums)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        let operations = 0

        for (const num of nums) {
            // Calculate the number of operations required to make the largest bag <= mid
            operations += Math.floor((num - 1) / mid)
        }

        if (operations > maxOperations) {
            // If more operations are needed, increase the penalty
            left = mid + 1
        } else {
            // Otherwise, try a smaller penalty
            right = mid
        }
    }

    return left
}
