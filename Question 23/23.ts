let car = "carolla";
console.log(
  "Is car = carolla? I predict True.",
  car == "subaru" ? false : true
);

let year = 2023;
console.log("Is year = 2023? I predict True.", year == 2023 ? true : false);

console.log("Is year > 2023? I predict False.", year > 2020 ? true : false);

let _name = "Sia";
console.log("Is name == 'Sia'? I predict True.", _name == "Mike");

console.log("Is name == 'John'? I predict False.", _name == "John");

let x = 10;
let y = 20;
console.log("Is x + y == 30? I predict True.", x + y == 30);

console.log("Is x + y == 25? I predict False.", x + y == 25);

let _fruits = ["apple", "banana", "mango"];
console.log("Is _fruits[0] == 'apple'? I predict True.", _fruits[0] == "apple");

console.log(
  "Is _fruits[2] == 'orange'? I predict False.",
  _fruits[2] == "orange"
);

let isCold = false;
console.log("Is isCold == false? I predict True.", isCold == false);

console.log("Is isCold == true? I predict False.", isCold ? true : false);
