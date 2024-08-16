// Solution by Sergey Leschev
// 624. Maximum Distance in Arrays

function maxDistance(arrays: number[][]): number {
    let result = -Infinity
    let max = arrays[0][arrays[0].length - 1] // The maximum element from the first array
    let min = arrays[0][0] // The minimum element from the first array

    for (let i = 1; i < arrays.length; i++) {
        // Calculate the distance between the minimum of the current array and the max found so far
        result = Math.max(result, Math.abs(arrays[i][0] - max))
        // Calculate the distance between the maximum of the current array and the min found so far
        result = Math.max(result, Math.abs(arrays[i][arrays[i].length - 1] - min))

        // Update max and min
        max = Math.max(max, arrays[i][arrays[i].length - 1])
        min = Math.min(min, arrays[i][0])
    }

    return result
}
