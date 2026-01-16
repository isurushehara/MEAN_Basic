// I/O Cycle 
// Demonstrates the order of execution in Node.js's event loop
// with synchronous code, setTimeout, and I/O operations.
// Save this file as demo/iocycle.js and run it with Node.js to see the output.

// Without any I/O operation
/*
let total = 0
print()
let n = 1

function print() {
    total = n * 10;
    console.log('Total:', total);
}
    */

// Expected Output:
// Total: 10

// Explanation:
// 1. The variable `n` is initialized to 1.
// 2. The function `print` is called, which calculates `total` as `n * 10`.
// 3. The value of `total` (which is 10) is logged to the console.
// Note: This example does not include any asynchronous I/O operations,
// so the event loop phases related to I/O are not demonstrated here.

// With a simulated I/O operation using setTimeout
let totalIO = 0
setTimeout(print1, 0)
setImmediate(print2)
let m = 1

function print1() {
    totalIO = m * 10;
    console.log('Total 1:', totalIO);
    m++;
}

function print2() {
    totalIO = m * 10;
    console.log('Total 2:', totalIO);
}

// Expected Output (order of Total 1 and Total 2 may vary):
// Total 1: 10
// Total 2: 20

// Explanation:
// 1. The setTimeout schedules print1 to be called after 0 milliseconds.
// 2. The setImmediate schedules print2 to be called immediately after the current poll phase.
// 3. Depending on the event loop's timing, either print1 or print2 may execute first.
// 4. print1 calculates and logs 'Total 1', then increments m.
// 5. print2 calculates and logs 'Total 2' using the updated value of m.
// Note: The order of 'Total 1' and 'Total 2' may vary in different runs,
// demonstrating the behavior of the event loop with I/O operations.