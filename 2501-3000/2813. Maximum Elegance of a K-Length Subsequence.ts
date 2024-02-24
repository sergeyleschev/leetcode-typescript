// Solution by Sergey Leschev
// 2813. Maximum Elegance of a K-Length Subsequence

// # Intuition
// The approach involves sorting the "items" array in descending order based on the "profiti". By selecting the first "k" items, we ensure that we attain the highest possible "total_profit".

// # Approach
// Upon the selection of the initial "k" items, attention turns to the remaining "n - k" items. The viability of adding these items depends on whether they belong to an unexplored category (not yet in the "seen" set).
// Given the restriction of maintaining a subsequence size of "k", a pivotal decision arises. To optimize the elegance metric, the algorithm strategically replaces an existing item with the lowest profit when that item shares its category with another.
// This iterative refinement process continually adjusts the subsequence while upholding the imperative of category distinctiveness.
// The final output of the function encapsulates the pinnacle of elegance attained through this intricate process—a union of the cumulative impact of total profit and the singularity of categories.

// Time complexity: O(N log N)
// Space complexity: O(N)

function findMaximumElegance(items: number[][], k: number): number {
    items.sort((a, b) => b[0] - a[0])
    let res: number = 0
    let cur: number = 0
    let dup: number[] = []
    let seen: Set<number> = new Set()

    for (let i = 0; i < items.length; i++) {
        if (i < k) {
            if (seen.has(items[i][1])) {
                dup.push(items[i][0])
            }
            cur += items[i][0]
        } else if (!seen.has(items[i][1])) {
            if (dup.length === 0) {
                break
            }
            cur += items[i][0] - dup.pop()!
        }
        seen.add(items[i][1])
        res = Math.max(res, cur + seen.size ** 2)
    }

    return res
}
