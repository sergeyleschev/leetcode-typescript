// Solution by Sergey Leschev
// 32. Longest Valid Parentheses

function longestValidParentheses(s: string): number {
    const stack: number[] = []
    let longest = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            if (stack.length !== 0) {
                if (s[stack[stack.length - 1]] === '(') {
                    stack.pop()
                } else {
                    stack.push(i)
                }
            } else {
                stack.push(i)
            }
        }
    }

    if (stack.length === 0) {
        longest = s.length
    } else {
        let a = s.length
        let b = 0
        while (stack.length !== 0) {
            b = stack.pop()!
            longest = Math.max(longest, a - b - 1)
            a = b
        }
        longest = Math.max(longest, a)
    }
    return longest
}
