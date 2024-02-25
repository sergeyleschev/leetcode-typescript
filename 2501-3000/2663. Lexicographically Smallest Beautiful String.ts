// Solution by Sergey Leschev
// 2663. Lexicographically Smallest Beautiful String

function smallestBeautifulString(s: string, k: number): string {
    const ch = Array.from(s)
    let i = ch.length - 1

    while (i >= 0) {
        ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 1)
        if (ch[i].charCodeAt(0) - 97 === k) {
            i -= 1
        } else if ((i - 1 < 0 || ch[i - 1] !== ch[i]) && (i - 2 < 0 || ch[i - 2] !== ch[i])) {
            break
        }
    }

    if (i < 0) {
        return ''
    }

    for (let j = i + 1; j < ch.length; j++) {
        const set = new Set(['a', 'b', 'c'])
        if (j - 2 >= 0) {
            set.delete(ch[j - 2])
        }
        if (j - 1 >= 0) {
            set.delete(ch[j - 1])
        }
        ch[j] = Array.from(set)[0]
    }

    return ch.join('')
}
