function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  //undefined
  console.log("Result: " + num);
}
printResult(add(5, 17));
console.log(printResult(add(5, 17))); // undefined

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
let combineValue: (a: number, b: number) => number;

combineValue = add;

console.log(combineValue(4, 6));
addAndHandle(10, 20, (result) => {
  console.log(result);
});
