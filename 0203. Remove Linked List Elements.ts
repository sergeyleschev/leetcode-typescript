// Solution @ Sergey Leschev, Belarusian State University

// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Removes all elements from a linked list of integers that have value *val*.
// - Parameters:
//   - head: Linked list head.
//   - val: The value.
// - Returns: Linked list head.
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:
// Input: head = [], val = 1
// Output: []
// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []
 
// Constraints:
// The number of nodes in the list is in the range [0, 10^4].
// 1 <= Node.val <= 50
// 0 <= k <= 50

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

 function removeElements(head: ListNode | null, val: number): ListNode | null {
    let cursor: ListNode = head
    let _head: ListNode = head
  
    while (_head) {
      if (_head.val === val) {
        _head = _head.next
        cursor = _head
      } else {
        if (_head?.next?.val === val) {
          _head.next = _head.next.next
        } else {
          _head = _head.next
        }
      }
    }
  
    return cursor
  }