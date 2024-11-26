// Solution by Sergey Leschev
// 2924. Find Champion II

// Time Complexity: O(n + e)
// Space Complexity: O(n)

function findChampion(n: number, edges: number[][]): number {
    // Create a set to track teams that have lost
    const losses = new Set<number>()

    // Mark all teams that have lost at least once
    for (const [_, loser] of edges) {
        losses.add(loser)
    }

    let champion = -1

    // Check which team hasn't lost
    for (let i = 0; i < n; i++) {
        if (!losses.has(i)) {
            // If we already have a potential champion, return -1 as there's no unique champion
            if (champion !== -1) {
                return -1
            }
            champion = i
        }
    }

    return champion
}
