// Solution by Sergey Leschev
// 3217. Delete Nodes From Linked List Present in Array

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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    // Create a set from nums for fast lookup
    const valuesToRemove = new Set(nums)

    // Create a dummy node to handle edge cases easily
    let dummy = new ListNode(0, head)
    let current = dummy

    // Traverse the linked list and remove the nodes with values in nums
    while (current.next !== null) {
        if (valuesToRemove.has(current.next.val)) {
            // Skip the node by updating the pointer
            current.next = current.next.next
        } else {
            // Move to the next node
            current = current.next
        }
    }

    // Return the new head of the list, which is dummy.next
    return dummy.next
}
