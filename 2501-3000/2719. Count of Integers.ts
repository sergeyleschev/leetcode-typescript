// Solution by Sergey Leschev
// 2719. Count of Integers

const mod = 1000000007

function count(num1: string, num2: string, min_sum: number, max_sum: number): number {
    const mn = min_sum
    const mx = max_sum

    const dp: number[][][] = Array.from({ length: 23 }, () => Array.from({ length: 500 }, () => Array(2).fill(-1)))

    const rec = (s1: string[], ind: number, num: number, smaller: boolean): number => {
        if (ind === s1.length) {
            return num >= mn && num <= mx ? 1 : 0
        }

        if (dp[ind][num][smaller ? 1 : 0] !== -1) {
            return dp[ind][num][smaller ? 1 : 0]
        }

        let ans = 0

        ans = (ans + rec(s1, ind + 1, num + 0, smaller || s1[ind] !== '0')) % mod

        if (smaller) {
            for (let i = 1; i <= 9; i++) {
                ans = (ans + rec(s1, ind + 1, num + i, smaller)) % mod
            }
        } else {
            const diff = parseInt(s1[ind])
            if (diff > 0) {
                for (let i = 1; i < diff; i++) {
                    ans = (ans + rec(s1, ind + 1, num + i, true)) % mod
                }
            }
            if (s1[ind] !== '0') {
                ans = (ans + rec(s1, ind + 1, num + diff, false)) % mod
            }
        }

        dp[ind][num][smaller ? 1 : 0] = ans
        return ans
    }

    const check = (num: string): number => {
        let ans = 0
        for (const ch of num) {
            ans += parseInt(ch)
        }
        return ans >= mn && ans <= mx ? 1 : 0
    }

    const a = rec(num2.split(''), 0, 0, false)

    dp.forEach(arr => arr.forEach(innerArr => innerArr.fill(-1)))

    const b = rec(num1.split(''), 0, 0, false)

    return (a - b + check(num1) + mod) % mod
}
