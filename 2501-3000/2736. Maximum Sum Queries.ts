// Solution by Sergey Leschev
// 2736. Maximum Sum Queries

// Time complexity: O(qlogq + (n + q) * logn)
// Space complexity: O(n)

function maximumSumQueries(nums1: number[], nums2: number[], queries: number[][]): number[] {
    const allNums: Map<number, number> = new Map()
    const v: [number, number][] = []

    for (let i = 0; i < nums1.length; i++) {
        v.push([nums1[i], nums2[i]])
    }

    for (const num of nums2) {
        allNums.set(num, (allNums.get(num) || 0) + 1)
    }

    v.sort(([a], [b]) => a - b)

    const m: number = queries.length
    const ind: number[] = Array.from({ length: m }, (_, i) => i)

    for (const query of queries) {
        allNums.set(query[1], (allNums.get(query[1]) || 0) + 1)
    }

    ind.sort((a, b) => queries[b][0] - queries[a][0])

    let mv = 0
    for (const key of Array.from(allNums.keys()).sort((a, b) => a - b)) {
        mv += 1
        allNums.set(key, mv)
    }

    const tree: number[] = new Array(mv << 2).fill(-1)
    const r: number[] = new Array(m).fill(0)
    let j = nums1.length - 1

    const query = (tree: number[], ind: number, left: number, right: number, x: number, y: number): number => {
        if (left >= x && right <= y) {
            return tree[ind]
        }

        const mid = (left + right) >> 1
        let res = -1

        if (x <= mid) {
            res = query(tree, ind << 1, left, mid, x, y)
        }

        if (y > mid) {
            res = Math.max(res, query(tree, (ind << 1) | 1, mid + 1, right, x, y))
        }

        return res
    }

    const update = (tree: number[], ind: number, left: number, right: number, x: number, y: number) => {
        tree[ind] = Math.max(tree[ind], y)

        if (left >= x && right <= x) {
            return
        }

        const mid = (left + right) >> 1

        if (x <= mid) {
            update(tree, ind << 1, left, mid, x, y)
        } else {
            update(tree, (ind << 1) | 1, mid + 1, right, x, y)
        }
    }

    for (const i of ind) {
        while (j >= 0 && v[j][0] >= queries[i][0]) {
            update(tree, 1, 1, mv, allNums.get(v[j][1])!, v[j][0] + v[j][1])
            j -= 1
        }

        r[i] = query(tree, 1, 1, mv, allNums.get(queries[i][1])!, mv)
    }

    return r
}
