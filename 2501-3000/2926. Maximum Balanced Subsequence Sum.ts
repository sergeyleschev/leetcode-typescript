// Solution by Sergey Leschev
// 2926. Maximum Balanced Subsequence Sum

function maxBalancedSubsequenceSum(nums: number[]): number {
    let comp: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            comp.set(nums[i] - i, 0)
        }
    }

    if (comp.size === 0) {
        return Math.max(...nums)
    }

    let cnt = 0
    let sz = comp.size
    let t: number[] = Array(sz + 1).fill(0)

    Array.from(comp.keys())
        .sort((a, b) => a - b)
        .forEach((key, index) => {
            comp.set(key, cnt)
            cnt++
        })

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num > 0) {
            let n = comp.get(num - i)!
            let val = 0

            let bi = n + 1
            while (bi > 0) {
                val = Math.max(val, t[bi])
                bi -= bi & -bi
            }

            bi = n + 1
            while (bi < sz + 1) {
                t[bi] = Math.max(t[bi], val + num)
                bi += bi & -bi
            }
        }
    }

    return Math.max(...t)
}
