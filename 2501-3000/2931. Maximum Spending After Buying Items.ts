// Solution by Sergey Leschev
// 2931. Maximum Spending After Buying Items

// Time complexity: O(n logn)
// Space complexity: O(n)

function maxSpending(values: number[][]): number {
    // Alias for BigInt data type
    type BigInt = bigint

    // Flatten the 2D array into a 1D array
    let flattenedValues: BigInt[] = []
    for (let row of values) {
        flattenedValues.push(...row.map(val => BigInt(val)))
    }

    // Sort the values in ascending order
    flattenedValues.sort((a, b) => Number(a - b))

    // Variable to store the final result
    let ans: BigInt = BigInt(0)

    // Calculate the maximum spending
    for (let i = 0; i < flattenedValues.length; i++) {
        ans += flattenedValues[i] * BigInt(i + 1)
    }

    // Return the maximum spending
    return Number(ans)
}
