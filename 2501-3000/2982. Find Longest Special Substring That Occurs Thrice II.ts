// Solution by Sergey Leschev
// 2982. Find Longest Special Substring That Occurs Thrice II

// Time complexity: O(N)
// Space complexity: O(1)

function maximumLength(s: string): number {
    let count = 0
    let last = s[0]
    let ans = 0
    const ump: { [key: string]: number[] } = {}

    for (const char of s) {
        if (char === last) {
            count += 1
        } else {
            ump[last] = ump[last] || []
            ump[last].push(count)

            if (ump[last].length >= 4) {
                ump[last].sort((a, b) => b - a)
                ump[last].pop()
            }

            count = 1
            last = char
        }
    }

    ump[last] = ump[last] || []
    ump[last].push(count)

    for (const key in ump) {
        if (ump.hasOwnProperty(key)) {
            const v = ump[key]
            let l1 = 0
            let l2 = 0
            let l3 = 0

            for (const e of v) {
                if (l1 < e) {
                    ;[l3, l2, l1] = [l2, l1, e]
                } else if (l2 < e) {
                    ;[l3, l2] = [l2, e]
                } else if (l3 < e) {
                    l3 = e
                }
            }

            if (l1 === l2 && l1 > l3) {
                l2 -= 1
            }

            if (l1 + l2 + l3 >= 3) {
                ans = Math.max(ans, l1 - 2, l2)
            }
        }
    }

    return ans !== 0 ? ans : -1
}
