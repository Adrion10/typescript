function combine(input1, input2, resultConversation) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversation === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversation === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 40, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "40", "as-number");
console.log(combinedStringAges);
var combinedName = combine("Lace", "Noel", "as-text");
console.log(combinedName);
