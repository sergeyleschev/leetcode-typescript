// Solution by Sergey Leschev

// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// - Parameters:
//   - l1: Linked list representing non-negative integer. The digits are stored in reverse
//     order and each of nodes contain a single digit.
//   - l2: Linked list representing non-negative integer. The digits are stored in reverse
//     order and each of nodes contain a single digit.
// - Returns: Sum of l1 and l2 represented as linked list.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
    if (l1 || l2) {
        const next1 = getNextNode(l1)
        const next2 = getNextNode(l2)
        const sum = getNodeValue(l1) + getNodeValue(l2) + carry
        const nextCarry = sum >= 10 ? 1 : 0

        return new ListNode(sum % 10, addTwoNumbers(next1, next2, nextCarry))
    } else if (carry) {
        return new ListNode(1)
    }

    return null
}

function getNodeValue(node: ListNode | null): number {
    return node && node.val ? node.val : 0
}

function getNextNode(node: ListNode | null): ListNode | null {
    return node && node.next ? node.next : null
}
