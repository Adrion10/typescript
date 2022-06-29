function combine(
  input1: number | string,
  input2: number | string,
  resultConversation: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversation === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 40, "as-number");
console.log(combinedAges);

const combinedName = combine("Lace", "Noel", "as-text");
console.log(combinedName);

const combinedStringAges = combine("30", "40", "as-number");
console.log(combinedStringAges);
