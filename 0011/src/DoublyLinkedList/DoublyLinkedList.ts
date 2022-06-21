import {DoublyLinkedListNode} from "./DoublyLinkedListNode";

/**
 * Двусвязный список.
 */
class DoublyLinkedList<T> {

    /**
     * Первый элемент списка.
     *
     * @private
     */
    private head?: DoublyLinkedListNode<T>;

    constructor() {
        this.head = null;
    }

    /**
     * Добавить элемент в начало списка.
     *
     * @param value добавляемый элемент
     */
    public unshift(value: T): void {
        const node: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(value);

        if (this.head === null) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;

        this.head = node;
    }

    /**
     * Получить все значения списка в виде массива.
     */
    public getAllValues(): Array<T> {
        const result = [];

        let el = this.head;
        while (el !== null) {
            result.push(el.value);
            el = el.next;
        }

        return result;
    }

}

export {DoublyLinkedList};
