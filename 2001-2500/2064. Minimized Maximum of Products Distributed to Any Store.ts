// Solution by Sergey Leschev
// 2064. Minimized Maximum of Products Distributed to Any Store

// Time Complexity: O(n log 100000) < O(14n)
// Space Complexity: O(1)

function minimizedMaximum(n: number, quantities: number[]): number {
    let left = 1
    let right = Math.max(...quantities)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        let storesNeeded = 0

        for (const quantity of quantities) {
            storesNeeded += Math.ceil(quantity / mid)
        }

        if (storesNeeded > n) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}
