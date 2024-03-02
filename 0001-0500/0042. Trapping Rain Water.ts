// Solution by Sergey Leschev
// 42. Trapping Rain Water

function trap(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let res = 0
    let maxleft = 0
    let maxright = 0

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxleft) {
                maxleft = height[left]
            } else {
                res += maxleft - height[left]
            }
            left++
        } else {
            if (height[right] >= maxright) {
                maxright = height[right]
            } else {
                res += maxright - height[right]
            }
            right--
        }
    }
    return res
}
