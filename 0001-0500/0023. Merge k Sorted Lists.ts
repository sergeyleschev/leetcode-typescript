// Solution by Sergey Leschev
// 23. Merge k Sorted Lists

// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
//     }
// }

class MyPriorityQueue<T> {
    data: T[]
    comparator: (a: T, b: T) => number

    constructor(comparator: (a: T, b: T) => number) {
        this.data = []
        this.comparator = comparator
    }

    add(item: T) {
        this.data.push(item)
        this.data.sort(this.comparator)
    }

    poll(): T | undefined {
        return this.data.shift()
    }

    isEmpty(): boolean {
        return this.data.length === 0
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists || lists.length === 0) return null

    const queue = new MyPriorityQueue<ListNode>((a, b) => {
        if (a.val < b.val) return -1
        else if (a.val === b.val) return 0
        else return 1
    })

    const dummy = new ListNode(0)
    let tail = dummy

    for (const node of lists) {
        if (node !== null) {
            queue.add(node)
        }
    }

    while (!queue.isEmpty()) {
        const current = queue.poll()!
        tail.next = current
        tail = tail.next

        if (current.next !== null) {
            queue.add(current.next)
        }
    }
    return dummy.next
}
