// Solution by Sergey Leschev
// 1346. Check If N and Its Double Exist

// O(n), n = arr.length.

function checkIfExist(arr: number[]): boolean {
    const seen = new Set<number>()

    for (const num of arr) {
        if (seen.has(2 * num) || (num % 2 === 0 && seen.has(num / 2))) {
            return true
        }
        seen.add(num)
    }

    return false
}
