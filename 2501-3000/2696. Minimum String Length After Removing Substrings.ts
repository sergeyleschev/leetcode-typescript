// Solution by Sergey Leschev
// 2696. Minimum String Length After Removing Substrings

function minLength(s: string): number {
    const stack: string[] = []

    for (let c of s) {
        if (c === 'B' && stack.length && stack[stack.length - 1] === 'A') {
            stack.pop()
        } else if (c === 'D' && stack.length && stack[stack.length - 1] === 'C') {
            stack.pop()
        } else {
            stack.push(c)
        }
    }

    return stack.length
}
