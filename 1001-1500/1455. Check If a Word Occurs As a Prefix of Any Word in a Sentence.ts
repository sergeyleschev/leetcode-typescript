// Solution by Sergey Leschev
// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

// Time Complexity: O(n), where n is the number of characters in the sentence. We do through the sentence exactly once.
// Memory Complexity: O(1).

function isPrefixOfWord(sentence: string, searchWord: string): number {
    const words = sentence.split(' ')

    // Iterate through the words and check if searchWord is a prefix
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            // Return the 1-based index
            return i + 1
        }
    }

    // If no word has the searchWord as a prefix, return -1
    return -1
}
