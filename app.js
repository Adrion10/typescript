// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Lace",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
// let favoriteActivites: string[];
var favoriteActivites;
favoriteActivites = ["Sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
