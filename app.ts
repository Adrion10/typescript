function add(n1: number, n2: number, showresult: boolean, phrase: string) {
  //   console.log(typeof number1);
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Incorrect Input!");
  //   }
  const result = n1 + n2;
  if (showresult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // number
//const number1 = "5"; // string
const number2 = 2.8;

const printResult = true;
const resultPhrase = "Result Is: ";

add(number1, number2, printResult, resultPhrase);
