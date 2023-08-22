class DoubleLinkedList {
    private head: any;
    private tail: any;
    private length: number;

    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: this.tail
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
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
            next: null,
            prev: null
        }

        const leader = this.treaversToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    }

    remove(index: number) {
        if (index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return
        }

        const leader = this.treaversToIndex(index - 1);
        const follower = leader.next.next;
        follower.prev = leader;
        leader.next = follower;
        this.length--;
        return
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
}