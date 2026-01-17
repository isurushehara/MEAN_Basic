
// Node.js module is wrapped in a function like this:
/*
(function (exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
});
*/
// This is done to provide module scope and avoid polluting the global namespace.

// Example module code
let count = 0;

function increment() {
    count++;
    console.log('Count:', count);
}

module.exports = {
    increment
};


// To use this module, you would do the following in another file:
/*

const myModule = require('./demo/modules/module');

myModule.increment(); // Count: 1
myModule.increment(); // Count: 2

*/


