// Solution by Sergey Leschev
// 1998. GCD Sort of an Array

function gcdSort(nums: number[]): boolean {
    const N: number = 100005
    const parent: number[] = Array.from({ length: N }, (_, i) => i)

    function find(a: number): number {
        if (parent[a] !== a) {
            parent[a] = find(parent[a])
        }
        return parent[a]
    }

    function combine(a: number, b: number): void {
        const x = find(a)
        const y = find(b)
        if (x !== y) {
            parent[x] = y
        }
    }

    function isCombined(a: number, b: number): boolean {
        return find(a) === find(b)
    }

    function divide(num: number): void {
        if (parent[num] !== num) {
            return
        }

        let numCopy = num
        let i = 2
        while (i <= numCopy / i) {
            if (numCopy % i === 0) {
                while (numCopy % i === 0) {
                    numCopy /= i
                }
                combine(num, i)
            }
            i++
        }
        if (numCopy > 1) {
            combine(numCopy, num)
        }
    }

    nums.forEach(num => divide(num))
    const sortedNums = nums.slice().sort((a, b) => a - b)
    const M = nums.length

    for (let i = 0; i < M; i++) {
        if (nums[i] !== sortedNums[i] && !isCombined(nums[i], sortedNums[i])) {
            return false
        }
    }

    return true
}
