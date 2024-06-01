// Solution by Sergey Leschev
// 2998. Minimum Number of Operations to Make X and Y Equal

function minimumOperationsToMakeEqual(x: number, y: number): number {
    // Create a set to keep track of visited numbers
    const visited = new Set<number>()
    // Create a queue to manage the BFS
    const queue: Array<[number, number]> = []

    // Initialize the queue with the starting number x and 0 operations
    queue.push([x, 0])
    visited.add(x)

    while (queue.length > 0) {
        const [current, steps] = queue.shift()!

        // If current number is equal to y, return the number of steps
        if (current === y) {
            return steps
        }

        // Generate the next possible states and add them to the queue if not visited
        const nextStates: number[] = [current + 1, current - 1]
        if (current % 11 === 0) {
            nextStates.push(current / 11)
        }
        if (current % 5 === 0) {
            nextStates.push(current / 5)
        }

        for (const next of nextStates) {
            if (next >= 0 && !visited.has(next)) {
                queue.push([next, steps + 1])
                visited.add(next)
            }
        }
    }

    // If we exit the loop, it means we were unable to find a way to make x equal to y
    return -1
}
