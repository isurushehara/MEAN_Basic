// Event Loop
// Demonstrates the order of execution in JavaScript's event loop
// with synchronous code and setTimeout.
// Save this file as demo/index.js and run it with Node.js to see the output.
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

console.log('Middle');

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');

// Expected Output:
// Start
// Middle
// End
// Timeout 1
// Timeout 2

// Explanation:
// 1. 'Start' is logged first as it is synchronous code.
// 2. The first setTimeout is scheduled to run after 0 milliseconds, but it won't execute until the current call stack is clear.
// 3. 'Middle' is logged next as it is also synchronous code.
// 4. The second setTimeout is scheduled similarly to the first.
// 5. 'End' is logged last among the synchronous code.
// 6. After the synchronous code has finished executing, the event loop processes the message queue, executing 'Timeout 1' and then 'Timeout 2'.

// Note: The order of 'Timeout 1' and 'Timeout 2' may vary in different environments,
// but in this case, they will execute in the order they were scheduled.


// Event Loop Cycle Phases:
// 1. Timers Phase: Executes callbacks scheduled by setTimeout and setInterval.
// 2. I/O Callbacks Phase: Executes callbacks for completed I/O operations.
// 3. Idle, Prepare Phase: Internal use only.
// 4. Poll Phase: Retrieves new I/O events; executes I/O related callbacks.
// 5. Check Phase: Executes callbacks scheduled by setImmediate.
// 6. Close Callbacks Phase: Executes close event callbacks, e.g., socket.on('close', ...).