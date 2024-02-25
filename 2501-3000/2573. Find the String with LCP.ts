// Solution by Sergey Leschev
// 2573. Find the String with LCP

function findTheString(lcp: number[][]): string {
    const n = lcp.length
    const A: number[] = new Array(n).fill(0)
    let c = 1

    for (let i = 0; i < n; i++) {
        if (A[i] !== 0) continue
        if (c > 26) return ''

        for (let j = i; j < n; j++) {
            if (lcp[i][j] !== 0) {
                A[j] = c
            }
        }
        c++
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const v = i + 1 < n && j + 1 < n ? lcp[i + 1][j + 1] : 0
            const value = A[i] === A[j] ? v + 1 : 0

            if (lcp[i][j] !== value) {
                return ''
            }
        }
    }

    let result = ''
    for (const i of A) {
        const character = String.fromCharCode(i + 97 - 1)
        result += character
    }

    return result
}
