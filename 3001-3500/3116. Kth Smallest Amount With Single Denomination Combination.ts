// Solution by Sergey Leschev
// 3116. Kth Smallest Amount With Single Denomination Combination

// Time complexity: O(2^n) * log(k), where n = len(coins)
// Space complexity: O(2^n)
// combinatorial mathematics, binary search and number theory to efficiently find the required kth smallest amount.

function findKthSmallest(coins: number[], k: number): number {
    const n = coins.length
    const dic: { [key: number]: number[] } = {}

    for (let i = 1; i <= n; i++) {
        dic[i] = []
    }

    // Helper function to compute the LCM of an array of numbers
    const lcm = (...args: number[]): number => {
        const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
        const lcmOfTwo = (a: number, b: number): number => (a * b) / gcd(a, b)
        return args.reduce((a, b) => lcmOfTwo(a, b))
    }

    // Generate all combinations and calculate their LCMs
    const combinations = (arr: number[], k: number): number[][] => {
        if (k === 0) return [[]]
        if (arr.length === 0) return []
        const [first, ...rest] = arr
        const combsWithoutFirst = combinations(rest, k)
        const combsWithFirst = combinations(rest, k - 1).map(comb => [first, ...comb])
        return [...combsWithFirst, ...combsWithoutFirst]
    }

    for (let i = 1; i <= n; i++) {
        const combs = combinations(coins, i)
        for (const comb of combs) {
            dic[i].push(lcm(...comb))
        }
    }

    // Count the number of amounts less than or equal to target
    const count = (dic: { [key: number]: number[] }, target: number): number => {
        let ans = 0
        for (let i = 1; i <= n; i++) {
            for (const lcm of dic[i]) {
                ans += Math.floor(target / lcm) * Math.pow(-1, i + 1)
            }
        }
        return ans
    }

    // Binary search to find the kth smallest amount
    let start = Math.min(...coins)
    let end = start * k

    while (start + 1 < end) {
        const mid = Math.floor((start + end) / 2)
        if (count(dic, mid) >= k) {
            end = mid
        } else {
            start = mid
        }
    }

    return count(dic, start) >= k ? start : end
}
