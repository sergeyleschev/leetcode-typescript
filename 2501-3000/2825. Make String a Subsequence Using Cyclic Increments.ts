// Solution by Sergey Leschev
// 2825. Make String a Subsequence Using Cyclic Increments

function canMakeSubsequence(str1: string, str2: string): boolean {
    let j = 0
    const n = str1.length
    const m = str2.length

    for (let i = 0; i < n && j < m; i++) {
        // Check if the current character in str1 can match the current character in str2
        if ((str2.charCodeAt(j) - str1.charCodeAt(i) + 26) % 26 <= 1) {
            j++
        }
    }

    return j === m
}
