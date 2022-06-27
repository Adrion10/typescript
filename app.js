function add(n1, n2, showresult, phrase) {
    //   console.log(typeof number1);
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect Input!");
    //   }
    var result = n1 + n2;
    if (showresult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; // number
//const number1 = "5"; // string
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result Is: ";
add(number1, number2, printResult, resultPhrase);
