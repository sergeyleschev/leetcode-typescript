// Solution by Sergey Leschev
// 3008. Find Beautiful Indices in the Given Array II

// Time complexity: O(N)
// Space complexity: O(N)

function getPatternMatchingIndex(s: string, a: string, v: number[]) {
    const t = a + '@' + s
    const lps: number[] = new Array(t.length).fill(0)
    let len = 0
    for (let i = 1; i < t.length; i++) {
        while (len > 0 && t[len] !== t[i]) {
            len = lps[len - 1]
        }
        if (t[len] === t[i]) {
            len++
            lps[i] = len
        } else {
            lps[i] = 0
        }
    }
    for (let i = a.length + 1; i < lps.length; i++) {
        if (lps[i] === a.length) {
            v.push(i - 2 * a.length)
        }
    }
}

function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
    const ans: number[] = []
    const v1: number[] = []
    const v2: number[] = []
    getPatternMatchingIndex(s, a, v1)
    getPatternMatchingIndex(s, b, v2)

    let j = 0
    for (let i = 0; i < v1.length; i++) {
        while (j < v2.length && v1[i] > v2[j] && Math.abs(v1[i] - v2[j]) > k) j++
        if (j < v2.length && Math.abs(v1[i] - v2[j]) <= k) ans.push(v1[i])
    }
    return ans
}
