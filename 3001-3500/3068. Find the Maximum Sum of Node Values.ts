// Solution by Sergey Leschev
// 3068. Find the Maximum Sum of Node Values

function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    // Calculate the initial sum of the nums array
    let initialSum = nums.reduce((acc, val) => acc + val, 0)

    // Compute the potential maximum sum after performing XOR operations
    let potentialSum = nums.reduce((acc, val) => acc + Math.max(val, val ^ k), 0)

    // Count the number of nodes where (val ^ k) > val
    let xorBetterCount = nums.reduce((acc, val) => acc + ((val ^ k) > val ? 1 : 0), 0)

    // If the count of better XOR transformations is even, we can use all of them
    if (xorBetterCount % 2 === 0) {
        return potentialSum
    } else {
        // If the count is odd, we need to adjust by removing the smallest impact
        // Calculate the minimal difference in value where we switch back to original
        let minDifference = Math.min(...nums.map(val => Math.abs(val - (val ^ k))))
        return potentialSum - minDifference
    }
}
