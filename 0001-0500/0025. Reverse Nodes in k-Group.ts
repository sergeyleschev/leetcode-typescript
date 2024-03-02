// Solution by Sergey Leschev
// 25. Reverse Nodes in k-Group

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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    function reverse(head: ListNode | null, tail: ListNode | null): ListNode | null {
        let prev: ListNode | null = null
        let curr: ListNode | null = head
        while (curr !== tail) {
            const nextTemp = curr!.next
            curr!.next = prev
            prev = curr
            curr = nextTemp
        }
        return prev
    }

    let dummy = new ListNode(0)
    dummy.next = head
    let prevGroupTail = dummy

    while (head) {
        let groupTail: ListNode | null = prevGroupTail
        for (let i = 0; i < k; i++) {
            groupTail = groupTail!.next
            if (!groupTail) return dummy.next
        }
        const nextGroupHead = groupTail!.next
        const reversedHead = reverse(head, nextGroupHead)
        prevGroupTail.next = reversedHead
        head.next = nextGroupHead
        prevGroupTail = head
        head = nextGroupHead
    }

    return dummy.next
}
