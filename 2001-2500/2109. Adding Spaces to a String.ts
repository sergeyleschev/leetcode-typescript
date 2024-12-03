// Solution by Sergey Leschev
// 2109. Adding Spaces to a String

// Two Pointers
// We go through the string, tracking the position in the spaces array.

function addSpaces(s: string, spaces: number[]): string {
    let result = ''
    let spaceIndex = 0

    for (let i = 0; i < s.length; i++) {
        if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
            result += ' '
            spaceIndex++
        }
        result += s[i]
    }

    return result
}
