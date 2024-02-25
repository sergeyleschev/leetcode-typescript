// Solution by Sergey Leschev
// 2565. Subsequence With the Minimum Score

function minimumScore(s: string, t: string): number {
    const sArray: string[] = Array.from(s)
    const tArray: string[] = Array.from(t)
    let lo: number = 0
    let hi: number = t.length

    while (lo <= hi) {
        const m: number = (lo + hi) >> 1
        if (check(sArray, tArray, m)) {
            hi = m - 1
        } else {
            lo = m + 1
        }
    }
    return hi + 1
}

function check(s: string[], t: string[], len: number): boolean {
    const tLength: number = t.length
    const n: number = s.length

    if (len >= tLength) {
        return true // delete whole t array
    }

    let pos: number[] = Array(tLength).fill(1_000_000_0) // Greedy left matching
    let tLeftIndex: number = 0

    for (let i = 0; i < n; i++) {
        if (tLeftIndex === tLength) {
            break
        }
        if (t[tLeftIndex] === s[i]) {
            pos[tLeftIndex] = i
            tLeftIndex += 1
        }
    }

    if (tLeftIndex >= tLength - len) {
        return true // we can delete right subarray of length len
    }

    let rightIndexOfS: number = n - 1
    let rp: number = tLength - 1

    while (rp >= len) {
        while (rightIndexOfS >= 0 && s[rightIndexOfS] !== t[rp]) {
            rightIndexOfS -= 1
        }
        if (rightIndexOfS === -1) {
            return false
        }
        const lp: number = rp - len - 1
        if (lp === -1 || pos[lp] < rightIndexOfS) {
            return true
        }
        rightIndexOfS -= 1
        rp -= 1
    }
    return false
}
