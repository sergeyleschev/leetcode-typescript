// Solution by Sergey Leschev
// 3002. Maximum Size of a Set After Removals

function maximumSetSize(nums1: number[], nums2: number[]): number {
    const set1 = new Set<number>()
    const set2 = new Set<number>()
    const combinedSet = new Set<number>()
    const n = nums1.length

    // Insert elements from nums1 into set1 and combinedSet
    for (const num of nums1) {
        set1.add(num)
        combinedSet.add(num)
    }

    // Insert elements from nums2 into set2 and combinedSet
    for (const num of nums2) {
        set2.add(num)
        combinedSet.add(num)
    }

    // Calculate the maximum size of the set after removals
    const maxPossibleSize = Math.min(Math.min(n / 2, set1.size) + Math.min(n / 2, set2.size), combinedSet.size)

    return maxPossibleSize
}
