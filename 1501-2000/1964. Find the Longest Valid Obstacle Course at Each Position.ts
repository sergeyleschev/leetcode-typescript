// Solution by Sergey Leschev
// 1964. Find the Longest Valid Obstacle Course at Each Position

// Greedy with Binary Search
// Time Complexity: O(N log N), where N <= 10^5 is number of elements in array nums.
// Space Complexity: O(N)

function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    const lis: number[] = [] // Tracks the LIS at each step
    const ans: number[] = []

    for (let i = 0; i < obstacles.length; i++) {
        const x = obstacles[i]

        if (lis.length === 0 || lis[lis.length - 1] <= x) {
            // Append to LIS if the new element is >= the last element in LIS
            lis.push(x)
            ans.push(lis.length)
        } else {
            // Find the index of the smallest number > x using binary search
            let left = 0,
                right = lis.length - 1
            while (left < right) {
                const mid = Math.floor((left + right) / 2)
                if (lis[mid] <= x) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            // Replace the element at the found index
            lis[left] = x
            ans.push(left + 1)
        }
    }

    return ans
}
