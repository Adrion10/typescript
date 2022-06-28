// const person: {
//   name: string;
//   age: number;
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // }
//   // const person = {
//   name: "Lace",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// use enum

// enum Role {
//   ADMIN = 'ADMIN',
//   READ_ONLY = 100,
//   AUTHOR= 200
// }
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Lace",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};
// person.role.push("admin");
// person.role[1] = 10;

// person.role = [10, "admin", "user"];
let favoriteActivites: any[];
//  let favoriteActivites: string[];

favoriteActivites = ["Sports", 1];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
if (person.role === Role.AUTHOR) {
  console.log("is admin ");
}
