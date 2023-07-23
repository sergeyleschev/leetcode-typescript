// Solution by Sergey Leschev

// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
    const scanner: string[] = []
    let longest = 0

    for (const char of s) {
        const possibleIndex = scanner.indexOf(char)

        if (possibleIndex !== -1) {
            scanner.splice(0, possibleIndex + 1)
        }
        scanner.push(char)
        longest = Math.max(longest, scanner.length)
    }

    return longest
}
