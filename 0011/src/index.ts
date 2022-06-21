/**
 * CONSOLE TIMERS
 */
console.log("// CONSOLE TIMERS TESTS //");

import {DoublyLinkedList} from "./DoublyLinkedList/DoublyLinkedList";

const ITERATIONS_AMOUNT = 100_000;

const LINKED_LIST_TIMER_LABEL = "Linked List";
const ARRAY_TIMER_LABEL = "Array";

console.time(LINKED_LIST_TIMER_LABEL);
const dll: DoublyLinkedList<number> = new DoublyLinkedList();
for (let i = 0; i < ITERATIONS_AMOUNT; i++) {
    dll.unshift(i);
}
console.timeEnd(LINKED_LIST_TIMER_LABEL);

console.time(ARRAY_TIMER_LABEL);
const array = [];
for (let i = 0; i < ITERATIONS_AMOUNT; i++) {
    array.unshift(i);
}
console.timeEnd(ARRAY_TIMER_LABEL);

/**
 * BENCHMARK
 */
console.log("\n")
console.log("// BENCHMARK TESTS //")

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;

const BENCHMARK_PREFIX = "BENCH "

suite
    .add(BENCHMARK_PREFIX + LINKED_LIST_TIMER_LABEL, function () {
        const dll: DoublyLinkedList<number> = new DoublyLinkedList();
        for (let i = 0; i < ITERATIONS_AMOUNT; i++) {
            dll.unshift(i);
        }
    })
    .add(BENCHMARK_PREFIX + ARRAY_TIMER_LABEL, function () {
        const array = [];
        for (let i = 0; i < ITERATIONS_AMOUNT; i++) {
            array.unshift(i);
        }
    })
    // add listeners
    .on('cycle', function (event: any) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});
