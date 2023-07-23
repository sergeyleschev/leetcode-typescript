// Solution by Sergey Leschev

// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Constraints:
// 1 <= s.length <= 5 * 10^4
// t.length == s.length
// s and t consist of any valid ascii character.

function isIsomorphic(s: string, t: string): boolean {
    return getInvariant(s) === getInvariant(t)
}

function getInvariant(s: string): string {
    const symbols: string[] = []
    let invariant = ''

    for (const char of s) {
        let maybeIndex = symbols.indexOf(char)

        if (maybeIndex === -1) {
            symbols.push(char)
            maybeIndex = symbols.length - 1
        }

        invariant += maybeIndex.toString()
    }

    return invariant
}
