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