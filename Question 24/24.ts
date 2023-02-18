let userName = "Elon Musk";

console.log("Is userName equal to 'Elon Musk'? I predict True.");
console.log(userName == "Elon Musk");

console.log("Is userName not equal to 'Elon'? I predict True.");
console.log(userName != "Jane Doe");

console.log("Is userName first character is 'E'? I predict True.");
console.log(userName.charAt(0) == "E");

let lowerName = userName.toLowerCase();
console.log(
  "Is userName equal to 'Elon Musk' after converting to lower case? I predict False."
);
console.log(lowerName == "Elon Musk");

let age = 30;
console.log("Is age equal to 30? I predict True.");
console.log(age == 30);

console.log("Is age not equal to 20? I predict True.");
console.log(age != 20);

console.log("Is age greater than 20? I predict True.");
console.log(age > 20);

console.log("Is age less than 40? I predict True.");
console.log(age < 40);

console.log("Is age greater than or equal to 30? I predict True.");
console.log(age >= 30);

console.log("Is age less than or equal to 20? I predict False.");
console.log(age <= 20);

let fruit = ["apple", "banana", "mango"];
console.log("Is 'apple' in the fruit array? I predict True.");
console.log(fruit.includes("apple"));

console.log("Is 'orange' in the fruit array? I predict False.");
console.log(fruit.includes("orange"));

console.log("Is 'apple' not in the fruit array? I predict False.");
console.log(!fruit.includes("apple"));

console.log("Is 'orange' not in the fruit array? I predict True.");
console.log(!fruit.includes("orange"));

let _isCold = false;
console.log("Is it cold and raining? I predict False.");
console.log(_isCold && true);

console.log("Is it cold or raining? I predict False.");
console.log(_isCold || true);
