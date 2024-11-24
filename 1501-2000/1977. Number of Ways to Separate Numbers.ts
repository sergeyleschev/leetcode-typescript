// Solution by Sergey Leschev
// 1977. Number of Ways to Separate Numbers

// DP
// O(n^2)

function numberOfCombinations(num: string): number {
    const MOD = 1e9 + 7

    const addMod = (a: number, b: number) => (a + b + MOD) % MOD

    const n = num.length
    if (num[0] === '0') return 0

    const same = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
    for (let i = n - 1; i >= 0; --i) {
        for (let j = n - 1; j >= 0; --j) {
            if (num[i] === num[j]) {
                same[i][j] = same[i + 1][j + 1] + 1
            }
        }
    }

    const compare = (i: number, j: number, len: number): boolean => {
        const common = same[i][j]
        if (common >= len) return true // Equal substrings
        return num[i + common] < num[j + common] // First substring is smaller
    }

    const pref = Array.from({ length: n }, () => Array(n).fill(0))

    // Base case
    for (let j = 0; j < n; ++j) pref[0][j] = 1

    for (let i = 1; i < n; ++i) {
        if (num[i] === '0') {
            pref[i] = [...pref[i - 1]]
            continue
        }

        for (let j = i; j < n; ++j) {
            const len = j - i + 1
            const prevStart = i - 1 - (len - 1)
            let count = 0

            if (prevStart < 0) {
                count = pref[i - 1][i - 1]
            } else {
                count = addMod(pref[i - 1][i - 1], -pref[prevStart][i - 1])

                if (compare(prevStart, i, len)) {
                    const cnt = prevStart === 0 ? pref[prevStart][i - 1] : addMod(pref[prevStart][i - 1], -pref[prevStart - 1][i - 1])
                    count = addMod(count, cnt)
                }
            }

            pref[i][j] = addMod(pref[i - 1][j], count)
        }
    }

    return pref[n - 1][n - 1]
}
