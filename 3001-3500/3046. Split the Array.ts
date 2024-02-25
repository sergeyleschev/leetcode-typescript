// Solution by Sergey Leschev
// 3046. Split the Array

function isPossibleToSplit(nums: number[]): boolean {
    const counts = new Map<number, number>()

    // Count occurrences of each element
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1)
    }

    // Check if all counts are less than or equal to 2
    for (const count of counts.values()) {
        if (count > 2) {
            return false
        }
    }

    return true
}
