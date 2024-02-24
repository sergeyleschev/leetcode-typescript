// Solution by Sergey Leschev
// 2972. Count the Number of Incremovable Subarrays II

// Two pointer
// O(N)

function countSortedArrays(arr1: number[], arr2: number[]): number {
    const n1 = arr1.length
    const n2 = arr2.length

    let result = 0
    let i = 0
    let j = 0

    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            result += n2 - j
            i++
        } else {
            j++
        }
    }

    return result
}

function incremovableSubarrayCount(nums: number[]): number {
    const n = nums.length

    if (n === 1) {
        return 1
    }

    let i = 0
    let j = n - 1
    let arr1: number[] = []
    let arr2: number[] = []

    while (i + 1 < n && nums[i] < nums[i + 1]) {
        arr1.push(nums[i])
        i++
    }
    arr1.push(nums[i])

    while (j - 1 >= 0 && nums[j] > nums[j - 1]) {
        arr2.push(nums[j])
        j--
    }
    arr2.push(nums[j])
    arr2.reverse()

    if (j < i) {
        const ans = (n * (n + 1)) / 2
        return ans
    }

    let ans = 0
    ans += arr1.length // 1
    ans += arr2.length // 2
    ans += countSortedArrays(arr1, arr2) // 3
    ans += 1 // 4

    return ans
}
