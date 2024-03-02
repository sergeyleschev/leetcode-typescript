// Solution by Sergey Leschev
// 30. Substring with Concatenation of All Words

function findSubstring(s: string, words: string[]): number[] {
    const indexes: number[] = []
    const counts: Map<string, number> = new Map()
    for (const word of words) {
        counts.set(word, (counts.get(word) || 0) + 1)
    }

    const n: number = s.length
    const num: number = words.length
    const len: number = words[0].length

    for (let i = 0; i < n - num * len + 1; i++) {
        const seen: Map<string, number> = new Map()
        let j = 0
        while (j < num) {
            const word: string = s.substring(i + j * len, i + (j + 1) * len)
            if (counts.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1)
                if ((seen.get(word) || 0) > (counts.get(word) || 0)) {
                    break
                }
            } else {
                break
            }
            j++
        }
        if (j === num) {
            indexes.push(i)
        }
    }
    return indexes
}
