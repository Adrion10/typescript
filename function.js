"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    //undefined
    console.log("Result: " + num);
}
printResult(add(5, 17));
console.log(printResult(add(5, 17))); // undefined
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValue;
combineValue = add;
console.log(combineValue(4, 6));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
