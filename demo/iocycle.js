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
