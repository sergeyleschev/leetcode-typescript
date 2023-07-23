// Solution by Sergey Leschev

// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 10^5
// s consist of printable ASCII characters.

function reverseVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const collectedVowels = s.split('').filter(e => vowels.includes(e))

    return s
        .split('')
        .map(e => (vowels.includes(e) ? collectedVowels.pop() : e))
        .join('')
}
