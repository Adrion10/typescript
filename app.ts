// per te shkurtuar codin
type Combinable = number | string;
type ConversionDiscriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  // resultConversation: Combinable
  resultConversation: ConversionDiscriptor

  // function combine(
  //   input1: number | string,
  //   input2: number | string,
  //   // resultConversation: string
  //   resultConversation: "as-number" | "as.text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversation === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 40, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "40", "as-number");
console.log(combinedStringAges);

const combinedName = combine("Lace", "Noel", "as-text");
console.log(combinedName);
