// Solution by Sergey Leschev

// 383. Ransom Note
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Findes if ransom note can be constructed from the magazines.

// - Parameters:
//   - ransomNote: Ransom note string
//   - magazine: Magazine string
// - Returns: True if the ransom note can be constructed, otherwise returns false.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 10^5
// ransomNote and magazine consist of lowercase English letters.

function countCharater(str: string): { [key: string]: number } {
    const obj: { [key: string]: number } = {}

    str.split('').forEach(e => {
        if (obj[e] === undefined) {
            obj[e] = 1
        } else {
            obj[e] += 1
        }
    })
    return obj
}

function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomNoteCounter = countCharater(ransomNote)
    const magazineCounter = countCharater(magazine)

    return Object.entries(ransomNoteCounter).every(e => {
        return magazineCounter[e[0]] >= ransomNoteCounter[e[0]]
    })
}
