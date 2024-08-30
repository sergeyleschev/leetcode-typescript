// Solution by Sergey Leschev
// 2699. Modify Graph Edge Weights

function modifiedGraphEdges(n: number, edges: number[][], source: number, destination: number, target: number): number[][] {
    class PriorityQueue<T> {
        private elements: { element: T; priority: number }[] = []

        enqueue(element: T, priority: number): void {
            this.elements.push({ element, priority })
            this.elements.sort((a, b) => a.priority - b.priority)
        }

        dequeue(): { element: T; priority: number } | undefined {
            return this.elements.shift()
        }

        isEmpty(): boolean {
            return this.elements.length === 0
        }
    }

    const adjacencyList: [number, number][][] = Array.from({ length: n }, () => [])
    for (let i = 0; i < edges.length; i++) {
        const [nodeA, nodeB] = edges[i]
        adjacencyList[nodeA].push([nodeB, i])
        adjacencyList[nodeB].push([nodeA, i])
    }

    const distances: number[][] = Array.from({ length: n }, () => [Infinity, Infinity])
    distances[source] = [0, 0]

    runDijkstra(adjacencyList, edges, distances, source, 0, 0)
    const difference = target - distances[destination][0]
    if (difference < 0) return []

    runDijkstra(adjacencyList, edges, distances, source, difference, 1)
    if (distances[destination][1] < target) return []

    for (const edge of edges) {
        if (edge[2] === -1) edge[2] = 1
    }
    return edges

    function runDijkstra(
        adjacencyList: [number, number][][],
        edges: number[][],
        distances: number[][],
        source: number,
        difference: number,
        run: number
    ): void {
        const pq = new PriorityQueue<number>()
        pq.enqueue(source, 0)
        distances[source][run] = 0

        while (!pq.isEmpty()) {
            const current = pq.dequeue()
            if (!current) break
            const currentNode = current.element
            const currentDistance = current.priority

            if (currentDistance > distances[currentNode][run]) continue

            for (const [nextNode, edgeIndex] of adjacencyList[currentNode]) {
                let weight = edges[edgeIndex][2]
                if (weight === -1) weight = 1

                if (run === 1 && edges[edgeIndex][2] === -1) {
                    const newWeight = difference + distances[nextNode][0] - distances[currentNode][1]
                    if (newWeight > weight) {
                        edges[edgeIndex][2] = weight = newWeight
                    }
                }

                if (distances[nextNode][run] > distances[currentNode][run] + weight) {
                    distances[nextNode][run] = distances[currentNode][run] + weight
                    pq.enqueue(nextNode, distances[nextNode][run])
                }
            }
        }
    }
}
