function add(n1, n2) {
    //   console.log(typeof number1);
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect Input!");
    }
    return n1 + n2;
}
//const number1 = 5; // number
var number1 = "5"; // string
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
