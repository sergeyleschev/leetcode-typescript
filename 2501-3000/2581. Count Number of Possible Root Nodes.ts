// Solution by Sergey Leschev
// 2581. Count Number of Possible Root Nodes

// Space Complexity: O(N)
// Time Complexity: O(N)

function rootCount(edges: number[][], guesses: number[][], k: number): number {
    let parents: number[] = [] // parents[i] => parent of vertex i if tree was rooted at vertex 0
    let answer = 0 // required answer
    let tree: number[][] = []
    let guessGraph: Set<number>[] = []

    function fillParent(node: number, parent: number): void {
        parents[node] = parent

        for (const child of tree[node]) {
            if (child === parent) {
                continue
            }
            fillParent(child, node)
        }
    }

    function dfs(node: number, parent: number, correctGuesses: number): void {
        let cur = correctGuesses

        if (guessGraph[parent].has(node)) {
            cur -= 1
        }
        if (guessGraph[node].has(parent)) {
            cur += 1
        }

        if (cur >= k) {
            answer += 1
        }

        for (const child of tree[node]) {
            if (child !== parent) {
                dfs(child, node, cur)
            }
        }
    }

    tree = Array(edges.length + 1)
        .fill(0)
        .map(_ => [])
    guessGraph = Array(edges.length + 1)
        .fill(0)
        .map(_ => new Set())

    edges.forEach(edge => {
        tree[edge[0]].push(edge[1]) // Fill the tree
        tree[edge[1]].push(edge[0])
    })

    guesses.forEach(guess => {
        guessGraph[guess[0]].add(guess[1]) // Fill guesses
    })

    parents = Array(edges.length + 1).fill(0)

    let correctGuesses = 0
    fillParent(0, -1) // Fill the parents array

    for (let i = 1; i < tree.length; i++) {
        const p = parents[i]
        if (guessGraph[p].has(i)) {
            correctGuesses += 1
        } // If it's a correct guess, increase the number of guesses
    }

    if (correctGuesses >= k) {
        answer += 1
    } // If 0 is a possible node, increase answer

    for (const c of tree[0]) {
        dfs(c, 0, correctGuesses)
    } // Second dfs

    return answer
}
