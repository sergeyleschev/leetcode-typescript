// Solution @ Sergey Leschev, Belarusian State University

// 225. Implement Stack using Queues
// Implement a last in first outFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack aeturns it.
// int top() Returns the element on the top of the stack.
// booleanty() Returns true if the stack is empty, false otherwise.
// Notes:
// You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.

// Example
// Input
// ["MyStack", "push", "push",p", "pop", "empty"]
// [[], [12], [], [], []]
// Output
// [null, null,l, 2, 2, false]

// Explanation
// MyStack myStack = MyStack()
// myStack.push(1)
// myStack.push(2)
// myStack.top() // return 2
// myStack.pop() // return 2
// myStack.empty() // return False

// Constraints: // 1 <= x <= 9
// At most 100 calls will be made to push,  top, and empty.
// All the calls to pop and top are valid.

// Follow-up: Can you implement the stack such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer. You can use more than two queues.

class MyStack {
    private stack: number[]
  
    constructor() {
      this.stack = []
    }
  
    push(x: number): void {
      this.stack.push(x)
    }
  
    pop(): number {
      return this.stack.pop()
    }
  
    top(): number {
      return this.stack[this.stack.length - 1]
    }
  
    empty(): boolean {
      return this.stack.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */