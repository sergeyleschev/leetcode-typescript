// Solution @ Sergey Leschev

// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"
     
// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case)

function longestPalindrome(s: string): string {
  if (!s || s.length <= 1) { return s }
  let longestPalindrome = s.substring(0, 1)

  for (let i = 0; i < s.length; i++) {
    [expand(s, i, i), expand(s, i, i + 1)].forEach((maybeLongest) => {
      if (maybeLongest.length > longestPalindrome.length) {
          longestPalindrome = maybeLongest
      }
    })
  }

  return longestPalindrome
}

function expand(s: string, begin: number, end: number): string {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--
    end++
  }

  return s.substring(begin + 1, end)
}