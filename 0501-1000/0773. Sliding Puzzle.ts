// Solution by Sergey Leschev
// 773. Sliding Puzzle
// BFS

function slidingPuzzle(board: number[][]): number {
    const target = '123450'
    let start = board.flat().join('')
    const visited = new Set<string>()
    const dirs = [
        [1, 3], // Moves for position 0
        [0, 2, 4], // Moves for position 1
        [1, 5], // Moves for position 2
        [0, 4], // Moves for position 3
        [1, 3, 5], // Moves for position 4
        [2, 4] // Moves for position 5
    ]

    const queue: string[] = [start]
    visited.add(start)
    let steps = 0

    while (queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const current = queue.shift()!
            if (current === target) return steps

            const zeroIndex = current.indexOf('0')
            for (const dir of dirs[zeroIndex]) {
                const nextState = swap(current, zeroIndex, dir)
                if (!visited.has(nextState)) {
                    visited.add(nextState)
                    queue.push(nextState)
                }
            }
        }
        steps++
    }

    return -1

    function swap(state: string, i: number, j: number): string {
        const arr = state.split('')
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        return arr.join('')
    }
}
