// Solution by Sergey Leschev
// 3048. Earliest Second to Mark Indices I

function earliestSecondToMarkIndices(nums: number[], changeIndices: number[]): number {
    function binarySearch(nums: number[], changeIndices: number[], idx: number): boolean {
        const last: Map<number, number> = new Map()
        for (let i = 0; i < idx; i++) {
            last.set(changeIndices[i], i)
        }
        if (last.size !== nums.length) return false
        let cnt = 0 // record we can reduce how many number
        for (let i = 0; i < idx; i++) {
            // if it is last time we visit this idx, we must mark
            // so check whether this idx already reduce to zero, if not, then return false.
            if (i === last.get(changeIndices[i])!) {
                if (cnt < nums[changeIndices[i] - 1]) return false
                else cnt -= nums[changeIndices[i] - 1]
            } else {
                cnt++
            }
        }
        return true
    }

    let l = 0,
        r = changeIndices.length + 1
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (binarySearch(nums, changeIndices, mid)) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return r === changeIndices.length + 1 ? -1 : r
}
