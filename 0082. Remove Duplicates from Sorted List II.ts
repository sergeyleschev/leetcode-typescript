// Solution @ Sergey Leschev, Belarusian State University

// 82. Remove Duplicates from Sorted List II
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Deletes all nodes that have duplicate numbers, leaving only distinct numbers
// from the original list.

// - Parameter head: Linked list head.
// - Returns: Linked list head.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]
     
// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) { return null }
  if (!head.next) { return head }
  let fakeHead = new ListNode(undefined, head) // beginning of a returned linked list
  let prev = fakeHead // start of the group with same values
  let current = head // pointer

  while (current) { // move through the current group until new value is seen
    while (current.next && prev.next && prev.next.val === current.next.val) { current = current.next }

    if (prev.next === current) {
      prev = prev.next // if group has only one member, move prev to current
    } else {
      prev.next = current.next // otherwise, exclude the group
    }

    current = current.next as ListNode // Move to the next node
  }

  return fakeHead.next
}