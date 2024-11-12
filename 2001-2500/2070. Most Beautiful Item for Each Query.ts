// Solution by Sergey Leschev
// 2070. Most Beautiful Item for Each Query

function maximumBeauty(items: number[][], queries: number[]): number[] {
    // Sort items by price, then by beauty in descending order (if two items have the same price).
    items.sort((a, b) => a[0] - b[0])

    // Prepare an array of queries with their original indices to maintain the output order.
    const queryPairs = queries.map((price, index) => [price, index] as [number, number])
    queryPairs.sort((a, b) => a[0] - b[0])

    const result: number[] = new Array(queries.length)
    let maxBeauty = 0
    let itemIndex = 0

    // Iterate through each query in ascending order of price.
    for (const [maxPriceAllowed, queryIndex] of queryPairs) {
        // Increment itemIndex and update maxBeauty while item prices are <= current query price.
        while (itemIndex < items.length && items[itemIndex][0] <= maxPriceAllowed) {
            maxBeauty = Math.max(maxBeauty, items[itemIndex][1])
            itemIndex++
        }
        // Assign the maxBeauty for the current query.
        result[queryIndex] = maxBeauty
    }

    return result
}
