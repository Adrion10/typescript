let userInput: unknown; // me  // any
let userName: string;

userInput = 5;
userInput = "Lace";

// bejme nje qoffte sepse

if (typeof userInput === "string") {
  userName = userInput; // kemi errorr sepse vlera eshe e pa njohur , nqs e bej,e unknown any ateher iken errori
}
//never
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}
generateError("An error occourred", 500);
