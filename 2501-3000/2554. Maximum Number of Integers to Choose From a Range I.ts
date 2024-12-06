// Solution by Sergey Leschev
// 2554. Maximum Number of Integers to Choose From a Range I

// Time complexity: O(n)
// Space complexity: O(n)

function maxCount(banned: number[], n: number, maxSum: number): number {
    const bannedSet = new Set(banned)
    let count = 0

    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) {
            continue
        }
        if (i <= maxSum) {
            count++
            maxSum -= i
        } else {
            break
        }
    }

    return count
}
