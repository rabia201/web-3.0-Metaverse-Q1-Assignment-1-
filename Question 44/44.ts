// 44.Sandwiches: Write a function that accepts a array of items a person wants on
// a sandwich. The function should have one parameter that collects as many items
// as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different
// number of arguments each time.

var sandwich1: string[] = ["cheese", "chicken", "cucumber"];
var sandwich2: string[] = ["beef", "mozerella"];
var sandwich3: string[] = ["tomato", "crispyChicken", "mayo", "mozerella"];

var makeSandwich = (preference: string[]) => {
  console.log(`Hi! Your sandwitch is being prepared with ${preference}`);
};

makeSandwich(sandwich1);
makeSandwich(sandwich2);
makeSandwich(sandwich3);
