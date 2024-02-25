// Solution by Sergey Leschev
// 2589. Minimum Time to Complete All Tasks

function findMinimumTime(tasks: number[][]): number {
    const bt: number[] = Array(2002).fill(0)
    const n: number = 2001

    function prefixSum(i: number): number {
        let sum = 0
        let j = i + 1
        while (j > 0) {
            sum += bt[j]
            j -= j & -j
        }
        return sum
    }

    function add(i: number, val: number): void {
        let j = i + 1
        while (j <= n) {
            bt[j] += val
            j += j & -j
        }
    }

    const sortedTasks = tasks.sort((a, b) => a[1] - b[1])
    for (const task of sortedTasks) {
        const [start, end, duration] = task
        let d = duration - (prefixSum(end) - prefixSum(start - 1))
        let i = end
        while (d > 0) {
            if (prefixSum(i) === prefixSum(i - 1)) {
                add(i, 1)
                d -= 1
            }
            i -= 1
        }
    }
    return prefixSum(n - 1)
}
