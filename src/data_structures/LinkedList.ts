class LinkedList {
    private head: any;
    private tail: any;
    private length: number;

    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        this.tail.next = {
            value: value,
            next: null
        }
        this.tail = this.tail.next;
        this.length++;
    }
    prepend(value) {
        this.head = {
            value: value,
            next: this.head
        }
        this.length++;
    }
    printList() {
        const array: number[] = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index: number, value: number) {
        if (index >= this.length) {
            return this.append(value);
        }

        let newNode: any = {
            value: value,
            next: null
        }

        const leader = this.treaversToIndex(index - 1);
        const hold = leader.next;
        leader.next = newNode;
        newNode.next = hold;
        this.length++;
    }

    remove(index: number) {
        if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return
        }
        const leader = this.treaversToIndex(index - 1);
        const hold = leader.next.next;
        leader.next = hold;
        this.length--;
    }

    treaversToIndex(index: number) {
        let i = 0;
        let currentNode = this.head;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let prevNode: any = null;
        let currentNode = this.head;
        let nextNode = this.head.next;

        this.tail = {
            value: currentNode,
            next: null
        }

        while (nextNode) {
            const reversed = {
                value: currentNode.value,
                next: prevNode
            }
            prevNode = reversed;
            currentNode = {
                value: nextNode.value,
                next: prevNode
            }
            nextNode = nextNode.next;
        }

        this.head = currentNode;
    }
}