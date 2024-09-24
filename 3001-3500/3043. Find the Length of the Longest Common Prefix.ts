// Solution by Sergey Leschev
// 3043. Find the Length of the Longest Common Prefix

function length(n: number): number {
    // Convert number to string to calculate its length
    return n.toString().length
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixSet: Set<number> = new Set()

    // For every number in arr1, generate all its prefixes
    for (let num of arr1) {
        while (num > 0) {
            prefixSet.add(num)
            num = Math.floor(num / 10) // Remove last digit to get prefixes
        }
    }

    let maxPrefixLength = 0

    // For every number in arr2, check if any of its prefixes are in arr1
    for (let num of arr2) {
        while (num > 0) {
            if (prefixSet.has(num)) {
                // Update the max length if the common prefix is found
                maxPrefixLength = Math.max(maxPrefixLength, length(num))
                break // Stop since we found the longest prefix for this number
            }
            num = Math.floor(num / 10)
        }
    }

    return maxPrefixLength
}
