// Solution by Sergey Leschev
// 2528. Maximize the Minimum Powered City

function maxPower(stations: number[], r: number, k: number): number {
    const n = stations.length
    const a: number[] = Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        const l = Math.max(i - r, 0)
        const x = Math.min(i + r, n - 1)
        a[l] += stations[i]
        a[x + 1] -= stations[i]
    }

    for (let i = 1; i < n; i++) {
        a[i] += a[i - 1]
    }

    let hi: number = Number.MAX_SAFE_INTEGER
    let lo: number = 0
    let ans: number = 0

    while (lo <= hi) {
        const mid: number = lo + Math.floor((hi - lo) / 2)
        const add: number[] = Array(n + 1).fill(0)
        let rem: number = k

        for (let i = 0; i < n; i++) {
            if (i > 0) {
                add[i] += add[i - 1]
            }

            const got: number = a[i] + add[i]

            if (got < mid) {
                const need: number = mid - got
                rem -= need
                if (rem < 0) {
                    break
                }
                const j: number = Math.min(i + r + r, n - 1)
                add[i] += need
                add[j + 1] -= need
            }
        }

        if (rem >= 0) {
            ans = mid
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    return ans
}
