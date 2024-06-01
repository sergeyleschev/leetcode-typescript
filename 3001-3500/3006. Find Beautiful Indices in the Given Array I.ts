// Solution by Sergey Leschev
// 3006. Find Beautiful Indices in the Given Array I

function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
    // Array to store the beautiful indices
    const ans: number[] = []
    const indicesA: number[] = []
    const indicesB: number[] = []

    // Lengths of strings
    const x = s.length
    const y = a.length
    const z = b.length

    // Find indices of occurrences of string 'a'
    for (let i = 0; i <= x - y; i++) {
        if (s.substr(i, y) === a) {
            indicesA.push(i)
        }
    }

    // Find indices of occurrences of string 'b'
    for (let j = 0; j <= x - z; j++) {
        if (s.substr(j, z) === b) {
            indicesB.push(j)
        }
    }

    // Check conditions and add beautiful indices to 'ans'
    for (let i = 0; i < indicesA.length; i++) {
        for (let j = 0; j < indicesB.length; j++) {
            // Check if absolute difference <= k
            if (Math.abs(indicesA[i] - indicesB[j]) <= k) {
                ans.push(indicesA[i])
                break
            }
        }
    }

    // Sort the beautiful indices in ascending order
    ans.sort((a, b) => a - b)

    // Return the final result
    return ans
}
