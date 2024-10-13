// Solution by Sergey Leschev
// 632. Smallest Range Covering Elements from K Lists

function smallestRange(nums: number[][]): number[] {
    // Helper functions to manage the heap
    const heapify = (heap: [number, number, number][], idx: number) => {
        let left = 2 * idx + 1
        let right = 2 * idx + 2
        let smallest = idx

        if (left < heap.length && heap[left][0] < heap[smallest][0]) {
            smallest = left
        }
        if (right < heap.length && heap[right][0] < heap[smallest][0]) {
            smallest = right
        }
        if (smallest !== idx) {
            ;[heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]
            heapify(heap, smallest)
        }
    }

    const siftUp = (heap: [number, number, number][], idx: number) => {
        let parent = Math.floor((idx - 1) / 2)
        if (parent >= 0 && heap[parent][0] > heap[idx][0]) {
            ;[heap[parent], heap[idx]] = [heap[idx], heap[parent]]
            siftUp(heap, parent)
        }
    }

    const pushHeap = (heap: [number, number, number][], val: [number, number, number]) => {
        heap.push(val)
        siftUp(heap, heap.length - 1)
    }

    const popHeap = (heap: [number, number, number][]) => {
        const top = heap[0]
        const last = heap.pop()
        if (heap.length > 0 && last) {
            heap[0] = last
            heapify(heap, 0)
        }
        return top
    }

    let heap: [number, number, number][] = nums.map((row, i) => [row[0], i, 0])

    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapify(heap, i)
    }

    let right = Math.max(...nums.map(row => row[0]))
    let result: [number, number] = [-1e9, 1e9]

    while (heap.length > 0) {
        const [minValue, i, j] = popHeap(heap)!

        // Update the result if we found a smaller range
        if (right - minValue < result[1] - result[0] || (right - minValue === result[1] - result[0] && minValue < result[0])) {
            result = [minValue, right]
        }

        // If we reached the end of one of the lists, return the result.
        if (j + 1 === nums[i].length) {
            return result
        }

        // Otherwise, push the next element from this list into the heap.
        const nextValue = nums[i][j + 1]
        right = Math.max(right, nextValue)
        pushHeap(heap, [nextValue, i, j + 1])
    }

    return result
}
