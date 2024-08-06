// Solution by Sergey Leschev
// 3016. Minimum Number of Pushes to Type Word II

// Time complexity: O(n)
// Space complexity: O(26)

function minimumPushes(word: string): number {
    // Array to store the frequency of each letter
    const freq: number[] = new Array(26).fill(0)

    // Calculate the frequency of each character in the word
    for (const char of word) {
        freq[char.charCodeAt(0) - 97]++
    }

    // Sort the frequencies in descending order
    freq.sort((a, b) => b - a)

    let sz = 0
    let push = 1
    let ans = 0

    // Calculate the minimum pushes needed
    while (sz < 26 && freq[sz] !== 0) {
        if (sz >= 8 && sz % 8 === 0) {
            push++
        }
        ans += freq[sz] * push
        sz++
    }

    return ans
}
