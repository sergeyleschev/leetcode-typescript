// Solution by Sergey Leschev
// 3163. String Compression III

// Time complexity: O(n) -> for traversing the string
// Space complexity: O(n) -> to store the "comp" string

function compressedString(word: string): string {
    let comp = ''
    let count = 1
    let currentChar = word[0]

    for (let i = 1; i < word.length; i++) {
        if (word[i] === currentChar && count < 9) {
            count++
        } else {
            comp += count.toString() + currentChar
            currentChar = word[i]
            count = 1
        }
    }

    comp += count.toString() + currentChar

    return comp
}
