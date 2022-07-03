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
    var result = n1 + n2;
    cb(result);
}
var combineValue;
combineValue = add;
console.log(combineValue(4, 6));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
