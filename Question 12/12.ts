//12.Greetings: Start with the array you used in Exercise 11, but instead of just
//printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s
//name.

var friendArr: string[] = ["Alexa", "Anna", "Seiraa"];
var message: string = `Hello World!, She is ${0} my best friend`;

for (var i = 0; i <= friendArr.length - 1; i++) {
  console.log(`Hello World!, She is ${friendArr[i]} my best friend.`);
}
