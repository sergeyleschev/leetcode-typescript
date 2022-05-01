// Solution @ Sergey Leschev, Belarusian State University

// 290. Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Finds if str follows the pattern.
// - Parameters:
//   - pattern: The pattern.
//   - str: The string.
// - Returns: True if str follows the pattern, otherwise returns false.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Example 4:
// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

// Constraints:
// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lower-case English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ')
    if (pattern.length !== words.length) { return false }
    const patternMap = new Map()
    const inversePatternMap = new Map()
  
    return words.every((e, i) => {
      if (patternMap.has(pattern[i])) {
        if (patternMap.get(pattern[i]) !== e) { return false }

      } else {
        if (inversePatternMap.has(e)) { return false }
        patternMap.set(pattern[i], e)
        inversePatternMap.set(e, pattern[i])
      }
      
      return true
    })
}