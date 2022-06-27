// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Lace",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// let favoriteActivites: string[];
let favoriteActivites: any[];
favoriteActivites = ["Sports", 1];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
