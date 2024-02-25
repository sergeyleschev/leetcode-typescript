// Solution by Sergey Leschev
// 2709. Greatest Common Divisor Traversal

function getf(f: number[], x: number): number {
    if (f[x] === x) {
        return x
    } else {
        f[x] = getf(f, f[x])
        return f[x]
    }
}

function merge(f: number[], num: number[], x: number, y: number): void {
    let rootX = getf(f, x)
    let rootY = getf(f, y)
    if (rootX === rootY) {
        return
    }
    if (num[rootX] < num[rootY]) {
        ;[rootX, rootY] = [rootY, rootX]
    }
    f[rootY] = rootX
    num[rootX] += num[rootY]
}

function canTraverseAllPairs(nums: number[]): boolean {
    const n = nums.length
    if (n === 1) {
        return true
    }

    const f: number[] = Array.from({ length: n }, (_, i) => i)
    const num: number[] = Array.from({ length: n }, () => 1)
    const have: { [key: number]: number } = {}

    for (let i = 0; i < n; i++) {
        let x = nums[i]
        if (x === 1) {
            return false
        }
        let d = 2
        while (d * d <= x) {
            if (x % d === 0) {
                if (have[d] !== undefined) {
                    merge(f, num, i, have[d])
                } else {
                    have[d] = i
                }
                while (x % d === 0) {
                    x /= d
                }
            }
            d++
        }

        if (x > 1) {
            if (have[x] !== undefined) {
                merge(f, num, i, have[x])
            } else {
                have[x] = i
            }
        }
    }

    return num[getf(f, 0)] === n
}
