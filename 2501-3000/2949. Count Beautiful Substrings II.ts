// Solution by Sergey Leschev
// 2949. Count Beautiful Substrings II

// Time Complexity: O(n + k)
// Space Complexity: O(n + k)

function beautifulSubstrings(s: string, k: number): number {
    const n = s.length
    let v = 0
    let l = 1
    while ((l * l) % (k * 4) !== 0) {
        l += 1
    }

    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u'])
    const seen: { [key: number]: { [key: number]: number } } = {}
    seen[l - 1] = {}
    seen[l - 1][0] = 1
    let res: number = 0

    for (let i = 0; i < n; i++) {
        const char = s[i]
        v += vowels.has(char) ? 1 : -1
        res += seen[i % l]?.[v] ?? 0
        if (!seen[i % l]) {
            seen[i % l] = {}
        }
        seen[i % l][v] = (seen[i % l][v] ?? 0) + 1
    }

    return res
}
