// Solution @ Sergey Leschev, Belarusian State University

// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    
// An input string is valid if:
// 1. Contains just the characters '(', ')', '{', '}', '[' and ']'
// 2. Open brackets must be closed by the same type of brackets.
// 3. Open brackets must be closed in the correct order.
// 4. An empty string is also considered valid.

// Returns boolean value indicating whether the input string is valid.
     
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true
     
// Constraints:
// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

// - Parameter s: Input string
// - Returns: Is the input string valid.

const brackets: {[key: string]: string} = {
  ']': '[',
  '}': '{',
  ')': '(' 
}

function isValid(s: string): boolean {
  const stack: string[] = []
  const chars = s.split('')

  for (const char of chars) {
    if (isClosing(char)) {
      const opening = stack.pop()

      if (brackets[char] !== opening) { return false }
    } else { stack.push(char) }
  }

  return stack.length === 0
}

function isClosing(s: string): boolean {
  return brackets.hasOwnProperty(s)
}