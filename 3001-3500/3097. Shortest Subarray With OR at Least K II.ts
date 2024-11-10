// Solution by Sergey Leschev
// 3097. Shortest Subarray With OR at Least K II

// Time complexity : O(N)
// Space complexity : O(1)

function performOrOperation(bitCount: number[], orVal: number, n: number): number {
    orVal |= n
    for (let t = 0; t < 32; ++t) {
        bitCount[t] += n & (1 << t) ? 1 : 0
    }
    return orVal
}

function nullifyOrOperation(bitCount: number[], orVal: number, n: number): number {
    for (let t = 0; t < 32; ++t) {
        if (n & (1 << t)) {
            bitCount[t] -= 1
            if (bitCount[t] === 0) {
                orVal &= ~(1 << t)
            }
        }
    }
    return orVal
}

function minimumSubarrayLength(nums: number[], k: number): number {
    let orVal = 0
    let ans = Infinity
    let bitCount = new Array(32).fill(0)

    for (let i = 0, j = 0; i < nums.length; ++i) {
        orVal = performOrOperation(bitCount, orVal, nums[i])

        while (j <= i && orVal >= k) {
            ans = Math.min(ans, i - j + 1)
            orVal = nullifyOrOperation(bitCount, orVal, nums[j])
            j++
        }
    }
    return ans === Infinity ? -1 : ans
}
