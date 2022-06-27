// const person: {
//   name: string;
//   age: number;
// } = {

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  // }
  // const person = {
  name: "Lace",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
// person.role.push("admin");
// person.role[1] = 10;

// person.role = [10, "admin", "user"];

// let favoriteActivites: string[];
let favoriteActivites: any[];
favoriteActivites = ["Sports", 1];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
