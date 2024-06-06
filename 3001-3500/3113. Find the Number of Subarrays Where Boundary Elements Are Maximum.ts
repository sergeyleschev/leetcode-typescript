// Solution by Sergey Leschev
// 3113. Find the Number of Subarrays Where Boundary Elements Are Maximum

// Time Complexity: O(n)
// Space Complexity: O(n)

function numberOfSubarrays(nums: number[]): number {
    let stack: [number, number][] = []
    let res = 0

    for (let num of nums) {
        while (stack.length > 0 && stack[stack.length - 1][0] < num) {
            stack.pop()
        }

        if (stack.length === 0 || stack[stack.length - 1][0] !== num) {
            stack.push([num, 0])
        }

        let top = stack[stack.length - 1]
        top[1]++
        res += top[1]
    }

    return res
}
