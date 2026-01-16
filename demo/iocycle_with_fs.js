// I/O Cycle with File System
// Demonstrates the order of execution in Node.js's event loop
// with synchronous code, setTimeout, setImmediate, and file system I/O operations.
// Save this file as demo/iocycle_with_fs.js and run it with Node.js to see the output.

let fs = require('fs');

let totalIO = 0
fs.readFile('./index.js', () => {
    setTimeout(print1, 0)
    setImmediate(print2)
})

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
// 1. The file system read operation is initiated with fs.readFile.
// 2. Once the file is read, the callback function is executed.
// 3. Inside the callback, setTimeout and setImmediate are called to schedule print1 and print2.
// 4. Depending on the event loop's timing, either print1 or print2 may execute first.
// 5. print1 calculates and logs 'Total 1', then increments m.
// 6. print2 calculates and logs 'Total 2' using the updated value of m.
// Note: The order of 'Total 1' and 'Total 2' may vary in different runs,
// demonstrating the behavior of the event loop with I/O operations.