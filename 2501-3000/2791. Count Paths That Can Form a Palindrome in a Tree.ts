// Solution by Sergey Leschev
// 2791. Count Paths That Can Form a Palindrome in a Tree

function countPalindromePaths(parent: number[], s: string): number {
    const n = s.length
    const con: number[][] = Array.from({ length: n }, () => [])

    for (let i = 1; i < n; i++) {
        con[parent[i]].push(i)
    }

    function dfs(x: number, mask: number, s: string, con: number[][], have: { [key: number]: number }): number {
        let r = 0
        let currentMask = mask

        if (x > 0) {
            currentMask ^= 1 << (s.charCodeAt(x) - 'a'.charCodeAt(0))
            let i = 1 << 25

            while (i > 0) {
                if (have[currentMask ^ i]) {
                    r += have[currentMask ^ i]
                }
                i >>= 1
            }

            r += have[currentMask] || 0
            have[currentMask] = (have[currentMask] || 0) + 1
        }

        for (const y of con[x]) {
            r += dfs(y, currentMask, s, con, have)
        }

        return r
    }

    const have: { [key: number]: number } = { 0: 1 }
    return dfs(0, 0, s, con, have)
}
