// Solution @ Sergey Leschev, Belarusian State University

// 147. Insertion Sort List
// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:
// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// Sorts a linked list using insertion sort.

// - Parameter head: Linked list head.
// - Returns: Sorted linked list head.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Constraints:
// The number of nodes in the list is in the range [1, 5000].
// -5000 <= Node.val <= 5000

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

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head

  let output = head
  let curr = head.next

  head.next = null // Unlink

  while (curr) {
    const next = curr.next
    const insertion = curr

    output = insert(output, insertion)
    curr = next as ListNode
  }

  return output
}

function insert(head: ListNode, other: ListNode) {
  let curr = head
  const val = other.val

  if (val <= head.val) {
    other.next = head
    return other
  }

  while (curr) {
    if ((val > curr.val && curr.next && val <= curr.next.val) || !curr.next) {
      other.next = curr.next
      curr.next = other

      return head
    }

    curr = curr.next as ListNode
  }

  return head
}