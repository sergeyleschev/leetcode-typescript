// Solution @ Sergey Leschev, Belarusian State University

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
     
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) { return "" }
  if (strings.length === 1) { return strings[0] }
  let possiblePrefix = ""
  
  while (strings.every((str) => str.startsWith(possiblePrefix))) {
    const newPossiblePrefix = strings[0].substr(0, possiblePrefix.length + 1)

    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix
    } else { break }
  }

  return possiblePrefix.slice(0, -1)
}