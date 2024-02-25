// Solution by Sergey Leschev
// 2538. Difference Between Maximum and Minimum Price Sum

function maxOutput(n: number, edges: number[][], price: number[]): number {
    let subtreeSum: number[] = []
    let maxDifference: number = 0

    function dfs(node: number, parent: number, tree: number[][], price: number[]): number {
        let maxChildSum = 0

        for (const child of tree[node]) {
            if (child === parent) {
                continue
            }

            maxChildSum = Math.max(maxChildSum, dfs(child, node, tree, price))
        }

        subtreeSum[node] = price[node] + maxChildSum
        return subtreeSum[node]
    }

    function dfs2(node: number, parent: number, tree: number[][], price: number[], parentContribution: number): void {
        let maxChild1 = -1
        let maxChild2 = -1
        let maxChildSum1 = 0
        let maxChildSum2 = 0

        for (const child of tree[node]) {
            if (child === parent) {
                continue
            }

            const childSum = subtreeSum[child]

            if (childSum > maxChildSum1) {
                maxChildSum2 = maxChildSum1
                maxChild2 = maxChild1
                maxChildSum1 = childSum
                maxChild1 = child
            } else if (childSum > maxChildSum2) {
                maxChildSum2 = childSum
                maxChild2 = child
            }
        }

        const path1 = maxChildSum1
        const path2 = parentContribution

        maxDifference = Math.max(maxDifference, Math.max(path1, path2))

        for (const child of tree[node]) {
            if (child === parent) {
                continue
            }

            if (child === maxChild1) {
                dfs2(child, node, tree, price, price[node] + Math.max(maxChildSum2, parentContribution))
            } else {
                dfs2(child, node, tree, price, price[node] + Math.max(maxChildSum1, parentContribution))
            }
        }
    }

    const tree: number[][] = new Array(n).fill(0).map(() => [])

    for (const edge of edges) {
        const [a, b] = edge
        tree[a].push(b)
        tree[b].push(a)
    }

    subtreeSum = new Array(n).fill(0)
    dfs(0, -1, tree, price)
    dfs2(0, -1, tree, price, 0)

    return maxDifference
}
