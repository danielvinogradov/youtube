/**
 * Элемент doubly linked list.
 */
class DoublyLinkedListNode<T> {

    // значение
    private readonly _value: T;

    // Ссылка на предыдущий элемент. Если это head, то будет null.
    private _prev?: DoublyLinkedListNode<T>;

    // Ссылка на следующий элемент. Если это tail, то будет null.
    private _next?: DoublyLinkedListNode<T>;

    // дальше геттеры, сеттеры и конструктор, в общем ничего интересного

    constructor(value: T) {
        this._value = value;
        this._prev = null;
        this._next = null;
    }

    get value(): T {
        return this._value;
    }

    get prev(): DoublyLinkedListNode<T> {
        return this._prev;
    }

    get next(): DoublyLinkedListNode<T> {
        return this._next;
    }

    set prev(value: DoublyLinkedListNode<T>) {
        this._prev = value;
    }

    set next(value: DoublyLinkedListNode<T>) {
        this._next = value;
    }
}

export {DoublyLinkedListNode};
