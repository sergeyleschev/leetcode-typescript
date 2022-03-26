// Solution @ Sergey Leschev, Belarusian State University

// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Deletes all duplicates such that each element appears only once.

// - Parameter head: The head of the sorted linked list.
// - Returns: The head of the sorted linked list without duplicates.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
     
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
  if (!head) return null
  if (!head.next) return head

  let prev = head
  let curr = head.next

  while (curr) {
    while (curr && curr.val === prev.val) { curr = curr.next as ListNode }

    prev.next = curr
    prev = curr

    if (curr) { curr = curr.next as ListNode }
  }

  return head
}