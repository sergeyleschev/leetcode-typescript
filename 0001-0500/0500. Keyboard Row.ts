// Solution by Sergey Leschev
// 500. Keyboard Row

function findWords(words: string[]): string[] {
    const keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    const result: string[] = []

    function isInRow(word: string, row: string): boolean {
        for (const char of word) {
            if (!row.includes(char.toLowerCase())) {
                return false
            }
        }
        return true
    }

    for (const word of words) {
        const lowercaseWord = word.toLowerCase()
        for (const row of keyboardRows) {
            if (isInRow(lowercaseWord, row)) {
                result.push(word)
                break
            }
        }
    }

    return result
}
