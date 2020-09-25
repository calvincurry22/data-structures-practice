//data stored in stacks are LIFO

//creating a stack with an array
var stack = []
stack.push("google")
stack.push("instagram")
stack.push("youtube.com")
console.log(stack)
stack.pop();
console.log(stack)

//creating a stack with a singly linked list
/*here we are adding and removing from the beginning og the list
to achieve LIFO with linked lists, similar to shift
and unshift in an array */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null; //head
        this.last = null;  //tail
        this.size = 0      //length
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last === null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

/* A Queue is similar to a stack, but it's behavior requires FIFO */

//creating a queue with an array
/*In a queue with an array, you can use a combo of .push (enqueue) and .shift() (dequeue)
to create queue functionality */
var q = [];
q.push("First")
q.push("Second")
q.push("Third")
console.log(q)
q.shift();
console.log(q)

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        var newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

