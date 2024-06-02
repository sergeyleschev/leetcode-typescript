// Solution by Sergey Leschev
// 3093. Longest Common Suffix Queries

class TrieNode {
    index: number
    children: Array<TrieNode | null>

    constructor(index: number = Number.MAX_SAFE_INTEGER) {
        this.index = index
        this.children = new Array(26).fill(null)
    }
}

class Trie {
    private root: TrieNode
    private words: string[]

    constructor(words: string[]) {
        this.root = new TrieNode()
        this.words = words

        for (let i = 0; i < words.length; i++) {
            this.insertSuffix(words[i], i)
        }

        this.fillIndices(this.root)
    }

    private change(i: number, j: number): boolean {
        const n = this.words.length
        return (
            0 <= j &&
            j < n &&
            (!(0 <= i && i < n) || this.words[j].length < this.words[i].length || (this.words[j].length === this.words[i].length && j < i))
        )
    }

    private fillIndices(curr: TrieNode): number {
        for (let i = 0; i < 26; i++) {
            const child = curr.children[i]
            const r = child ? this.fillIndices(child) : Number.MAX_SAFE_INTEGER
            if (this.change(curr.index, r)) {
                curr.index = r
            }
        }
        return curr.index
    }

    private insertSuffix(s: string, index: number): void {
        let curr = this.root
        for (let i = s.length - 1; i >= 0; i--) {
            const charIndex = s.charCodeAt(i) - 97
            if (!curr.children[charIndex]) {
                curr.children[charIndex] = new TrieNode()
            }
            curr = curr.children[charIndex]
        }
        curr.index = Math.min(curr.index, index)
    }

    public longestCommonSuffix(s: string): number {
        let curr = this.root
        for (let i = s.length - 1; i >= 0 && curr.children[s.charCodeAt(i) - 97]; i--) {
            curr = curr.children[s.charCodeAt(i) - 97]
        }
        return curr.index
    }
}

function stringIndices(wordsContainer: string[], wordsQuery: string[]): number[] {
    const trie = new Trie(wordsContainer)
    const result: number[] = []
    for (const s of wordsQuery) {
        result.push(trie.longestCommonSuffix(s))
    }
    return result
}
