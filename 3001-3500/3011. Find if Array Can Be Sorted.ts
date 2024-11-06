// Solution by Sergey Leschev
// 3011. Find if Array Can Be Sorted

// O(n)

function canSortArray(nums: number[]): boolean {
    const setBitsCount = (num: number): number => {
        let count = 0
        while (num > 0) {
            count += num & 1
            num >>= 1
        }
        return count
    }

    const n = nums.length
    const countArray: number[] = nums.map(setBitsCount)

    let prevMax = -Infinity
    let i = 0

    while (i < n) {
        let start = i
        let end = i
        let currMax = -Infinity
        let currMin = Infinity

        for (let j = i; j < n; j++) {
            if (countArray[j] === countArray[i]) {
                currMax = Math.max(currMax, nums[j])
                currMin = Math.min(currMin, nums[j])
                end++
            } else {
                break
            }
        }

        if (currMin < prevMax) return false

        prevMax = currMax
        i = end
    }

    return true
}
