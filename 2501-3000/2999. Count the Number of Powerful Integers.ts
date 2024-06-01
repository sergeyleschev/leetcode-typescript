// Solution by Sergey Leschev
// 2999. Count the Number of Powerful Integers

// Time Complexity: O(log n)
// Memory Complexity: O(log n)

function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    let cnt: number[] = new Array(16).fill(0)

    function count(l: string, n: string, s: string): number {
        let res = cnt[n.length - 1]
        let i = 0
        let sz = n.length - s.length

        do {
            if (i == sz) {
                if (n.substr(i) >= s) {
                    res++
                }
            } else {
                res += cnt[n.length - i - 1] * (Math.min(l.charCodeAt(0), n.charCodeAt(i)) - '1'.charCodeAt(0) + (i > 0 ? 1 : 0))
            }
        } while (i < sz && n[i++] < l)

        return res
    }

    for (let i = s.length; i < 16; ++i) {
        cnt[i] = i == s.length ? 1 : cnt[i - 1] * (limit + 1)
    }

    return (
        count(String.fromCharCode('1'.charCodeAt(0) + limit), finish.toString(), s) -
        count(String.fromCharCode('1'.charCodeAt(0) + limit), (start - 1).toString(), s)
    )
}
